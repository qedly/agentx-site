import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { createHash } from "node:crypto";

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
const recordRoot = "assets/evidence/django-11099";
const record = JSON.parse(get(`${recordRoot}/record.json`));
for (const [name, artifact] of Object.entries(record.artifacts)) {
  const data = readFileSync(resolve(root, recordRoot, name));
  if (
    data.length !== artifact.bytes ||
    createHash("sha256").update(data).digest("hex") !== artifact.sha256
  )
    failures.push(`Recorded benchmark artifact changed: ${name}`);
}
const report = JSON.parse(get(`${recordRoot}/harness-report.json`))[
  record.instanceId
];
if (!report?.resolved || !report.patch_successfully_applied)
  failures.push("Recorded benchmark grader outcome mismatch");
for (const [key, count] of [
  ["FAIL_TO_PASS", record.failToPass],
  ["PASS_TO_PASS", record.passToPass],
]) {
  const group = report?.tests_status?.[key];
  if (
    group?.success.length !== count.passed ||
    group?.failure.length !== count.total - count.passed
  )
    failures.push(`Recorded benchmark count mismatch: ${key}`);
}
if (
  !get(`${recordRoot}/test-output.txt`).includes(
    `Ran ${record.failToPass.total + record.passToPass.total} tests`,
  )
)
  failures.push("Recorded benchmark raw output count mismatch");
if (failures.length) {
  failures.forEach((x) => console.error(`FAIL: ${x}`));
  process.exit(1);
}
console.log(
  `PASS: ${pages.length} pages; local routes, anchors, assets, approved copy, release status, source pin, and interaction hooks.`,
);
console.log(
  "PASS: recorded benchmark artifact hashes and reported test counts reconcile.",
);
console.log(
  "Browser interaction, visual, accessibility and live-install checks require separate evidence.",
);
