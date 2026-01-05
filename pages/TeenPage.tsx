
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Target, Wallet, Clock, Code, Palette, Megaphone, 
  FileText, Video, Search, CheckCircle2, ChevronRight, Sparkles 
} from 'lucide-react';
import GenerativeImage from '../components/GenerativeImage';
import ActionModal from '../components/ActionModal';

const FeatureCard = ({ icon: Icon, title, desc, color }: any) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${color}`}>
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

const TeenPage: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-24 pb-24 overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative pt-10 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants} className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold animate-pulse">
              <Sparkles className="w-4 h-4" />
              Empowering the next generation
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
              Earn, Learn & <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-500">Grow</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Start your professional journey at 14. Real projects, real money, and skills that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => setActiveModal('join')}
                className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all hover:-translate-y-1"
              >
                Join as a Teen
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                Explore Projects
              </button>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-3 scale-105 opacity-10 group-hover:rotate-6 transition-all duration-500" />
            <GenerativeImage 
              prompt="A group of diverse teenagers working happily on high-tech laptops in a vibrant modern workspace, sunny atmosphere" 
              className="relative rounded-[2rem] shadow-2xl z-10 w-full aspect-square"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Funngro */}
      <section className="container mx-auto max-w-6xl px-6">
        <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 italic">Why Funngro?</h2>
          <p className="text-slate-500 text-lg">The perfect headstart for your professional life.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard icon={Wallet} title="Real Earning" desc="Get paid for your skills directly. Build your financial independence." color="bg-green-500" />
          <FeatureCard icon={Target} title="Skill Up" desc="Learn by doing. Textbooks can't teach what projects do." color="bg-blue-500" />
          <FeatureCard icon={Rocket} title="Experience" desc="Build a portfolio that college admissions will love." color="bg-purple-500" />
          <FeatureCard icon={Clock} title="Flexibility" desc="Balance school and work with self-paced projects." color="bg-orange-500" />
        </div>
      </section>

      {/* Skills */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">Master New <span className="text-blue-400">Skills</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                {[
                  { icon: Code, title: "Web Dev", color: "bg-blue-600" },
                  { icon: Palette, title: "Design", color: "bg-pink-600" },
                  { icon: Megaphone, title: "Marketing", color: "bg-yellow-600" },
                  { icon: Video, title: "Video", color: "bg-red-600" }
                ].map((skill, i) => (
                  <motion.div 
                    key={i} 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveModal('skill-info')}
                    className="bg-white/10 p-6 rounded-2xl border border-white/10 flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${skill.color}`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold">{skill.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="hidden lg:block">
              <GenerativeImage 
                prompt="Close up of a professional laptop screen showing code and graphic design tools, colorful glowing UI" 
                className="rounded-3xl shadow-2xl border-4 border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ActionModal 
        isOpen={activeModal === 'join'} 
        onClose={() => setActiveModal(null)} 
        title="Welcome to the future!"
      >
        <div className="space-y-6">
          <p className="text-slate-600">You're about to join 100,000+ teens building their future. Let's get started!</p>
          <div className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors" />
            <input type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors" />
            <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
              Continue
            </button>
          </div>
        </div>
      </ActionModal>

      <ActionModal 
        isOpen={activeModal === 'skill-info'} 
        onClose={() => setActiveModal(null)} 
        title="Skill Details"
      >
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <p className="text-blue-800 font-medium">✨ Pro Tip: Companies are looking for developers who can build landing pages and small apps.</p>
          </div>
          <p className="text-slate-600">At Funngro, we provide the learning modules and the projects to apply what you learn. Start earning while you study!</p>
          <button onClick={() => setActiveModal(null)} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl">
            Got it!
          </button>
        </div>
      </ActionModal>
    </motion.div>
  );
};

export default TeenPage;
