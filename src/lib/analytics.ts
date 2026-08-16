import { createServerFn } from "@tanstack/react-start";
import { sql } from "@/lib/db.server";

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

type RecordPageViewInput = {
  path: string;
  referrer: string | null;
  userAgent: string;
  sessionId: string | null;
  eventType: EventType;
};

// Server-only — stripped from the client bundle at build time.
const recordPageView = createServerFn({ method: "POST" })
  .validator((data: RecordPageViewInput) => data)
  .handler(async ({ data }) => {
    await sql`
      INSERT INTO page_views (path, referrer, user_agent, session_id, event_type)
      VALUES (${data.path}, ${data.referrer}, ${data.userAgent}, ${data.sessionId}, ${data.eventType})
    `;
  });

export async function trackEvent(eventType: EventType, path?: string) {
  if (typeof window === "undefined") return;
  try {
    await recordPageView({
      data: {
        path: (path ?? window.location.pathname).slice(0, 512),
        referrer: document.referrer ? document.referrer.slice(0, 1024) : null,
        userAgent: navigator.userAgent.slice(0, 512),
        sessionId: getSessionId(),
        eventType,
      },
    });
  } catch (err) {
    // Analytics must never break the app.
    console.warn("[analytics] failed", err);
  }
}