export const SITE_URL = "https://anaglynn.ai";
export const SITE_NAME = "AnaGlynn AI";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo-light.png`;

export const DEFAULT_KEYWORDS =
  "AnaGlynn AI, AI music marketing, independent artists, release companion, music pitch, music content, artist tools, song release, music AI";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function pageSeo({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: PageSeoInput) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: "Anagheem Azzam" },
      { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
