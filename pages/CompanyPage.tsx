
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Zap, ShieldCheck, TrendingUp, LayoutDashboard, 
  MessagesSquare, Briefcase, CheckCircle, Plus, Sparkles 
} from 'lucide-react';
import GenerativeImage from '../components/GenerativeImage';
import ActionModal from '../components/ActionModal';

const CompanyPage: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="space-y-32 pb-32 overflow-hidden bg-white">
      {/* Hero */}
      <section className="pt-20 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              Business Intelligence
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
              Hire Smart <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Teen Talent</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Fresh perspectives, digital natives, and cost-effective scaling for your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => setActiveModal('hire')}
                className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-indigo-100 transition-all active:scale-95"
              >
                Hire Teen Talent
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-xl font-bold text-lg transition-all">
                How it works
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-slate-100 rounded-[3rem] -rotate-3 scale-105" />
            <GenerativeImage 
              prompt="Professional corporate meeting room with a young creative professional presenting a digital dashboard, clean minimal aesthetic, depth of field" 
              className="relative rounded-[2.5rem] shadow-2xl z-10 w-full aspect-square md:aspect-video lg:aspect-square"
            />
          </motion.div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="bg-slate-50 py-32 border-y border-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { icon: Zap, title: "Fast Execution", desc: "Digital natives who speak the language of the modern web." },
              { icon: ShieldCheck, title: "Cost Effective", desc: "Reduce overhead by up to 60% compared to traditional hiring." },
              { icon: Users, title: "Social Impact", desc: "Contribute to the professional growth of the next generation." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 text-center"
              >
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact CTA */}
      <section className="container mx-auto max-w-6xl px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-white"
        >
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Sparkles className="w-64 h-64" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">Post Your First Project <span className="text-indigo-400">Today</span></h2>
              <p className="text-slate-400 text-lg">Join 500+ companies hiring from our talent pool.</p>
              <button 
                onClick={() => setActiveModal('hire')}
                className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all"
              >
                Get Started
              </button>
            </div>
            <GenerativeImage 
              prompt="A sleek modern office workspace with multiple monitors, creative gadgets, and a coffee cup, warm lighting" 
              className="rounded-3xl shadow-2xl border-4 border-white/5"
            />
          </div>
        </motion.div>
      </section>

      <ActionModal 
        isOpen={activeModal === 'hire'} 
        onClose={() => setActiveModal(null)} 
        title="Post a Project"
      >
        <div className="space-y-6">
          <p className="text-slate-600">Tell us what you need. We'll match you with the best teen talent.</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Project Title</label>
              <input type="text" placeholder="e.g. Social Media Design" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Category</label>
              <select className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500">
                <option>Design</option>
                <option>Content Writing</option>
                <option>Video Editing</option>
                <option>Web Development</option>
              </select>
            </div>
            <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-colors">
              Continue to Details
            </button>
          </div>
        </div>
      </ActionModal>
    </div>
  );
};

export default CompanyPage;
