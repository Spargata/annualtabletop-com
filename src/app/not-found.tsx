import Link from "next/link";
import { Button } from "@/components/ui/button";

/** Custom 404. Brand-on-brand: parchment surface, navy headline, signal CTA. */
export default function NotFound() {
  return (
    <main
      role="main"
      className="container-tight flex min-h-[60vh] flex-col items-start justify-center py-20"
    >
      <p className="eyebrow mb-3">404</p>
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        That page didn&apos;t make it past the inject.
      </h1>
      <p className="mt-4 max-w-prose text-ink-700">
        The link you followed doesn&apos;t exist (or doesn&apos;t exist
        anymore). The shortest path back to something useful is the demo or the
        scenario library.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/">Back to the homepage</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/scenarios">Browse scenarios</Link>
        </Button>
      </div>
    </main>
  );
}
