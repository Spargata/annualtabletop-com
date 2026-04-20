import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * MDX-backed content loader. v1 stores scenarios + frameworks as flat MDX
 * files under /src/content. The schema below matches what a future Sanity
 * or Payload migration will expose, so the swap is mechanical.
 */

export type ScenarioComplexity = "intro" | "intermediate" | "advanced";
export type ScenarioSegment =
  | "public"
  | "financial-institutions"
  | "regulated-smb"
  | "msp"
  | "smb"
  | "non-profit";

export interface Scenario {
  slug: string;
  title: string;
  summary: string;
  threatType: string;
  complexity: ScenarioComplexity;
  segments: ReadonlyArray<ScenarioSegment>;
  frameworks: ReadonlyArray<string>;
  estimatedMinutes: number;
  learningObjectives: ReadonlyArray<string>;
  /** Raw MDX body. Not parsed at the loader layer. */
  body: string;
}

export interface FrameworkArticle {
  slug: string;
  short: string;
  name: string;
  body: string;
}

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

function readMdxDir(dir: string): Array<{ slug: string; data: Record<string, unknown>; body: string }> {
  const fullDir = path.join(CONTENT_ROOT, dir);
  if (!fs.existsSync(fullDir)) return [];
  return fs
    .readdirSync(fullDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(fullDir, f), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: f.replace(/\.(mdx|md)$/, ""),
        data,
        body: content,
      };
    });
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}
function asNumber(v: unknown, fallback = 0): number {
  return typeof v === "number" ? v : fallback;
}
function asArray<T = string>(v: unknown): T[] {
  return Array.isArray(v) ? (v as T[]) : [];
}

export function getAllScenarios(): Scenario[] {
  return readMdxDir("scenarios").map(({ slug, data, body }) => ({
    slug,
    title: asString(data.title, slug),
    summary: asString(data.summary),
    threatType: asString(data.threatType, "Other"),
    complexity: (asString(data.complexity, "intermediate") as ScenarioComplexity),
    segments: asArray<ScenarioSegment>(data.segments),
    frameworks: asArray<string>(data.frameworks),
    estimatedMinutes: asNumber(data.estimatedMinutes, 60),
    learningObjectives: asArray<string>(data.learningObjectives),
    body,
  }));
}

export function getScenario(slug: string): Scenario | undefined {
  return getAllScenarios().find((s) => s.slug === slug);
}

export function getScenariosForSegment(segment: ScenarioSegment): Scenario[] {
  return getAllScenarios().filter((s) => s.segments.includes(segment));
}

export function getAllFrameworkArticles(): FrameworkArticle[] {
  return readMdxDir("frameworks").map(({ slug, data, body }) => ({
    slug,
    short: asString(data.short, slug),
    name: asString(data.name, slug),
    body,
  }));
}

export function getFrameworkArticle(slug: string): FrameworkArticle | undefined {
  return getAllFrameworkArticles().find((f) => f.slug === slug);
}
