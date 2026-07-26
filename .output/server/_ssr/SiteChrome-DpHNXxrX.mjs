import { n as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DTH08RXv.mjs";
import { t as trackEvent } from "./analytics-ocAjq6oQ.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as string } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteChrome-DpHNXxrX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emailSchema = string().trim().email("Enter a valid email").max(255);
function NewsletterOptIn({ variant = "light" }) {
	const [email, setEmail] = (0, import_react.useState)("");
	const [state, setState] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)(null);
	async function onSubmit(e) {
		e.preventDefault();
		const parsed = emailSchema.safeParse(email);
		if (!parsed.success) {
			setError(parsed.error.issues[0]?.message ?? "Invalid email");
			return;
		}
		setError(null);
		setState("loading");
		const { error: dbError } = await supabase.from("newsletter_subscribers").insert({
			email: parsed.data,
			source_path: typeof window !== "undefined" ? window.location.pathname.slice(0, 512) : null,
			user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 512) : null
		});
		if (dbError) {
			if (dbError.code === "23505") {
				setState("done");
				return;
			}
			console.error("[newsletter]", dbError);
			setError("Something went wrong. Please try again.");
			setState("error");
			return;
		}
		trackEvent("newsletter_signup");
		setState("done");
	}
	const dark = variant === "dark";
	const inputCls = dark ? "w-full bg-transparent border border-white/25 text-white placeholder:text-white/50 px-4 py-3 text-sm outline-none focus:border-[var(--ice)] transition-colors" : "w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-[var(--navy)] transition-colors";
	const btnCls = dark ? "bg-white text-[var(--navy-deep)] px-5 py-3 text-sm hover:bg-[var(--ice)] transition-colors whitespace-nowrap" : "bg-[var(--navy-deep)] text-white px-5 py-3 text-sm hover:bg-[var(--navy)] transition-colors whitespace-nowrap";
	const labelCls = dark ? "text-white/70" : "text-muted-foreground";
	if (state === "done") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `text-sm ${dark ? "text-white" : "text-foreground"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-lg",
			children: "Thanks — you're on the list."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-1 text-xs ${labelCls}`,
			children: "The next SCM Deep Dive briefing is out on the first Tuesday of the month."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `text-xs uppercase tracking-[0.2em] ${labelCls}`,
				children: "Monthly briefing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `font-display text-2xl ${dark ? "text-white" : "text-foreground"}`,
				children: "The SCM Deep Dive, in your inbox."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `text-sm ${labelCls}`,
				children: "One short letter each month: what we're seeing in pharma and manufacturing supply chains, what we're reading, and what we'd do about it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "email",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					placeholder: "you@company.com",
					maxLength: 255,
					autoComplete: "email",
					"aria-label": "Email address",
					className: inputCls
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: state === "loading",
					className: btnCls,
					children: state === "loading" ? "Subscribing…" : "Subscribe"
				})]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-red-500",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `text-xs ${labelCls}`,
				children: "No spam. Unsubscribe with one click."
			})
		]
	});
}
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-editorial flex items-center justify-between py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[var(--navy)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl tracking-tight",
						children: "SYB Associates"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden gap-8 text-sm md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							activeOptions: { exact: true },
							activeProps: { className: "text-[var(--navy)]" },
							className: "hover:text-[var(--navy)] transition-colors",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/case-studies",
							activeProps: { className: "text-[var(--navy)]" },
							className: "hover:text-[var(--navy)] transition-colors",
							children: "Case Studies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							activeProps: { className: "text-[var(--navy)]" },
							className: "hover:text-[var(--navy)] transition-colors",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "hidden md:inline-flex items-center gap-2 bg-[var(--navy-deep)] px-4 py-2 text-sm text-white hover:bg-[var(--navy)] transition-colors",
					children: "Start a conversation"
				})
			]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border/60 mt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-editorial grid gap-12 py-16 md:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[var(--navy)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl",
								children: "SYB Associates"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed",
							children: "Management consulting for pharmaceutical and manufacturing leaders — supply chain, digital, analytics."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 text-xs uppercase tracking-[0.15em] text-muted-foreground",
							children: "Zürich · Boston · Singapore"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-[var(--navy)]",
								children: "Home"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/case-studies",
								className: "hover:text-[var(--navy)]",
								children: "Case Studies"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-[var(--navy)]",
								children: "Contact"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterOptIn, { variant: "light" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-editorial flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" SYB Associates. Independent management consulting."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Supply Chain · Digital · Analytics" })]
			})
		})]
	});
}
//#endregion
export { SiteHeader as n, SiteFooter as t };
