import { n as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DTH08RXv.mjs";
import { t as trackEvent } from "./analytics-ocAjq6oQ.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as string, n as literal, r as object, t as _enum } from "../_libs/zod.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteChrome-DpHNXxrX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B4VAM6Lz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var leadSchema = object({
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
function ContactPage() {
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		email: "",
		company: "",
		role: "",
		industry: "",
		interest: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [serverError, setServerError] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
	function update(k, v) {
		setValues((s) => ({
			...s,
			[k]: v
		}));
	}
	async function onSubmit(e) {
		e.preventDefault();
		const parsed = leadSchema.safeParse(values);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (!next[key]) next[key] = issue.message;
			}
			setErrors(next);
			return;
		}
		setErrors({});
		setServerError(null);
		setPending(true);
		const { error: dbError } = await supabase.from("leads").insert({
			name: parsed.data.name,
			email: parsed.data.email,
			company: parsed.data.company,
			role: parsed.data.role || null,
			industry: parsed.data.industry,
			interest: parsed.data.interest,
			message: parsed.data.message,
			source_path: typeof window !== "undefined" ? window.location.pathname.slice(0, 512) : null,
			user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 512) : null
		});
		setPending(false);
		if (dbError) {
			console.error("[lead]", dbError);
			setServerError("We couldn't send your message. Please email partners@sybassociates.com.");
			return;
		}
		trackEvent("lead_submitted");
		setSubmitted(true);
	}
	const inputCls = "w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[var(--navy)] transition-colors";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-editorial grid gap-16 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 text-xs uppercase tracking-[0.2em] text-[var(--navy)]",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-4xl leading-[1.05] md:text-6xl",
								children: [
									"Book a 30-minute ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic text-[var(--navy)]",
										children: "diagnostic"
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-muted-foreground leading-relaxed",
								children: "Tell us where you are and where you're trying to get. A partner in the relevant practice will reply within one business day."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 space-y-8 border-l border-[var(--navy)] pl-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: "Direct email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:partners@sybassociates.com",
										className: "mt-2 block font-display text-xl hover:text-[var(--navy)]",
										children: "partners@sybassociates.com"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: "Offices"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 font-display text-lg",
										children: "Zürich · Boston · Singapore"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: "Media & speaking"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 text-muted-foreground",
										children: "press@syb.com"
									})] })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border border-border bg-secondary/40 p-8 md:p-10",
							children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center py-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-display text-3xl md:text-4xl",
										children: [
											"Thank you, ",
											values.name.split(" ")[0],
											"."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-muted-foreground max-w-md mx-auto",
										children: [
											"Your note is with the ",
											values.interest.replace("-", " "),
											" practice. A partner will reply within one business day."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setSubmitted(false);
											setValues({
												name: "",
												email: "",
												company: "",
												role: "",
												industry: "",
												interest: "",
												message: ""
											});
										},
										className: "mt-8 text-sm underline decoration-[var(--navy)] underline-offset-4 hover:text-[var(--navy)]",
										children: "Send another message"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit,
								noValidate: true,
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl",
										children: "Tell us about your situation"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 md:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Full name",
											error: errors.name,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: inputCls,
												value: values.name,
												onChange: (e) => update("name", e.target.value),
												maxLength: 100,
												autoComplete: "name"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Work email",
											error: errors.email,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "email",
												className: inputCls,
												value: values.email,
												onChange: (e) => update("email", e.target.value),
												maxLength: 255,
												autoComplete: "email"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 md:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Company",
											error: errors.company,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: inputCls,
												value: values.company,
												onChange: (e) => update("company", e.target.value),
												maxLength: 120,
												autoComplete: "organization"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Role (optional)",
											error: errors.role,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: inputCls,
												value: values.role,
												onChange: (e) => update("role", e.target.value),
												maxLength: 120,
												autoComplete: "organization-title"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 md:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Industry",
											error: errors.industry,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												className: inputCls,
												value: values.industry,
												onChange: (e) => update("industry", e.target.value),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "",
														children: "Select…"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "pharma",
														children: "Pharmaceutical / Life Sciences"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "manufacturing",
														children: "Industrial Manufacturing"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "consumer-health",
														children: "Consumer Health"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "other",
														children: "Other"
													})
												]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Area of interest",
											error: errors.interest,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												className: inputCls,
												value: values.interest,
												onChange: (e) => update("interest", e.target.value),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "",
														children: "Select…"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "supply-chain",
														children: "Supply Chain Strategy"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "digital",
														children: "Digital Supply Chain"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "analytics",
														children: "Advanced Analytics"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "operations",
														children: "Operations Excellence"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "not-sure",
														children: "Not sure yet"
													})
												]
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "What are you trying to solve?",
										error: errors.message,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											rows: 5,
											className: inputCls,
											value: values.message,
											onChange: (e) => update("message", e.target.value),
											maxLength: 1500
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: pending,
										className: "w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[var(--navy-deep)] px-8 py-3.5 text-sm text-white hover:bg-[var(--navy)] transition-colors disabled:opacity-60",
										children: pending ? "Sending…" : "Request diagnostic →"
									}),
									serverError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-red-500",
										children: serverError
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "We treat every inquiry as confidential. No mailing lists, no third-party sharing."
									})
								]
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-red-600",
				children: error
			}) : null
		]
	});
}
//#endregion
export { ContactPage as component };
