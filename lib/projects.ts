export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  icons: string[];
  image?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "nexus",
    title: "Nexus",
    category: "Automation",
    description:
      "The central hub for personal data automation. A monolithic architecture designed to synchronize fragmented digital lives into a single, sovereign stream.",
    icons: ["database", "api"],
  },
  {
    slug: "lumi",
    title: "Lumi",
    category: "Visualization",
    description:
      "Visualizing the hidden patterns in your workflow. Lumi dissects daily operational heat-maps to reveal where focus is lost and where momentum is built.",
    icons: ["insights", "analytics"],
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
    category: "Discovery",
    description:
      "Finding what's running behind the scenes. A forensic tool for identifying legacy scripts and forgotten cloud triggers that consume cycles and cloud budgets.",
    icons: ["search", "precision_manufacturing"],
    link: "https://chromewebstore.google.com/detail/hidden-automation-detecto/onhocbkcepfapbmfnmkiopdofgnogpih",
  },
];
