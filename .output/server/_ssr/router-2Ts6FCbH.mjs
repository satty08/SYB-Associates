import { n as __toESM } from "../_runtime.mjs";
import { t as trackEvent } from "./analytics-ocAjq6oQ.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as string, n as literal, r as object, t as _enum } from "../_libs/zod.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-2Ts6FCbH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DJkYebHG.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
/**
* Fires a `pageview` analytics event on every client-side route change.
* Mount once at the root.
*/
function useAnalytics() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		trackEvent("pageview", pathname);
	}, [pathname]);
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				property: "og:site_name",
				content: "SYB Associates"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter+Tight:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyticsMount, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
	});
}
function AnalyticsMount() {
	useAnalytics();
	return null;
}
var BASE_URL = "";
var Route$3 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/case-studies",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/contact",
				changefreq: "yearly",
				priority: "0.6"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$2 = () => import("./contact-B4VAM6Lz.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — SYB Associates" },
			{
				name: "description",
				content: "Talk to SYB Associates about a supply chain, digital, or analytics engagement in pharmaceutical or manufacturing. 30-minute diagnostics available."
			},
			{
				property: "og:title",
				content: "Contact — SYB Associates"
			},
			{
				property: "og:description",
				content: "Book a 30-minute diagnostic with a SYB Associates partner."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Contact — SYB Associates"
			},
			{
				name: "twitter:description",
				content: "Book a 30-minute diagnostic with a SYB Associates partner."
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ContactPage",
				name: "Contact SYB Associates",
				url: "/contact"
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
object({
	name: string().trim().min(2, "Please enter your full name").max(100),
	email: string().trim().email("Enter a valid work email").max(255),
	company: string().trim().min(2, "Company is required").max(120),
	role: string().trim().max(120).optional().or(literal("")),
	industry: _enum([
		"pharma",
		"manufacturing",
		"consumer-health",
		"other"
	], { message: "Choose an industry" }),
	interest: _enum([
		"supply-chain",
		"digital",
		"analytics",
		"operations",
		"not-sure"
	], { message: "Choose an area" }),
	message: string().trim().min(10, "Give us a sentence or two of context").max(1500)
});
var $$splitComponentImporter$1 = () => import("./case-studies-Bly_-9Ud.mjs");
var Route$1 = createFileRoute("/case-studies")({
	head: () => ({
		meta: [
			{ title: "Case Studies — SYB Associates" },
			{
				name: "description",
				content: "Selected supply chain, digital, and analytics engagements across pharmaceutical and manufacturing clients — with the KPIs that held post-handover."
			},
			{
				property: "og:title",
				content: "Case Studies — SYB Associates"
			},
			{
				property: "og:description",
				content: "Supply chain and digital transformations delivered for pharma and manufacturing leaders."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/case-studies"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Case Studies — SYB Associates"
			},
			{
				name: "twitter:description",
				content: "Supply chain and digital transformations delivered for pharma and manufacturing leaders."
			}
		],
		links: [{
			rel: "canonical",
			href: "/case-studies"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-FLOcXnwj.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "SYB Associates — Supply Chain & Digital Consulting for Pharma and Manufacturing" },
			{
				name: "description",
				content: "Management consulting specialized in supply chain, digital supply chain, and advanced analytics for pharmaceutical and manufacturing leaders."
			},
			{
				name: "keywords",
				content: "supply chain consulting, digital supply chain, supply chain analytics, pharma consulting, manufacturing consulting, S&OP, control tower"
			},
			{
				property: "og:title",
				content: "SYB Associates — Supply Chain & Digital Consulting"
			},
			{
				property: "og:description",
				content: "Supply chain, digital, and analytics consulting for pharma and manufacturing."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "SYB Associates — Supply Chain & Digital Consulting"
			},
			{
				name: "twitter:description",
				content: "Supply chain, digital, and analytics consulting for pharma and manufacturing."
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ProfessionalService",
				name: "SYB Associates",
				description: "Management consulting specialized in supply chain, digital supply chain, and advanced analytics for pharmaceutical and manufacturing companies.",
				areaServed: ["Global"],
				knowsAbout: [
					"Supply Chain Management",
					"Digital Supply Chain",
					"Advanced Analytics",
					"Pharmaceutical Manufacturing",
					"Industrial Manufacturing"
				]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$3.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$4
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$4
});
var CaseStudiesRoute = Route$1.update({
	id: "/case-studies",
	path: "/case-studies",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	CaseStudiesRoute,
	ContactRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
