import type { Metadata } from "next";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Long-form teaching guides built around real problems — worked examples, visual walk-throughs, and the kind of context most docs skip.",
};

export default function LearnPage() {
  return (
    <div className="px-6 max-w-7xl mx-auto">
      {/* ─── Editorial Header ─── */}
      <section className="mb-24 pt-16">
        <span className="animate-fade-up stagger-1 font-label text-secondary uppercase tracking-[0.2em] text-[11px] mb-4 block">
          Learn
        </span>
        <h1 className="animate-fade-up stagger-2 text-5xl md:text-7xl font-black tracking-[-0.04em] font-headline mb-8 text-on-surface max-w-4xl">
          Field notes,{" "}
          <span className="text-primary">written</span> to teach.
        </h1>
        <p className="animate-fade-up stagger-3 text-on-surface/60 text-lg md:text-xl leading-relaxed max-w-2xl font-body">
          Long-form teaching guides built around real problems. Each one is the
          explanation I wish existed the first time I had to figure it out — worked
          examples, visual walk-throughs, and the kind of context most docs skip.
        </p>
      </section>

      {/* ─── Guides Grid ─── */}
      <div className="animate-fade-up stagger-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {guides.map((guide) => (
          <a
            key={guide.slug}
            href={guide.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-surface-container-low/40 hover:bg-surface-container-low/70 border border-outline-variant/10 hover:border-primary/30 rounded-sm p-8 transition-all"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4 text-on-surface group-hover:text-primary transition-colors">
              {guide.title}
            </h2>
            <p className="text-on-surface/60 leading-relaxed font-body mb-6">
              {guide.description}
            </p>
            <span className="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold">
              Open Guide &rarr;
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
