"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * App Router error boundary. Renders for uncaught errors in any route segment.
 * Must be a Client Component per Next.js docs.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Hook for product analytics / error reporting once that's wired in v1.1.
    // Server-side digest is on `error.digest` for correlation in logs.
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error("Route error:", error);
    }
  }, [error]);

  return (
    <main
      role="main"
      className="container-tight flex min-h-[60vh] flex-col items-start justify-center py-20"
    >
      <p className="eyebrow mb-3">500</p>
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        Something broke on our end.
      </h1>
      <p className="mt-4 max-w-prose text-ink-700">
        We logged the error. If it keeps happening, email{" "}
        <a
          href="mailto:hello@annualtabletop.com"
          className="text-signal underline"
        >
          hello@annualtabletop.com
        </a>{" "}
        with the URL and the time and we&apos;ll investigate.
        {error.digest ? (
          <>
            {" "}Reference:{" "}
            <code className="rounded bg-paper-50 px-1 text-xs text-navy">
              {error.digest}
            </code>
          </>
        ) : null}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={reset}>Try again</Button>
        <Button asChild variant="secondary">
          <Link href="/">Back to the homepage</Link>
        </Button>
      </div>
    </main>
  );
}
