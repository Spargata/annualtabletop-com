"use client";

/**
 * Footer button that resets analytics consent and re-shows the consent banner.
 * Dispatches a "reset-consent" CustomEvent that the ConsentBanner listens for.
 *
 * Renders as a <button> (not <a>) because it triggers JavaScript behavior,
 * not navigation. Styled to match the adjacent footer links.
 */
export function PrivacyChoicesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("reset-consent"))}
      className="text-xs text-paper/60 underline-offset-4 hover:text-paper hover:underline"
    >
      Privacy Choices
    </button>
  );
}
