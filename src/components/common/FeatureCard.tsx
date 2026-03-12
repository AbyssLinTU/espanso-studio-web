import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  className?: string;
  children?: React.ReactNode;
}

export const FeatureCard = ({ title, desc, icon: Icon, className = "", children }: FeatureCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`glass rounded-[2rem] p-8 border border-white/5 flex flex-col justify-center gap-4 group ${className}`}
  >
    <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-300">
      <Icon size={28} />
    </div>
    <div>
      <h3 className="text-2xl font-black italic uppercase tracking-tighter">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
    {children && (
      <div className="mt-4">
        {children}
      </div>
    )}
  </motion.div>
);
