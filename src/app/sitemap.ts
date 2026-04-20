import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SEGMENTS } from "@/lib/segments";
import { FRAMEWORKS } from "@/lib/frameworks";
import { SEO_LANDINGS } from "@/lib/seo-landings";
import { getAllScenarios } from "@/lib/content";

/**
 * Every indexable route shows up here. Dynamic routes (scenarios,
 * frameworks, segments, solutions) are enumerated from their source of
 * truth so the sitemap stays in sync automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticRoutes: Array<MetadataRoute.Sitemap[number]> = [
    "/",
    "/platform",
    "/scenarios",
    "/frameworks",
    "/pricing",
    "/customers",
    "/about",
    "/demo",
    "/solutions",
    "/security",
    "/accessibility",
    "/legal/privacy",
    "/legal/terms",
    "/legal/subprocessors",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.7,
  }));

  const scenarios = getAllScenarios().map((s) => ({
    url: `${base}/scenarios/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const frameworkRoutes = FRAMEWORKS.map((f) => ({
    url: `${base}/frameworks/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const segmentRoutes = SEGMENTS.map((s) => ({
    url: `${base}/for/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const solutionRoutes = SEO_LANDINGS.map((l) => ({
    url: `${base}/solutions/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...scenarios,
    ...frameworkRoutes,
    ...segmentRoutes,
    ...solutionRoutes,
  ];
}
