
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles } from 'lucide-react';

interface GenerativeImageProps {
  prompt: string;
  className?: string;
  aspectRatio?: "1:1" | "16:9" | "4:3";
}

const GenerativeImage: React.FC<GenerativeImageProps> = ({ prompt, className = "", aspectRatio = "1:1" }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const generate = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: (process.env as any).API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: `${prompt}. High resolution, professional, clean style, high quality photography.` }],
          },
          config: {
            imageConfig: {
              aspectRatio
            }
          }
        });

        const imagePart = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
        if (imagePart && imagePart.inlineData && isMounted) {
          setImageUrl(`data:image/png;base64,${imagePart.inlineData.data}`);
        } else {
          throw new Error("No image generated");
        }
      } catch (err) {
        console.error("Image generation failed:", err);
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    generate();
    return () => { isMounted = false; };
  }, [prompt]);

  if (loading) {
    return (
      <div className={`bg-slate-200 animate-pulse flex items-center justify-center overflow-hidden relative ${className}`}>
        <div className="flex flex-col items-center gap-2 opacity-40">
          <Sparkles className="w-8 h-8 animate-spin" />
          <span className="text-xs font-bold uppercase tracking-widest">AI Generating...</span>
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`bg-slate-100 flex items-center justify-center ${className}`}>
        <img 
          src={`https://picsum.photos/seed/${encodeURIComponent(prompt)}/800/800`} 
          alt="Fallback" 
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt={prompt} 
      className={`object-cover transition-opacity duration-700 ${className} opacity-100`}
    />
  );
};

export default GenerativeImage;
