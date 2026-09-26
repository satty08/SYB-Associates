import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { industries } from "@/content/industries";

interface SitemapEntry { path: string; changefreq?: "weekly" | "monthly" | "yearly"; priority?: string; }
export const Route = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
  const baseUrl = (process.env["SITE_URL"] ?? "").replace(/\/$/, "");
  const entries: SitemapEntry[] = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/consulting-services", changefreq: "monthly", priority: "0.9" },
    { path: "/industries", changefreq: "monthly", priority: "0.9" },
    ...industries.map((industry) => ({ path: `/industries/${industry.slug}`, changefreq: "monthly" as const, priority: "0.7" })),
    { path: "/about", changefreq: "yearly", priority: "0.7" },
    { path: "/insights", changefreq: "monthly", priority: "0.8" },
    { path: "/consultingMethodology", changefreq: "monthly", priority: "0.8" },
    { path: "/contact", changefreq: "yearly", priority: "0.6" },
  ];
  const urls = entries.map((entry) => [`  <url>`, `    <loc>${baseUrl}${entry.path}</loc>`, entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null, entry.priority ? `    <priority>${entry.priority}</priority>` : null, `  </url>`].filter(Boolean).join("\n"));
  return new Response([`<?xml version="1.0" encoding="UTF-8"?>`, `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`, ...urls, `</urlset>`].join("\n"), { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
} } } });