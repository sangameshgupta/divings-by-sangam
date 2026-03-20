export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const res = await fetch("https://sangameshgellagupta.substack.com/feed", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return [];
    }

    const xml = await res.text();
    return parseRSS(xml);
  } catch {
    return [];
  }
}

function parseRSS(xml: string): SubstackPost[] {
  const posts: SubstackPost[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];
    const title = extractTag(item, "title");
    const link = extractTag(item, "link");
    const pubDate = extractTag(item, "pubDate");
    const description = extractTag(item, "description");

    if (title && link) {
      posts.push({
        title: decodeHTMLEntities(title),
        link,
        pubDate: pubDate || "",
        description: description
          ? stripHTML(decodeHTMLEntities(description)).slice(0, 300)
          : "",
      });
    }
  }

  return posts;
}

function extractTag(xml: string, tag: string): string | null {
  // Handle CDATA sections
  const cdataRegex = new RegExp(
    `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`
  );
  const cdataMatch = cdataRegex.exec(xml);
  if (cdataMatch) return cdataMatch[1].trim();

  // Handle regular content
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const match = regex.exec(xml);
  return match ? match[1].trim() : null;
}

function stripHTML(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function decodeHTMLEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/");
}

export function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}
