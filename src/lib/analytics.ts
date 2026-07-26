import { supabase } from "@/integrations/superbase/client";

const SESSION_KEY = "syb_session_id";

function getSessionId(): string | null {
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

type EventType = "pageview" | "lead_submitted" | "newsletter_signup" | "cta_click";

export async function trackEvent(eventType: EventType, path?: string) {
  if (typeof window === "undefined") return;
  try {
    await supabase.from("page_views").insert({
      path: (path ?? window.location.pathname).slice(0, 512),
      referrer: document.referrer ? document.referrer.slice(0, 1024) : null,
      user_agent: navigator.userAgent.slice(0, 512),
      session_id: getSessionId(),
      event_type: eventType,
    });
  } catch (err) {
    // Analytics must never break the app.
    console.warn("[analytics] failed", err);
  }
}
