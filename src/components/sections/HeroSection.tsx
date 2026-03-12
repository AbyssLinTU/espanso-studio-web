import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import { DOWNLOAD_URL } from '../../constants';
interface HeroSectionProps {
  fadeInUp: any;
  spring: any;
}

export const HeroSection = ({ fadeInUp, spring }: HeroSectionProps) => {
  return (
    <section className="max-w-4xl mx-auto text-center mb-10">
      <motion.div 
        {...fadeInUp}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold mb-6 uppercase tracking-wider"
      >
        <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
        v1.0.2 is now available
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
      >
        Ultimate Visual <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-indigo-400 to-indigo-500">
          Environment.
        </span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        The premium visual orchestrator for Espanso. Build complex logic, 
        manage snippets, and sync instantly with a native Rust core.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...spring, delay: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.a 
          id="download"
          href={DOWNLOAD_URL}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pointer group relative px-10 py-6 bg-brand hover:bg-indigo-600 rounded-[2rem] flex items-center gap-3 font-black text-xl transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(99,102,241,0.6)]"
        >
          <Download size={24} />
          Download .exe
          <ChevronRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.a>
        <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">
          v1.0.2 | Native Rust Engine
        </span>
      </motion.div>
    </section>
  );
};
