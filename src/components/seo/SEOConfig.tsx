import { Helmet } from 'react-helmet-async';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Espanso Studio',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Windows, macOS, Linux',
  description:
    'A premium visual editor and orchestrator for Espanso — the cross-platform text expander. Build complex automation logic, manage snippets, and sync instantly with a native Rust core.',
  url: 'https://abysslintu.github.io/espanso-studio-web/',
  downloadUrl:
    'https://github.com/AbyssLinTU/espanso-studio/releases/latest/download/EspansoStudio.exe',
  softwareVersion: '1.0.0',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: {
    '@type': 'Person',
    name: 'AbyssLinTU',
    url: 'https://github.com/AbyssLinTU',
  },
  keywords:
    'espanso, text expander, snippet manager, automation, yaml editor, productivity, developer tools',
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How to use Espanso Studio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Download and install Espanso Studio, then use the visual Blueprint editor or Quick editor to create text expansion snippets. Your snippets are automatically saved to your Espanso config and become active immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to install Espanso on Windows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Download Espanso from espanso.org, run the installer, then install Espanso Studio. Espanso Studio will detect your Espanso installation and sync your snippets automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I export YAML from Espanso Studio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Espanso Studio generates standard Espanso-compatible YAML files. You can view the live YAML preview at any time and copy it directly to use in any Espanso setup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Espanso Studio work on macOS and Linux?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Windows version is the primary focus right now, with macOS and Linux support planned for future releases. The underlying Espanso engine supports all platforms.',
      },
    },
  ],
};

export const SEOConfig = () => {
  return (
    <Helmet>
      {/* Primary Meta */}
      <title>Espanso Studio | Ultimate Visual Orchestrator for Text Expansion</title>
      <meta
        name="description"
        content="Espanso Studio — the premium visual editor for Espanso snippets. Build complex automation with a drag-and-drop Blueprint editor. No YAML knowledge needed. Free & open source."
      />
      <meta
        name="keywords"
        content="espanso, text expander, snippet manager, automation, yaml editor, productivity, developer tools, keyboard shortcuts, autocomplete"
      />
      <meta name="author" content="AbyssLinTU" />
      <link rel="canonical" href="https://abysslintu.github.io/espanso-studio-web/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://abysslintu.github.io/espanso-studio-web/" />
      <meta
        property="og:title"
        content="Espanso Studio | Ultimate Visual Orchestrator for Text Expansion"
      />
      <meta
        property="og:description"
        content="The premium visual editor for Espanso snippets. Build complex macros without writing YAML. Free, open source, and native-fast."
      />
      <meta
        property="og:image"
        content="https://abysslintu.github.io/espanso-studio-web/logo.png"
      />
      <meta property="og:site_name" content="Espanso Studio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Espanso Studio | Visual Editor for Espanso Snippets"
      />
      <meta
        name="twitter:description"
        content="Build complex Espanso macros visually. No YAML. Free & open source."
      />
      <meta
        name="twitter:image"
        content="https://abysslintu.github.io/espanso-studio-web/logo.png"
      />

      {/* Structured Data: SoftwareApplication */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      {/* Structured Data: FAQPage */}
      <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
    </Helmet>
  );
};
