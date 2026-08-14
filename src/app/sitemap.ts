import type { MetadataRoute } from "next";

const BASE = "https://www.cozystayhokkaido.jp";

/**
 * Every public page, JA and EN. All routes are static, so this is a plain
 * hand-kept list — add a page under src/app and add one line here.
 *
 * Deliberately plain (loc / lastmod / changefreq / priority): Next serialises
 * the `alternates` extension before <lastmod>, which breaks the element order
 * the sitemap schema requires. hreflang, if needed, belongs in each page head.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  ): MetadataRoute.Sitemap[number] => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    // Japanese
    page("/", 1.0, "monthly"),
    page("/shukuhaku-shisetsu", 0.9, "weekly"),
    page("/gaisha-gaiyo", 0.6, "monthly"),
    page("/jigyou-naiyo", 0.6, "monthly"),
    page("/unei-taisei", 0.6, "monthly"),
    page("/otoiawase", 0.5, "yearly"),
    page("/privacy-policy", 0.2, "yearly"),
    // English
    page("/en", 0.9, "monthly"),
    page("/en/properties", 0.8, "weekly"),
    page("/en/company", 0.5, "monthly"),
    page("/en/business", 0.5, "monthly"),
    page("/en/operations", 0.5, "monthly"),
    page("/en/contact", 0.4, "yearly"),
    page("/en/privacy-policy", 0.2, "yearly"),
  ];
}
