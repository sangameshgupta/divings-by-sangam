export default function NewsletterSignup() {
  return (
    <section className="bg-surface-container-low rounded-2xl p-12 md:p-20 text-center relative overflow-hidden border border-outline-variant/10">
      <div className="absolute top-0 right-0 w-64 h-64 monolith-gradient blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight font-headline">
          Stay in the Flow
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["Salesforce CRM", "Apex, LWC, Integrations", "Salesforce & AI Consulting", "AI & LLM Orchestration"].map((item) => (
            <span key={item} className="font-label text-[10px] tracking-[0.15em] uppercase px-4 py-1.5 rounded-full border border-outline-variant/20 text-on-surface-variant bg-surface-container-highest/50">
              {item}
            </span>
          ))}
        </div>
        <p className="text-on-surface-variant text-lg mb-10">
          Join 50+ builders and thinkers. Weekly dives into Salesforce, AI agents, productivity, and living with intention.
        </p>
        <a
          href="https://sangameshgellagupta.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-primary text-on-primary rounded-md font-extrabold tracking-tight hover:brightness-110 active:scale-95 transition-all text-center"
        >
          SUBSCRIBE ON SUBSTACK
        </a>
        <p className="mt-6 text-xs text-on-surface-variant/60 font-label tracking-[0.2em]">
          NO SPAM. JUST SIGNAL.
        </p>
      </div>
    </section>
  );
}
