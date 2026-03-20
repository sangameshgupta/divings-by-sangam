import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Collaborate",
  description:
    "Open to joint builds, guest posts, and strategic partnerships. Let's build something together.",
};

export default function CollaboratePage() {
  return (
    <div className="px-6 max-w-7xl mx-auto min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="mb-24 pt-16">
        <div className="max-w-4xl">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-6 block">
            Strategic Partnerships
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] text-on-surface mb-8 leading-[0.9] font-headline">
            Let&apos;s Build <br />
            Something Together.
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
            Open to joint builds, guest posts, and strategic partnerships. I
            specialize in Salesforce architecture and AI-driven workflows.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12">
        {/* ─── Left Column: Collaboration Types ─── */}
        <div className="lg:col-span-7 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Joint Builds */}
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-primary-container/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">code_blocks</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-headline">
                Joint Builds
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Exploring new paradigms in Salesforce automation or LLM
                integration? Let&apos;s engineer a proof-of-concept together.
              </p>
            </div>

            {/* Guest Posts */}
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-secondary/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">edit_note</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-headline">
                Guest Posts
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                I write about technical strategy, deep-dives into CRM
                ecosystems, and the intersection of engineering and business.
              </p>
            </div>
          </div>

          {/* Featured Collaboration Visual */}
          <div className="relative rounded-xl overflow-hidden aspect-video bg-surface-container-highest">
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/10" />
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <div className="bg-surface-container-lowest/80 backdrop-blur-md p-6 rounded-lg border border-outline-variant/20 inline-flex flex-col">
                <span className="font-label text-[10px] text-secondary-fixed-dim uppercase tracking-[0.2em] mb-2">
                  The Consultant Insight
                </span>
                <p className="font-body italic text-sm text-on-surface/90">
                  &ldquo;Successful collaboration isn&apos;t about resource
                  sharing; it&apos;s about perspective synthesis.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Right Column: Contact Form ─── */}
        <div className="lg:col-span-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
