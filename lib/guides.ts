export interface Guide {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export const guides: Guide[] = [
  {
    slug: "graphql-lwc",
    title: "GraphQL in Salesforce LWC",
    description:
      "A worked, visual walk-through of using GraphQL inside Lightning Web Components — when it pays off, how to wire the @lwc/graphql adapter, and the patterns that keep queries fast and cache-friendly on the platform.",
    href: "/learn/graphql-lwc/",
  },
];
