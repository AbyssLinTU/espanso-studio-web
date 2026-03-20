import { memo, useState } from 'react';
import type { SnippetData } from '../../data/snippetsData';

interface SnippetCardProps {
  snippet: SnippetData;
  onOpen: (yaml: string) => void;
}

const categoryColors: Record<SnippetData['category'], string> = {
  date: '#f59e0b',
  git: '#f97316',
  docker: '#3b82f6',
  shell: '#10b981',
  communication: '#8b5cf6',
  development: '#ec4899',
};

const categoryLabels: Record<SnippetData['category'], string> = {
  date: '📅 Date',
  git: '🔀 Git',
  docker: '🐳 Docker',
  shell: '💻 Shell',
  communication: '✉️ Email',
  development: '🛠️ Dev',
};

const SnippetCard = memo(({ snippet, onOpen }: SnippetCardProps) => {
  const [copied, setCopied] = useState(false);
  const color = categoryColors[snippet.category];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippet.yaml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      className="snippet-card"
      style={{ '--accent': color } as React.CSSProperties}
      itemScope
      itemType="https://schema.org/SoftwareSourceCode"
    >
      <header className="snippet-card__header">
        <span className="snippet-card__category">
          {categoryLabels[snippet.category]}
        </span>
        <code className="snippet-card__trigger" itemProp="programmingLanguage">
          {snippet.trigger}
        </code>
      </header>

      <h3 className="snippet-card__title" itemProp="name">
        {snippet.title}
      </h3>
      <p className="snippet-card__desc" itemProp="description">
        {snippet.description}
      </p>

      <div className="snippet-card__code-wrapper">
        <div className="snippet-card__code-header">
          <span className="snippet-card__code-lang">YAML</span>
          <button
            className="snippet-card__copy-btn"
            onClick={handleCopy}
            aria-label="Copy YAML to clipboard"
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>
        <pre className="snippet-card__pre">
          <code itemProp="text">{snippet.yaml}</code>
        </pre>
      </div>

      <button
        className="snippet-card__open-btn"
        onClick={() => onOpen(snippet.yaml)}
        aria-label={`Open ${snippet.title} snippet in editor`}
      >
        Open in Editor →
      </button>
    </article>
  );
});

SnippetCard.displayName = 'SnippetCard';

interface SnippetLibraryProps {
  snippets: SnippetData[];
  onOpenInEditor?: (yaml: string) => void;
}

export const SnippetLibrary = memo(({ snippets, onOpenInEditor }: SnippetLibraryProps) => {
  const [activeCategory, setActiveCategory] = useState<SnippetData['category'] | 'all'>('all');
  const [openedSnippet, setOpenedSnippet] = useState<string | null>(null);

  const categories = ['all', 'date', 'git', 'docker', 'shell', 'communication', 'development'] as const;

  const filtered =
    activeCategory === 'all'
      ? snippets
      : snippets.filter((s) => s.category === activeCategory);

  const handleOpen = (yaml: string) => {
    setOpenedSnippet(yaml);
    onOpenInEditor?.(yaml);
  };

  return (
    <section id="snippets" className="snippet-library" aria-labelledby="snippets-title">
      <div className="snippet-library__header">
        <h2 id="snippets-title" className="snippet-library__title">
          Snippet Library
        </h2>
        <p className="snippet-library__subtitle">
          Ready-to-use Espanso macros for developers. Click{' '}
          <strong>"Open in Editor"</strong> to load any snippet instantly.
        </p>
      </div>

      {/* Category Filter */}
      <nav className="snippet-library__filters" aria-label="Filter snippets by category">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`snippet-library__filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
          >
            {cat === 'all' ? '✨ All' : categoryLabels[cat as SnippetData['category']]}
          </button>
        ))}
      </nav>

      {/* Snippet Grid */}
      <div className="snippet-library__grid" role="list">
        {filtered.map((snippet) => (
          <div key={snippet.id} role="listitem">
            <SnippetCard snippet={snippet} onOpen={handleOpen} />
          </div>
        ))}
      </div>

      {/* Toast notification */}
      {openedSnippet && (
        <div
          className="snippet-library__toast"
          role="status"
          aria-live="polite"
        >
          ✓ Snippet loaded into editor
        </div>
      )}
    </section>
  );
});

SnippetLibrary.displayName = 'SnippetLibrary';
