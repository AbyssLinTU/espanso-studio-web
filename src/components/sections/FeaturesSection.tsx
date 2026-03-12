import { motion } from 'framer-motion';
import { Layers, Cpu } from 'lucide-react';
import { FeatureCard } from '../common/FeatureCard';
import { BlueprintMockup } from '../mockups/BlueprintMockup';

interface FeaturesSectionProps {
  fadeInUp: any;
}

export const FeaturesSection = ({ fadeInUp }: FeaturesSectionProps) => {
  return (
    <section id="features" className="max-w-6xl mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
        {/* Main Visual Proof (High-Fidelity App Mockup) */}
        <motion.div 
           {...fadeInUp}
           className="md:col-span-8 md:row-span-2 glass rounded-[2.5rem] p-4 overflow-hidden group border border-white/5 relative bg-[#09090B]"
        >
          <BlueprintMockup fadeInUp={fadeInUp} />
        </motion.div>

        {/* Smaller Detailed Feature Cards */}
        <FeatureCard 
          icon={Layers}
          className="md:col-span-4 md:row-span-1"
          title="Hybrid Workflow"
          desc="Switch seamlessly between Quick Mode for simple text and Blueprint for complex logic."
        >
          {/* <div className="flex flex-col gap-2 mt-4">
            <div className="bg-white/5 rounded-lg p-3 flex items-center justify-between group/item">
              <span className="text-xs font-mono font-bold text-brand">:id</span>
              <div className="bg-brand/20 text-brand px-2 py-0.5 rounded text-[10px] font-bold">Quick</div>
            </div>
            <div className="bg-brand/10 border border-brand/30 rounded-lg p-3 flex items-center justify-between group/item animate-pulse">
              <span className="text-xs font-mono font-bold text-indigo-400 underline">Blueprint</span>
              <div className="bg-brand text-white px-2 py-0.5 rounded text-[10px] font-bold">Active</div>
            </div>
          </div> */}
        </FeatureCard>

        <FeatureCard 
          icon={Cpu}
          className="md:col-span-4 md:row-span-1"
          title="Windows Scripting"
          desc="Optimized Python & Shell execution with automatic trigger clearing. No residual text."
        />
      </div>
    </section>
  );
};
