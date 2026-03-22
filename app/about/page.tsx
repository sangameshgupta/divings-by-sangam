import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Divings by Sangam — a one-person company at the intersection of deep technical architecture and digital storytelling.",
};

const personas = [
  {
    icon: "terminal",
    label: "The Builder",
    title: "Precision in Infrastructure.",
    description:
      "Developing robust, scalable solutions where code meets business logic. Specialized in creating architectural blueprints that withstand the test of growth.",
    tags: [
      { text: "Salesforce Consultant", accent: true },
      { text: "Thinking in Systems", accent: false },
    ],
  },
  {
    icon: "edit_note",
    label: "The Writer",
    title: "Clarity in Complexity.",
    description:
      'Translating dense technical shifts into human-centric narratives. "Divings" is a space for long-form exploration of how technology shapes our work.',
    tags: [
      { text: "Editorial Strategy", accent: true },
      { text: "Tech Philosophy", accent: false },
    ],
  },
  {
    icon: "query_stats",
    label: "The Consultant",
    title: "Strategic Intelligence.",
    description:
      "Bridging the gap between legacy CRM power and the frontier of Artificial Intelligence. High-level advisory for complex digital ecosystems.",
    tags: [
      { text: "AI Integration", accent: true },
      { text: "Strategic Consulting", accent: false },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="px-6 max-w-6xl mx-auto">
      {/* ─── Hero Section ─── */}
      <header className="mb-24 md:mb-32 pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="font-label text-xs tracking-[0.2em] text-secondary mb-4 uppercase">
              One Person Company
            </p>
            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] text-on-surface mb-8 font-headline">
              The Story
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-lg">
              A solo endeavor dedicated to the intersection of deep technical
              architecture and the art of digital storytelling.
            </p>
          </div>
          <div className="w-full md:w-1/3 aspect-[4/5] bg-surface-container-low relative overflow-hidden group rounded-sm">
            <div className="absolute inset-0 bg-surface-container-highest flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-on-surface/20">
                person
              </span>
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-outline-variant/20" />
          </div>
        </div>
      </header>

      {/* ─── Triple Persona Grid ─── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-outline-variant/10">
        {personas.map((persona, i) => (
          <div
            key={persona.label}
            className={`p-8 md:p-12 hover:bg-surface-container-low transition-colors duration-300 ${
              i < personas.length - 1
                ? "border-b md:border-b-0 md:border-r border-outline-variant/10"
                : ""
            }`}
          >
            <span className="material-symbols-outlined text-primary mb-6 text-3xl block">
              {persona.icon}
            </span>
            <h2 className="font-label text-sm tracking-[0.2em] uppercase text-on-surface-variant mb-4">
              {persona.label}
            </h2>
            <h3 className="text-2xl font-bold mb-6 text-on-surface font-headline">
              {persona.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              {persona.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {persona.tags.map((tag) => (
                <span
                  key={tag.text}
                  className={`px-3 py-1 bg-surface-container-highest text-[10px] font-label tracking-[0.2em] uppercase ${
                    tag.accent
                      ? "text-secondary border-l-2 border-secondary"
                      : "text-on-surface-variant"
                  }`}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ─── Philosophy Section ─── */}
      <section className="mt-24 md:mt-48 flex flex-col md:flex-row gap-16 items-start">
        <div className="md:sticky md:top-32 w-full md:w-1/3">
          <h4 className="font-label text-xs tracking-[0.3em] uppercase text-outline mb-4">
            The Philosophy
          </h4>
          <p className="text-4xl font-black leading-tight tracking-tighter text-on-surface font-headline">
            One person. <br />
            Infinite scale.
          </p>
        </div>
        <div className="w-full md:w-2/3 space-y-12">
          {/* Quote Block */}
          <div className="bg-surface-container-low p-10 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/10 transition-colors pointer-events-none" />
            <p className="text-xl md:text-2xl text-on-surface leading-relaxed font-light italic">
              &ldquo;I believe the future of enterprise technology isn&apos;t
              found in larger teams, but in sharper individuals. Divings is the
              manifestation of that belief&mdash;using AI to amplify insight and
              Salesforce to anchor execution.&rdquo;
            </p>
            <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center justify-between">
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                Gella Sangamesh Gupta &mdash; Founder, Divings
              </span>
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-outline-variant/10 rounded-xl">
              <h5 className="font-bold text-on-surface mb-4 font-headline">
                Salesforce Expertise
              </h5>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                5+ years navigating the world&apos;s most complex
                CRM. From Core clouds to specialized industry verticals.
              </p>
            </div>
            <div className="p-8 border border-outline-variant/10 rounded-xl">
              <h5 className="font-bold text-on-surface mb-4 font-headline">
                AI Integration
              </h5>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Moving beyond the hype. Implementing LLMs and generative agents
                that actually drive business value and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing CTA ─── */}
      <section className="mt-32 md:mt-56 text-center pb-12">
        <div className="inline-block p-[1px] monolith-gradient rounded-xl">
          <div className="bg-surface-container-lowest px-12 py-16 rounded-[calc(0.75rem-1px)]">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-6 font-headline">
              Let&apos;s build something intentional.
            </h2>
            <p className="text-on-surface-variant max-w-md mx-auto mb-10 leading-relaxed">
              Currently accepting select consulting engagements for Q3-Q4.
            </p>
            <Link
              href="/collaborate"
              className="bg-primary-container text-on-primary-container font-bold px-8 py-4 rounded-xl hover:scale-95 transition-transform duration-200 inline-block"
            >
              Secure an Insight Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
