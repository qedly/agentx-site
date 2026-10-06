# README installation reconciliation — 6 October 2026

## Task and source

Owner requested that website commands and installation instructions follow the latest README at `https://github.com/PrepLabsAI/Rovara`, reflecting the repository rename.

Preflight: MSDLC-OBJ-001@0.4, SHA256 `707543b940253c8e068da55af87b81b4c57dd8d0e82f83436be13f5391cdf0c2`. Decision rights: inspect, implement and verify the website update. Preserve human merge control, stable configuration/auth/evidence IDs, licence terms, original benchmark artifacts and qualification of unreleased native workflow material. No AWS deployment, package publication, licence change or product-code change.

## Observed primary sources

- `PrepLabsAI/Rovara` is public; default branch `mainline` at `a03326359542ff3934838566d464cd188624c15e`. Rechecked after editing; unchanged.
- README and linked install, MCP, day-2 and teardown guides read at that exact source commit. Their SHA256 hashes are recorded in `site/data/installation.json`.
- npm reports published `@preplabsai/rovara-code` version `0.2.0`, Node `>=22.19.0`, and `rovara`/`agentx` bin aliases.
- GitHub releases v0.1.0 and v0.2.0 are published. Downloaded v0.2.0 `release.json` names source commit `c1d4edf6d2713e4fabb71f8c9c1de1960ad4e5ac`; do not confuse it with later mainline documentation.
- The public AWS installer template from the README responds HTTP 200. The website uses the exact README Launch in AWS URL.
- `packages/mcp/src/tools.ts` at v0.2.0 lists the 11 direct-task developer tools, without the four native-workflow additions. Those additions remain clearly labelled preview.
- Current LICENSE retained byte-for-byte. README's open-source headline conflicts with its FSL-1.1-ALv2 licence section; this website keeps the existing source-available qualification.

## Changes

- Homepage install CTA, footer product-source links and installation landing page.
- New generated Install Rovara guide: prerequisites, AWS setup, terminal setup, first Slack task, resume/doctor, upgrade, teardown and compatible names.
- Coding-tool sign-in, Claude Code, Codex and Cursor commands now use the published package. Released task path precedes the optional native workflow preview.
- Release status, Node requirements, docs navigation, search index, sitemap and agent guide refreshed.
- Installation source record is separate from historical architecture/native workflow pins. Original run/benchmark evidence is preserved.
- Existing static checks now reject obsolete installation status and repository/package references.

## Website checks

`npm run docs:generate`, `npm run check`, `npm run build`, and `git diff --check` completed. Static checks covered 19 pages, routes/anchors/assets, generated output, installation scope/Launch URL, and unchanged benchmark artifact hashes/counts.

Browser inspection covered the desktop installation landing page, the generated install guide and coding-tool guide. At a 390px viewport, installation columns stack and document scroll width equals viewport width (390px). Copy-button UI returned “Code copied”; the browser tool's clipboard read returned an empty value, so copied bytes were not independently confirmed. Source uses `code.textContent` for clipboard writes. Screenshots: `docs/design/installation/desktop-installation.jpg` and `mobile-installation.jpg`. No full accessibility audit or fresh live AWS installation was performed.

## Postflight

```yaml
executed_against: MSDLC-OBJ-001@0.4
alignment: pass
result_status: verified
evidence_added:
  - fresh README and published-package/release availability
  - generated docs, static checks and build
  - desktop and mobile browser observations
scope_delta: current README installation and repository references
contradictions:
  - README open-source headline conflicts with current FSL licence; licence qualification preserved
objective_change_attempted: false
objective_digest_match: true
```

Publication status is recorded in the website PR and Pages workflow, separately from these local checks. The site's publication instructions require owner approval before live merge/publication.
