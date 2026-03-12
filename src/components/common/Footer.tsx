export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 py-20 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8 opacity-50">
          <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center font-bold text-xs">E</div>
          <span className="font-bold tracking-tight text-sm uppercase italic">Espanso Studio</span>
        </div>
        <p className="text-gray-500 text-sm mb-4">
          Ultimate Visual Environment. Powered by Tauri & Rust.
        </p>
        <div className="flex justify-center gap-6 text-xs text-gray-600 uppercase tracking-widest font-semibold">
          <a href="https://espanso.org" className="hover:text-brand transition-colors">Espanso</a>
          <a href="https://github.com/AbyssLinTU/espanso-studio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
