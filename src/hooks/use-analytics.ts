import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { trackEvent } from "@/lib/analytics";

/**
 * Fires a `pageview` analytics event on every client-side route change.
 * Mount once at the root.
 */
export function useAnalytics() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    trackEvent("pageview", pathname);
  }, [pathname]);
}
