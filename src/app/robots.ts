import type { MetadataRoute } from "next";

const BASE = "https://www.cozystayhokkaido.jp";

/** Allow everything and point crawlers at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
