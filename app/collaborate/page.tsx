import type { Metadata } from "next";
import TallyEmbed from "@/components/TallyEmbed";

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
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          <div className="max-w-2xl">
            <span className="animate-fade-up stagger-1 font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-6 block">
              Strategic Partnerships
            </span>
            <h1 className="animate-fade-up stagger-2 text-6xl md:text-8xl font-black tracking-[-0.04em] text-on-surface mb-8 leading-[0.9] font-headline">
              Let&apos;s Build <br />
              Something Together.
            </h1>
            <p className="animate-fade-up stagger-3 text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
              Open to joint builds, guest posts, and strategic partnerships. I
              specialize in Salesforce consulting and AI-driven workflows.
            </p>
          </div>

          {/* Collaboration Types */}
          <div className="animate-fade-up stagger-3 flex flex-col sm:flex-row lg:flex-col gap-4 lg:w-[320px] shrink-0">
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 hover:border-primary-container/40 transition-all duration-300 group flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">code_blocks</span>
                </div>
                <h3 className="text-lg font-bold font-headline">Joint Builds</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Exploring new paradigms in Salesforce automation or LLM
                integration? Let&apos;s engineer a proof-of-concept together.
              </p>
            </div>

            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 hover:border-secondary/40 transition-all duration-300 group flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">edit_note</span>
                </div>
                <h3 className="text-lg font-bold font-headline">Guest Posts</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                I write about technical strategy, deep-dives into CRM
                ecosystems, and the intersection of engineering and business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="animate-fade-up stagger-4 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12">
        {/* ─── Left Column ─── */}
        <div className="lg:col-span-7">
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
          <TallyEmbed />
        </div>
      </div>
    </div>
  );
}
