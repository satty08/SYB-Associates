import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteChrome-DpHNXxrX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/case-studies-Bly_-9Ud.js
var import_jsx_runtime = require_jsx_runtime();
var studies = [
	{
		year: "2024",
		sector: "Pharmaceutical",
		client: "Top-10 Global Pharma",
		title: "Global S&OP redesign across 14 sites",
		challenge: "Fragmented planning across regions produced 45-day forecast cycles and $340M of excess inventory tied up in slow-moving SKUs.",
		approach: "Consolidated regional planning into a single integrated business planning cadence, deployed a unified demand-sensing model, and rewrote the S&OP operating rhythm end-to-end.",
		result: [
			["21%", "inventory release"],
			["9 mo", "to steady state"],
			["+18 pts", "OTIF"]
		]
	},
	{
		year: "2024",
		sector: "Industrial Manufacturing",
		client: "European Industrial OEM",
		title: "AI-driven demand sensing rollout",
		challenge: "Forecast MAPE of 34% caused chronic stock-outs on high-margin SKUs and repeated line changeovers at three flagship plants.",
		approach: "Layered a machine-learning demand-sensing model over the existing APS, integrated point-of-sale and channel-partner signals, and retrained planners on exception-based workflows.",
		result: [
			["-22 pts", "MAPE reduction"],
			["31%", "fewer changeovers"],
			["4 wks", "planning cycle time"]
		]
	},
	{
		year: "2023",
		sector: "Pharmaceutical",
		client: "Specialty CDMO",
		title: "End-to-end control tower and supplier collaboration",
		challenge: "Serialization deadlines and multi-tier supplier fragility exposed the CDMO to launch-delay penalties across four biologics contracts.",
		approach: "Designed and deployed a control tower with real-time shipment visibility, supplier collaboration portal, and automated deviation alerts wired into the QMS.",
		result: [
			["100%", "on-time launches"],
			["6.2×", "issue detection speed"],
			["11%", "logistics cost cut"]
		]
	},
	{
		year: "2023",
		sector: "Consumer Health",
		client: "Global Consumer Health Brand",
		title: "Network optimization across EMEA distribution",
		challenge: "Legacy 22-node distribution footprint carried $180M of landed cost with duplicate coverage in Central Europe and thin service in Southern markets.",
		approach: "Ran a full network optimization with service-level scenarios, negotiated a phased 3PL consolidation, and re-baselined the SKU rationalization program.",
		result: [
			["8%", "landed cost freed"],
			["-6 nodes", "footprint"],
			["+3.1 pts", "service level"]
		]
	}
];
function CaseStudiesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border/60 py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-editorial",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 text-xs uppercase tracking-[0.2em] text-[var(--navy)]",
							children: "Case Studies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl leading-[1.02] md:text-7xl max-w-4xl",
							children: [
								"Work we can talk about — ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "italic text-[var(--navy)]",
									children: "with permission"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-2xl text-lg text-muted-foreground",
							children: "A representative slice of recent engagements. Client identities are anonymized; full narratives, methodology, and reference calls are available under NDA."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-editorial space-y-16 md:space-y-24",
					children: studies.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid gap-10 md:grid-cols-12 border-t border-border pt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-display text-6xl text-[var(--navy)]",
									children: ["0", idx + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground",
									children: [
										s.year,
										" · ",
										s.sector
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 font-display text-xl",
									children: s.client
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl md:text-4xl leading-tight",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid gap-6 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-[0.15em] text-[var(--navy)] font-medium",
										children: "Challenge"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-muted-foreground leading-relaxed",
										children: s.challenge
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-[0.15em] text-[var(--navy)] font-medium",
										children: "Approach"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-muted-foreground leading-relaxed",
										children: s.approach
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 grid grid-cols-3 gap-6 border-t border-border pt-6",
									children: s.result.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-3xl text-[var(--navy)]",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground",
										children: v
									})] }, v))
								})
							]
						})]
					}, s.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border/60 bg-[var(--navy-deep)] text-white py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-editorial flex flex-wrap items-end justify-between gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl md:text-5xl max-w-2xl leading-tight",
						children: [
							"Want the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-[var(--ice)]",
								children: "full"
							}),
							" methodology and reference calls?"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-white/70",
						children: "Share a bit about your situation and we'll route you to the partner closest to it."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm text-[var(--navy-deep)] hover:bg-[var(--ice)] transition-colors",
						children: "Request a briefing →"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { CaseStudiesPage as component };
