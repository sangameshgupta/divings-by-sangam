export default function NewsletterSignup() {
  return (
    <section className="bg-surface-container-low rounded-2xl p-12 md:p-20 text-center relative overflow-hidden border border-outline-variant/10">
      <div className="absolute top-0 right-0 w-64 h-64 monolith-gradient blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight font-headline">
          Stay in the Flow
        </h2>
        <p className="text-on-surface-variant text-lg mb-10">
          Join 5,000+ builders and thinkers. Weekly dives into Salesforce, AI agents, and the philosophy of building digital products.
        </p>
        <form
          action="https://sangameshgellagupta.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col md:flex-row gap-4"
        >
          <input
            className="flex-1 bg-surface-container-lowest border border-outline-variant/30 rounded-md px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none text-on-surface transition-all placeholder:text-outline"
            placeholder="email@address.com"
            type="email"
          />
          <a
            href="https://sangameshgellagupta.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-primary text-on-primary rounded-md font-extrabold tracking-tight hover:brightness-110 active:scale-95 transition-all text-center"
          >
            SUBSCRIBE
          </a>
        </form>
        <p className="mt-6 text-xs text-on-surface-variant/60 font-label tracking-[0.2em]">
          NO SPAM. JUST SIGNAL.
        </p>
      </div>
    </section>
  );
}
