export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 py-20 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8 opacity-50">
          <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center font-bold text-xs">E</div>
          <span className="font-bold tracking-tight text-sm uppercase italic">Espanso Studio</span>
        </div>
        <p className="text-gray-500 text-sm mb-2">
          Ultimate Visual Environment. Powered by Tauri & Rust.
        </p>
        <p className="text-gray-600 text-xs mb-8">
          © {currentYear} Espanso Studio. Open source under MIT License.
        </p>
        <nav aria-label="Footer navigation">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-600 uppercase tracking-widest font-semibold">
            <a
              href="https://espanso.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
              aria-label="Visit Espanso official website"
            >
              Espanso
            </a>
            <a
              href="https://espanso.org/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
              aria-label="Read Espanso documentation"
            >
              Docs
            </a>
            <a
              href="https://github.com/AbyssLinTU/espanso-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="View Espanso Studio source code on GitHub"
            >
              GitHub
            </a>
            <a
              href="https://github.com/AbyssLinTU/espanso-studio/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
              aria-label="Download Espanso Studio releases"
            >
              Releases
            </a>
            <a
              href="https://github.com/AbyssLinTU/espanso-studio/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
              aria-label="Report a bug or request a feature on GitHub Issues"
            >
              Issues
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};
