import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { ParticleNetwork } from './components/mockups/ParticleNetwork';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';

import { DOWNLOAD_URL } from './constants';

const App = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const spring = {
    type: "spring" as const,
    stiffness: 400,
    damping: 25
  };

  return (
    
    <div className="relative min-h-screen bg-[#0f0f11] text-white font-sans selection:bg-brand/30 overflow-x-hidden">
      {/* Dynamic Graph Effect Background */}
      <ParticleNetwork />
      
      {/* Mesh Gradient Overlay */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand/5 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-20 px-6">
        <HeroSection fadeInUp={fadeInUp} spring={spring} />
        
        <div className="h-20" /> {/* Spacer */}

        <FeaturesSection fadeInUp={fadeInUp} />
      </main>

      <Footer />

      {/* Mobile Fixed Download Button */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <motion.a 
          href={DOWNLOAD_URL}
          download
          whileTap={{ scale: 0.95 }}
          className="pointer w-full bg-brand py-4 rounded-xl flex items-center justify-center gap-3 font-bold shadow-2xl shadow-brand/40 no-underline text-white"
        >
          <Download size={20} />
          Download .exe
        </motion.a>
      </div>
    </div>
  );
};

export default App;
