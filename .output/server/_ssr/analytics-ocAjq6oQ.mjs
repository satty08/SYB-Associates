import { t as supabase } from "./client-DTH08RXv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-ocAjq6oQ.js
var SESSION_KEY = "syb_session_id";
function getSessionId() {
	if (typeof window === "undefined") return null;
	try {
		let id = sessionStorage.getItem(SESSION_KEY);
		if (!id) {
			id = crypto.randomUUID();
			sessionStorage.setItem(SESSION_KEY, id);
		}
		return id;
	} catch {
		return null;
	}
}
async function trackEvent(eventType, path) {
	if (typeof window === "undefined") return;
	try {
		await supabase.from("page_views").insert({
			path: (path ?? window.location.pathname).slice(0, 512),
			referrer: document.referrer ? document.referrer.slice(0, 1024) : null,
			user_agent: navigator.userAgent.slice(0, 512),
			session_id: getSessionId(),
			event_type: eventType
		});
	} catch (err) {
		console.warn("[analytics] failed", err);
	}
}
//#endregion
export { trackEvent as t };
