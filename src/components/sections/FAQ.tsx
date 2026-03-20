interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How to use Espanso Studio?',
    answer:
      'Download and install Espanso Studio from the link above. Once launched, use the Quick Editor for simple text replacements or the Blueprint editor for complex automations with variables, forms, and scripts. Your snippets are synced to your Espanso config automatically and become active immediately — no restart needed.',
  },
  {
    question: 'How to install Espanso on Windows?',
    answer:
      'Visit espanso.org and download the Windows installer (.msi). Run the installer and follow the prompts. After installation, launch Espanso Studio — it will auto-detect your Espanso installation. If Espanso is not found, the app will prompt you to install it with a one-click download link.',
  },
  {
    question: 'Can I export YAML from Espanso Studio?',
    answer:
      'Yes! Every snippet you create has a live YAML preview panel. You can copy the generated YAML directly, or find the config files in your Espanso config directory (~/.config/espanso/ on Linux/macOS, %APPDATA%\\espanso on Windows). The YAML is 100% standard Espanso format, compatible with all Espanso versions.',
  },
  {
    question: 'What operating systems does Espanso Studio support?',
    answer:
      'The current release targets Windows (x64). macOS and Linux support is planned for future releases. The underlying Espanso engine supports all three platforms, and Espanso Studio is built with Tauri which is cross-platform by design.',
  },
  {
    question: 'Is Espanso Studio free and open source?',
    answer:
      'Yes, Espanso Studio is completely free and open source under the MIT license. You can find the full source code on GitHub at github.com/AbyssLinTU/espanso-studio. Contributions, bug reports, and feature requests are welcome.',
  },
  {
    question: 'How does the Blueprint editor work?',
    answer:
      'The Blueprint editor is a visual node-based interface. You drag and drop nodes (triggers, variables, outputs) onto a canvas and connect them with "noodle" wires. This builds a visual representation of your Espanso match, which is then compiled to YAML by the Rust backend. It\'s similar to visual programming in tools like Unreal Engine\'s Blueprints.',
  },
  {
    question: 'Can Espanso Studio run Python and shell scripts?',
    answer:
      'Yes! Espanso supports script execution natively, and Espanso Studio makes it easy to configure script triggers. The app includes special handling for Windows to automatically clear trigger text before executing scripts, preventing residual characters from appearing in your output.',
  },
];

interface FAQItemProps {
  item: FAQItem;
  index: number;
}

const FAQItemComponent = ({ item, index }: FAQItemProps) => {
  return (
    <details
      className="faq__item"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <summary className="faq__question" itemProp="name">
        <span className="faq__question-number">{String(index + 1).padStart(2, '0')}</span>
        <span>{item.question}</span>
        <span className="faq__chevron" aria-hidden="true">
          ↓
        </span>
      </summary>

      <div
        className="faq__answer"
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <p itemProp="text">{item.answer}</p>
      </div>
    </details>
  );
};

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="faq"
      aria-labelledby="faq-title"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="faq__header">
        <h2 id="faq-title" className="faq__title">
          Frequently Asked Questions
        </h2>
        <p className="faq__subtitle">
          Everything you need to know about Espanso Studio and Espanso automation.
        </p>
      </div>

      <div className="faq__list">
        {faqData.map((item, index) => (
          <FAQItemComponent key={item.question} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};
