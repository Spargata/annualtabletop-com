import type { MDXComponents } from "mdx/types";

/**
 * Global MDX component overrides. Apply brand typography / link styling
 * to any MDX-rendered content (scenario detail pages, framework pages, legal).
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-6 font-serif text-4xl font-semibold tracking-tight text-navy md:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 font-serif text-2xl font-semibold tracking-tight text-navy md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-xl font-semibold text-navy">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-ink-700 leading-relaxed">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-signal underline underline-offset-2 hover:text-navy-700"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 list-disc pl-6 text-ink-700">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 list-decimal pl-6 text-ink-700">{children}</ol>
    ),
    ...components,
  };
}
