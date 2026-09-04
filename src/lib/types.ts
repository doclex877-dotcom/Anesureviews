export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "tip"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | {
      type: "links";
      heading?: string;
      intro?: string;
      items: { label: string; href: string; external?: boolean }[];
    };

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  heroImage: string;
  heroImageAlt: string;
  blocks: Block[];
  faqs?: { q: string; a: string }[];
}
