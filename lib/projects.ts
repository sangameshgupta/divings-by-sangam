export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  icons: string[];
  image?: string;
  link?: string;
  cta?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "sift",
    title: "Sift",
    category: "Productivity",
    description:
      "An AI-powered email assistant that sits inside Gmail. It categorizes your inbox, sends you a daily brief, and lets you ask questions about your email history. Sift turns 2.5 hours of inbox chaos into a 2-minute morning routine.",
    icons: ["mail", "smart_toy"],
    image: "/images/sift-brand.png",
    link: "https://usesift.work/landing",
    featured: true,
  },
  {
    slug: "nexus",
    title: "Nexus",
    category: "Intelligence",
    description:
      "A personal AI assistant that lives in Telegram. It remembers context, stays available around the clock, and plugs into my daily workflows. Built on Railway, the Claude API, and a Supabase memory layer, Nexus is equal parts agentic architecture and productivity engine.",
    icons: ["database", "api"],
    link: "https://sangameshgellagupta.substack.com/",
    cta: "View Case Study",
  },
  {
    slug: "claude-code-salesforce-plugin",
    title: "Claude Code Salesforce Plugin",
    category: "Engineering",
    description:
      "AI-powered developer productivity. Bridging the gap between LLM reasoning and complex Salesforce metadata architectures through a native CLI integration.",
    icons: ["cloud", "code"],
    image: "https://opengraph.githubassets.com/1/sangameshgupta/sf-compound-engineering-plugin",
    link: "https://github.com/sangameshgupta/sf-compound-engineering-plugin",
  },
  {
    slug: "hidden-automation-detector",
    title: "Hidden Automation Detector",
    category: "Chrome Extension",
    description:
      "Finding what's running behind the scenes. A forensic tool for identifying legacy scripts and forgotten cloud triggers that consume cycles and cloud budgets.",
    icons: ["search", "precision_manufacturing"],
    image: "/images/hidden-automation-detector.png",
    link: "https://chromewebstore.google.com/detail/hidden-automation-detecto/onhocbkcepfapbmfnmkiopdofgnogpih",
  },
];
