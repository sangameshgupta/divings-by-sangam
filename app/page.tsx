import Link from "next/link";
import ConsultantInsight from "@/components/ConsultantInsight";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* ─── Hero Section ─── */}
      <section className="mb-32 pt-16">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.04em] leading-[0.9] text-on-surface mb-8 text-glow font-headline">
            Divings by Sangam
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
            <span className="font-label text-sm uppercase tracking-[0.2em] py-1 px-3 bg-surface-container-highest text-secondary border-l-2 border-secondary inline-block">
              Builder + Writer + Salesforce/AI Consultant
            </span>
          </div>
          <p className="text-xl md:text-2xl leading-relaxed text-on-surface-variant max-w-2xl font-light mb-12">
            Exploring the intersections of technology and creativity. A digital
            space dedicated to deep-dives into engineering complexity and the art
            of modern systems.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              className="group relative px-8 py-4 bg-primary-container text-on-primary-container rounded-md font-bold tracking-tight overflow-hidden transition-all active:scale-95"
              href="https://sangameshgellagupta.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Read my Newsletter
                <span className="material-symbols-outlined text-sm">
                  north_east
                </span>
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <Link
              className="px-8 py-4 bg-transparent border border-outline-variant/20 text-on-surface hover:border-outline-variant/50 hover:bg-surface-container-low rounded-md font-bold tracking-tight transition-all active:scale-95"
              href="/projects"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Bento Grid Section ─── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
        {/* Featured Writing */}
        <div className="md:col-span-8 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between min-h-[400px] border border-outline-variant/10 hover:border-outline-variant/30 transition-all">
          <div>
            <span className="font-label text-[10px] tracking-[0.2em] text-primary uppercase mb-6 block">
              LATEST EDITION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight font-headline">
              Architecture as Language: Why Code is the New Literature
            </h2>
            <p className="text-on-surface-variant mb-8 line-clamp-3">
              In this dive, I explore how the paradigms of software design are
              mirroring the evolution of linguistic structures in the age of
              generative AI...
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">person</span>
            </div>
            <div>
              <p className="text-sm font-bold">Sangam Gellagupta</p>
              <p className="text-xs text-on-surface-variant">
                March 12, 2024 &bull; 8 min read
              </p>
            </div>
          </div>
        </div>

        {/* Consultant Insight */}
        <div className="md:col-span-4">
          <ConsultantInsight quote="AI is not the pilot; it's the high-performance engine that requires a human architect to set the flight path." />
        </div>

        {/* The Toolkit */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 hover:border-primary/20 transition-all">
          <h4 className="text-xl font-bold mb-4 font-headline">The Toolkit</h4>
          <ul className="space-y-3 font-label text-xs tracking-[0.15em] text-on-surface-variant">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full" /> SALESFORCE
              CORE
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full" /> APEX &amp;
              LIGHTNING
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full" /> LLM
              ORCHESTRATION
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full" /> REACT &amp;
              TAILWIND
            </li>
          </ul>
        </div>

        {/* Workspace Image */}
        <div className="md:col-span-8 overflow-hidden rounded-xl group relative h-[250px] border border-outline-variant/10 bg-surface-container-highest">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10" />
          <div className="absolute bottom-6 left-8 z-20">
            <p className="font-label text-[10px] tracking-[0.3em] uppercase text-white/70">
              ENVIRONMENT
            </p>
            <h5 className="text-2xl font-bold text-white font-headline">
              The Minimalist Workspace
            </h5>
          </div>
        </div>
      </section>

      {/* ─── Newsletter CTA ─── */}
      <section className="mb-32">
        <NewsletterSignup />
      </section>
    </div>
  );
}
