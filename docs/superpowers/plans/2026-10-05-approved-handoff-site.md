# Approved Handoff Website Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan in this session. The owner selected the visual and authorized the website build; do not ask for another planning approval.

**Goal:** Build the approved white/blue editorial website and practical documentation for Rovara, the public display brand of the AgentX coding workflow.

**Architecture:** Keep the existing static `site/` deployment boundary and GitHub Pages workflow. Use shared CSS/JavaScript, local font/icon assets, real navigation, accessible illustrative evidence controls, and separate workflow/deployment/documentation pages. No product backend, public package release, private repo exposure or live AWS work is part of this build.

**Tech Stack:** Semantic HTML, CSS, vanilla JavaScript; local Anton and Inter fonts; Iconify brand assets and Phosphor UI icons; Node preview/build checks.

**Spec:** Owner-approved visual `/Users/abhishekgarg/.codex/generated_images/01a109ce-4d9b-7a92-88fd-836f548badfe/exec-5090dbc0-643e-4e0a-97aa-1ac5ce1f27f3.png`; `research/2026-10-05-agentx-website-creative-proposal.md` in the governing workspace, latest owner feedback section.

## Global Constraints

- Match the approved bold layout, warm white, cobalt/pale blue and recognizable Slack/AWS icons.
- Preserve full coding workflow, CTO/VP and developer audiences, persistent workspace and human merge authority.
- Hero: “Give it a task. Get the work back.” Authority: “You decide what gets merged.” Supporting: “Code to review. Evidence to inspect.”
- Brand display is Rovara; commands and existing technical identities remain `agentx` / AgentX.
- Primary current CTA is Deployment guide; state public release preparation accurately. No fabricated working public install command, metrics, customer proof or pass results.
- Use source-qualified explanations; configured/recognized checks can be missing, stopped or fail. Illustrations remain labelled. No automatic merge or deployment arrow.
- Site remains static and usable without JavaScript; reduce motion, keyboard operation, focus management and mobile reflow are required.
- Governing objective MSDLC-OBJ-001@0.4, sha256:707543b940253c8e068da55af87b81b4c57dd8d0e82f83436be13f5391cdf0c2.

## Review Focus

- Narrow screens and long headings: no horizontal overflow; workflows stack; controls remain reachable.
- Evidence controls: keyboard activation, focus on open/close, Escape, background scroll restoration; all examples identified as illustrative.
- No JavaScript: primary navigation and public-release/prerequisite instructions remain usable; supplementary panels fall back to visible content or anchors.
- Relative routes and deep links: links work on GitHub Pages and localhost; legacy docs anchors preserved where useful.
- Public/source distinction: no private source link disguised as public install; display branding must not alter technical commands or evidence identities.

## Files and responsibilities

- `site/index.html`: complete homepage and useful task workflow.
- `site/how-it-works/index.html`: workflow, check outcomes and account-boundary diagrams.
- `site/deployment/index.html`: current release status, prerequisites, ownership/cost and first-task route.
- `site/docs/index.html`: administrator/developer/operate/reference guide, supported Node range.
- `site/assets/site.css`, `site/assets/site.js`: shared layout, responsive states, interactions and meaningful reduced-motion-safe animation.
- `site/assets/fonts/`, `site/assets/icons/`: local fonts and unmodified library/vendor icons with provenance in `ASSET-LICENSES.md`.
- `site/data/claims.json`, `PRODUCT.md`, `DESIGN.md`, `README.md`: current source pin, accepted design, maintenance and preview instructions.
- `package.json`, `scripts/preview.mjs`, `scripts/check-site.mjs`: reproducible local preview and structural checks.
- `design-qa.md`: browser evidence and comparison history against approved visual.

### Task 1: Shared design and homepage

- [x] Record existing baseline and current source/draft heads.
- [x] Acquire self-hosted fonts and library icons; catalogue provenance.
- [x] Build homepage, shared tokens, task illustration, evidence detail controls and responsive navigation.
- [x] Verify homepage links, keyboard evidence interactions, reduced motion and desktop/mobile in the browser.

### Task 2: Workflow, deployment and documentation

- [x] Build supporting pages using the same header/type/tokens and readable diagrams.
- [x] Explain account/provider boundaries, concrete check evidence and current release/first-task requirements.
- [x] Update claim pin to current AgentX mainline; correct Node support and positive merge language.
- [x] Verify document anchors and routes; retain useful legacy first-run/readiness/checks/costs/connections anchors.

### Task 3: Acceptance and review

- [x] Run requested static/source/link verification and inspect every result.
- [x] Capture matching desktop reference and implementation, plus mobile and interaction states.
- [x] Fix P0/P1/P2 differences until design QA passes; record lower-priority limitations.
- [x] Obtain a fresh whole-branch review; resolve substantive findings.
- [x] Commit locally and present the working preview with screenshot evidence. Draft PR preparation is permitted; live publication/merge awaits owner approval.

## Execution notes

Ruling: Preserve this existing static production site rather than initialize a fresh framework prototype. The owner requested the GitHub-hosted website; a new Sites template would add unrelated hosting machinery. Cost if wrong: future interactive requirements may need a build-tool migration.

Preflight: isolated clone `/private/tmp/rovara-site-build`; website main `ec8be749afd3dd506a889a971b6af5e15df48bd3`, existing draft `c0935dad984f8188c01ed69fb0c84688f12a674d`; local branch `codex/approved-handoff-site` starts from the draft. AgentX mainline refreshed to `8acb7ac00c97e3e5ff547cb13af07e5ff160bc86`.

Task 1: complete — homepage, local fonts/icons, interactions and responsive browser checks.
Task 2: complete — workflow, deployment and docs; claim pin refreshed; source cost reconciles to $211.13.
Task 3: complete — browser/static/source verification and fresh whole-branch review; no Critical/Important findings. Final: fixed vendor-license line endings; legal text byte-equivalence checked and whole-branch whitespace check rerun.

## Postflight

```yaml
executed_against: MSDLC-OBJ-001@0.4
alignment: pass
result_status: verified
evidence_added: [design-qa.md, docs/design, site/data/claims.json, independent branch review]
decision_proposals: []
assumption_changes: []
scope_delta: none
contradictions: []
objective_change_attempted: false
objective_digest_match: true
```

Verification is bounded to the website and inspected source claims. Product installation, live AWS acceptance, package release and live website publication remain separate.

Declined-to-judge review boundaries retained: live AWS/customer outcomes, public package release, live publication/settings/merge authority, product defects beyond claim qualification, and legal clearance of branding/trademarks. These are outside the approved website build; no evidence or authority is promoted by excluding them.
