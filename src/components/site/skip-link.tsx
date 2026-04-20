/**
 * Accessibility: keyboard users can skip nav and jump to main content.
 * Positioned off-screen until focused; WCAG 2.1 AA 2.4.1 Bypass Blocks.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:ring-2 focus:ring-signal focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
}
