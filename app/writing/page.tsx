import type { Metadata } from "next";
import { getSubstackPosts, formatDate } from "@/lib/rss";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Deep dives into the intersection of Salesforce architecture, AI workflows, and the quiet pursuit of independent building.",
};

export default async function WritingPage() {
  const posts = await getSubstackPosts();
  const featured = posts[0];
  const secondary = posts.slice(1, 5);

  return (
    <div className="px-6 max-w-7xl mx-auto">
      {/* ─── Hero Section ─── */}
      <section className="mb-24 pt-16">
        <div className="max-w-3xl">
          <span className="font-label text-secondary tracking-[0.2em] text-xs uppercase mb-4 block">
            Archive &amp; Insights
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-on-surface leading-[0.9] font-headline">
            Writing &amp;
            <br />
            Thoughts
          </h1>
          <p className="text-xl text-outline font-light leading-relaxed mb-10 max-w-xl">
            Deep dives into the intersection of Salesforce architecture, AI
            workflows, and the quiet pursuit of independent building.
          </p>
          <a
            className="inline-flex items-center gap-3 bg-primary-container text-on-primary-container px-8 py-4 rounded-md font-bold transition-all hover:scale-[1.02] active:scale-95 group"
            href="https://sangameshgellagupta.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe to my Substack
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </section>

      {/* ─── Article Grid ─── */}
      <section className="mb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black tracking-tighter mb-2 font-headline">
              Latest from Substack
            </h2>
            <div className="h-1 w-12 bg-secondary" />
          </div>
          <div className="hidden md:block">
            <span className="font-label text-[10px] tracking-[0.2em] text-outline uppercase">
              Scroll to explore
            </span>
          </div>
        </div>

        {posts.length === 0 ? (
          /* Fallback when RSS unavailable */
          <div className="bg-surface-container-low p-12 rounded-xl text-center border border-outline-variant/10">
            <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
              rss_feed
            </span>
            <h3 className="text-2xl font-bold mb-4 font-headline">
              Check out my latest writing
            </h3>
            <p className="text-on-surface-variant mb-6">
              Head over to Substack to read my latest articles on Salesforce, AI,
              and building.
            </p>
            <a
              href="https://sangameshgellagupta.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold font-label uppercase tracking-[0.2em] text-sm"
            >
              Visit Substack &rarr;
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Featured Post */}
            {featured && (
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="md:col-span-8 bg-surface-container-low p-8 md:p-12 flex flex-col justify-between group cursor-pointer border border-transparent hover:border-outline-variant/20 transition-all rounded-sm"
              >
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-label text-[10px] tracking-[0.2em] text-secondary uppercase bg-secondary/10 px-3 py-1">
                      Featured
                    </span>
                    <span className="text-outline text-sm">
                      {formatDate(featured.pubDate)}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 group-hover:text-primary transition-colors font-headline">
                    {featured.title}
                  </h3>
                  <p className="text-outline text-lg leading-relaxed mb-8 max-w-xl line-clamp-3">
                    {featured.description}
                  </p>
                </div>
                <span className="text-xs font-label uppercase text-primary tracking-[0.2em]">
                  Read Article
                </span>
              </a>
            )}

            {/* Secondary Posts */}
            {secondary.map((post, i) => (
              <a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  i === 0 ? "md:col-span-4" : "md:col-span-4"
                } ${
                  i < 2 ? "bg-surface-container-high" : "bg-surface-container-lowest"
                } p-8 flex flex-col justify-between group cursor-pointer border border-transparent hover:border-outline-variant/30 transition-all rounded-sm`}
              >
                <div>
                  <span className="text-outline text-sm block mb-4">
                    {formatDate(post.pubDate)}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight mb-4 leading-snug group-hover:text-primary transition-colors font-headline">
                    {post.title}
                  </h3>
                  <p className="text-outline text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-outline-variant/10">
                  <span className="text-xs font-label uppercase text-primary tracking-[0.2em]">
                    Read Article
                  </span>
                </div>
              </a>
            ))}

            {/* Newsletter CTA Card */}
            <div className="md:col-span-4 bg-primary-container/10 p-8 flex flex-col justify-center items-center text-center border border-primary/20 rounded-sm">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                subscriptions
              </span>
              <h3 className="text-xl font-bold mb-4 font-headline">
                Never miss a deep dive.
              </h3>
              <p className="text-sm text-outline mb-6">
                Join 1,200+ builders receiving weekly insights directly in their
                inbox.
              </p>
              <a
                className="text-sm font-label uppercase font-bold tracking-[0.2em] text-primary border-b-2 border-primary pb-1 hover:text-white hover:border-white transition-all"
                href="https://sangameshgellagupta.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Newsletter
              </a>
            </div>
          </div>
        )}
      </section>

      {/* ─── Newsletter Footer ─── */}
      <section className="mb-12">
        <NewsletterSignup />
      </section>
    </div>
  );
}
