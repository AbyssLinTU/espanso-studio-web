import { Github, Download } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center font-bold text-lg">E</div>
          <span className="font-bold tracking-tight text-xl uppercase italic">Espanso <span className="text-brand">Studio</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="https://github.com/AbyssLinTU/espanso-studio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            <Github size={16} /> GitHub
          </a>
        </div>
        <a href="#download" className="md:hidden">
           <Download size={20} className="text-brand" />
        </a>
      </div>
    </nav>
  );
};
