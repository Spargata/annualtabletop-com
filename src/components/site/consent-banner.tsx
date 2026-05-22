"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type React from "react";

const CONSENT_KEY = "analytics_consent";
const TIMESTAMP_KEY = "analytics_consent_timestamp";
const EXPIRY_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

/**
 * Privacy-safe analytics consent banner.
 *
 * - Appears on first visit (or after 30-day expiry).
 * - Respects `navigator.globalPrivacyControl`.
 * - Dynamically loads Vercel Analytics + StatCounter only on acceptance.
 * - Listens for a "reset-consent" CustomEvent (fired by the footer
 *   "Privacy Choices" button) to re-show the banner.
 */
export function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [analyticsLoaded, setAnalyticsLoaded] = useState(false);
  const [VercelAnalytics, setVercelAnalytics] =
    useState<React.ComponentType | null>(null);

  /** Dynamically load both analytics providers. */
  const loadAnalytics = useCallback(() => {
    if (analyticsLoaded) return;
    setAnalyticsLoaded(true);

    // Vercel Analytics — dynamic import, render via state
    import("@vercel/analytics/next").then((mod) => {
      setVercelAnalytics(() => mod.Analytics);
    });

    // StatCounter — inject scripts into <head>
    const configScript = document.createElement("script");
    configScript.textContent = `var sc_project=13223164;var sc_invisible=1;var sc_security="6729842b";`;
    document.head.appendChild(configScript);

    const counterScript = document.createElement("script");
    counterScript.src = "https://www.statcounter.com/counter/counter.js";
    counterScript.async = true;
    document.head.appendChild(counterScript);
  }, [analyticsLoaded]);

  /** Check stored consent on mount. */
  useEffect(() => {
    // Honor Global Privacy Control
    if (
      typeof navigator !== "undefined" &&
      (navigator as Navigator & { globalPrivacyControl?: boolean })
        .globalPrivacyControl === true
    ) {
      localStorage.setItem(CONSENT_KEY, "rejected");
      localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
      setVisible(false);
      return;
    }

    const consent = localStorage.getItem(CONSENT_KEY);
    const timestamp = localStorage.getItem(TIMESTAMP_KEY);

    if (consent && timestamp) {
      const age = Date.now() - Number(timestamp);
      if (age < EXPIRY_MS) {
        // Valid, unexpired consent
        if (consent === "accepted") {
          loadAnalytics();
        }
        setVisible(false);
        return;
      }
      // Expired — clear and re-prompt
      localStorage.removeItem(CONSENT_KEY);
      localStorage.removeItem(TIMESTAMP_KEY);
    }

    setVisible(true);
  }, [loadAnalytics]);

  /** Listen for footer "Privacy Choices" reset. */
  useEffect(() => {
    function handleReset() {
      localStorage.removeItem(CONSENT_KEY);
      localStorage.removeItem(TIMESTAMP_KEY);
      setVisible(true);
    }

    window.addEventListener("reset-consent", handleReset);
    return () => window.removeEventListener("reset-consent", handleReset);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
    setVisible(false);
    loadAnalytics();
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, "rejected");
    localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
    setVisible(false);
  }

  return (
    <>
      {/* Render Vercel Analytics when consent was given */}
      {VercelAnalytics && <VercelAnalytics />}

      {/* Consent banner */}
      {visible && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] max-w-sm animate-slide-up overflow-hidden rounded-lg border border-border bg-card/95 shadow-lg backdrop-blur-md"
        >
          {/* Amber accent strip */}
          <div className="h-1 bg-status-warning" />

          <div className="p-4 pt-3">
            <p className="text-sm font-semibold text-navy">
              We value your privacy
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-700">
              This site uses analytics to improve our service. You can accept
              or reject non-essential cookies.{" "}
              <Link
                href="/legal/privacy"
                className="text-signal underline underline-offset-2"
              >
                Privacy policy
              </Link>
            </p>

            <div className="mt-3 flex gap-2">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={reject}
              >
                Reject
              </Button>
              <Button type="button" size="sm" onClick={accept}>
                Accept
              </Button>
            </div>

            <p className="mt-2.5 text-[10px] leading-snug text-ink-500">
              You can change your choice anytime via the &ldquo;Privacy
              Choices&rdquo; link in the footer.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
