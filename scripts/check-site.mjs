import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { resolve, dirname } from "node:path";

const root = resolve("site");
const failures = [];
const pages = [
  "index.html",
  "how-it-works/index.html",
  "deployment/index.html",
  "docs/index.html",
  "docs/tasks/index.html",
  "docs/coding-tools/index.html",
  "docs/configuration/index.html",
  "docs/evidence/index.html",
  "docs/operations/index.html",
];
const get = (file) => readFileSync(resolve(root, file), "utf8");
const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = resolve(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

for (const page of pages) {
  if (!existsSync(resolve(root, page))) {
    failures.push(`Missing page: ${page}`);
    continue;
  }
  const html = get(page);
  if (!html.includes('name="viewport"')) failures.push(`${page}: no viewport`);
  if (!html.includes("Skip to content")) failures.push(`${page}: no skip link`);
  if (!html.includes("Rovara"))
    failures.push(`${page}: inconsistent display brand`);
  if (!html.includes("Public release in preparation"))
    failures.push(`${page}: release status missing`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  if (new Set(ids).size !== ids.length) failures.push(`${page}: duplicate IDs`);
}
for (const file of walk(root).filter((p) => p.endsWith(".html"))) {
  const html = readFileSync(file, "utf8");
  for (const [, attr, value] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:)/.test(value)) continue;
    const [path, hash] = value.split("#");
    let target = path.startsWith("/")
      ? resolve(root, `.${path}`)
      : resolve(dirname(file), path || ".");
    if (existsSync(target) && statSync(target).isDirectory())
      target = resolve(target, "index.html");
    if (!existsSync(target)) {
      failures.push(`${file}: broken ${attr} ${value}`);
      continue;
    }
    if (
      hash &&
      target.endsWith(".html") &&
      !readFileSync(target, "utf8").includes(`id="${hash}"`)
    )
      failures.push(`${file}: missing anchor ${value}`);
  }
  for (const img of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]*"/.test(img[0]))
      failures.push(`${file}: image has no alt`);
  }
}
const home = get("index.html");
for (const phrase of [
  "Give it a task.",
  "Get the work back.",
  "You decide what gets merged.",
  "Code to review.",
  "Evidence to inspect.",
  "Illustrative workflow",
]) {
  if (!home.includes(phrase))
    failures.push(`Approved homepage phrase missing: ${phrase}`);
}
if (home.includes("AgentX cannot merge"))
  failures.push("Homepage presents merge authority as a missing feature");
const css = get("assets/site.css");
if (!css.includes("prefers-reduced-motion"))
  failures.push("Reduced-motion support missing");
const js = get("assets/site.js");
if (!js.includes("showModal") || !js.includes("close"))
  failures.push("Evidence dialog behavior missing");
const ledger = JSON.parse(get("data/claims.json"));
if (!get("docs/index.html").includes(ledger.source.commit.slice(0, 12)))
  failures.push("Source pin mismatch in docs");
if (
  !get("docs/index.html").includes("22.19.0") ||
  !get("docs/index.html").includes("below 23")
)
  failures.push("Supported Node range missing");
if (failures.length) {
  failures.forEach((x) => console.error(`FAIL: ${x}`));
  process.exit(1);
}
console.log(
  `PASS: ${pages.length} pages; local routes, anchors, assets, approved copy, release status, source pin, and interaction hooks.`,
);
console.log(
  "Browser interaction, visual, accessibility and live-install checks require separate evidence.",
);
