import { Layers, Search, Plus, Eye } from 'lucide-react';

interface BlueprintMockupProps {
  fadeInUp: any;
}

export const BlueprintMockup = ({ fadeInUp }: BlueprintMockupProps) => {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden border border-[#2D2D30] bg-[#09090B] flex shadow-2xl">
      {/* Sidebar Mockup */}
      <div className="w-12 md:w-16 border-r border-[#2D2D30] bg-[#09090B] flex flex-col items-center py-4 gap-4">
        <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center text-brand text-[10px] font-bold">ES</div>
        <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center"><Layers size={14} className="text-brand" /></div>
        <div className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center"><Plus size={14} className="text-gray-500" /></div>
      </div>

      {/* Content Area Mockup */}
      <div className="flex-1 bg-[#121214] flex flex-col min-w-0">
        {/* Header Mockup */}
        <div className="h-10 border-b border-[#2D2D30] flex items-center justify-between px-4 bg-[#121214]">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-8 bg-brand/40 rounded-full" />
            <div className="h-1.5 w-12 bg-white/5 rounded-full" />
          </div>
          <div className="flex gap-2">
             <div className="h-5 w-12 bg-brand rounded-md" />
          </div>
        </div>

        {/* Blueprint Area */}
        <div className="flex-1 p-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-brand)_0%,_transparent_70%)]" />
          
          {/* Visual Nodes */}
          <div className="relative h-full flex items-center justify-center">
            {/* Trigger Node */}
            <div className="w-24 bg-[#1C1C1F] border border-[#2D2D30] p-3 rounded-lg shadow-xl z-20">
               <div className="text-[8px] font-bold text-brand uppercase mb-2 tracking-tighter">Trigger</div>
               <div className="h-1.5 w-full bg-white/5 rounded" />
            </div>

            {/* Visual Professional Edge (Dashed Connection) */}
            <div className="w-12 h-2 relative flex items-center justify-center">
              <svg className="w-full h-full overflow-visible pointer-events-none">
                <line 
                  x1="0" y1="4" x2="48" y2="4" 
                  stroke="currentColor" 
                  className="text-brand/50 flow-edge-anim"
                  strokeWidth="1.5"
                />
              </svg>
              <div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_10px_var(--color-brand)] z-30" />
              <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)] z-30" />
            </div>

            {/* Replace Node */}
            <div className="w-24 bg-[#1C1C1F] border border-brand/30 p-3 rounded-lg shadow-xl z-20">
               <div className="text-[8px] font-bold text-brand uppercase mb-2 tracking-tighter">Replace</div>
               <div className="h-1.5 w-full bg-brand/10 rounded" />
               <div className="h-1.5 w-2/3 bg-brand/10 rounded mt-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Live Preview Panel Mockup */}
      <div className="w-20 md:w-40 border-l border-[#2D2D30] bg-[#09090B] p-3 hidden sm:block">
         <div className="flex items-center gap-1.5 mb-4">
            <Eye size={10} className="text-brand" />
            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Live Preview</span>
         </div>
         <div className="space-y-1.5 font-mono text-[8px]">
            <div className="text-indigo-400">matches:</div>
            <div className="text-gray-500">- <span className="text-indigo-300">trigger:</span> <span className="text-emerald-400">":id"</span></div>
            <div className="text-gray-500 ml-2"><span className="text-indigo-300">replace:</span> <span className="text-amber-400">"ID123"</span></div>
         </div>
      </div>
    </div>
  );
};
