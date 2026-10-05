# Documentation review and rebuild — 5 October 2026

## Scope and authority

DECIDED: Improve the current documentation and confusing footer using the selected cream/ink/cobalt direction. Retain the public-installation placeholder. The full product is still a coding workflow with remote execution, inspectable evidence, continuation and human review. No new product promise, licence change or public deployment is authorized by this pass.

```yaml
objective_snapshot: MSDLC-OBJ-001@0.4
objective_digest: sha256:707543b940253c8e068da55af87b81b4c57dd8d0e82f83436be13f5391cdf0c2
task: improve AgentX/Rovara documentation usability and explain benchmark evidence
contributes_to: AgentX standalone task-to-PR product boundary
decision_rights: research, recommend, implement local and draft website changes
must_preserve: [human merge authority, current licence, technical AgentX names, source provenance, visible missing evidence, owner publication control]
non_goals: [product deployment, benchmark execution, licence changes, public website publication]
assumptions_relied_on: [guides target an already deployed environment]
required_evidence: [current source, rendered docs, working navigation and controls, preserved benchmark artifacts]
stop_conditions: [authority expansion, inaccessible raw campaign data]
```

| Requirement | Classification | Full-product status | Current-phase status | Reason |
|---|---|---|---|---|
| Public self-hosted install | capability | retained | phased | Owner requested a simple placeholder for now. |
| Coding workflow and inspectable work | capability | retained | included | Guides explain request, work, review, follow-up and PR. |
| Human final merge decision | invariant | retained | included | Plain user authority wording; no automated merge promise. |
| Full campaign scorecards | capability | retained | phased | Complete raw rows and reports must be reconciled first. |
| Modern usable documentation | preference | retained | included | Compact typography, grouped navigation, search and mobile reading. |
| Open-source launch licence | unresolved decision | unresolved | excluded | This pass does not change the product licence. |

## Fresh reference review

OBSERVED: Paperclip separates learning material from reference and gives users a short path into doing a task. Its reading pages have a persistent category sidebar, page contents, compact titles and next-page navigation.

- [Paperclip docs](https://docs.paperclip.ing/)
- [Paperclip five-minute path](https://docs.paperclip.ing/guides/getting-started/five-minute-path/)

OBSERVED: Herdr distinguishes beginner and experienced-reader paths, keeps installation separate from using the product, and provides a persistent sidebar, search, page contents, copyable examples and previous/next links.

- [Herdr docs](https://herdr.dev/docs/)
- [Herdr quick start](https://herdr.dev/docs/quick-start/)
- [Herdr concepts](https://herdr.dev/docs/concepts/)

INFERRED: The useful pattern for Rovara is a task-first documentation system with an overview, concepts, practical tutorials, configuration, reference and help. Preserve Rovara's visual identity; use the familiar reading behavior rather than copying another brand.

## Before: journey and findings

Entry point: local `/docs/index.html`. User goal: understand the product, find the right starting point, and complete a task in an existing environment.

| Step | Before health | Problem | Change |
|---|---|---|---|
| Understand the product | weak | General field-guide framing and operator metadata competed with the first useful explanation. | One plain explanation and two entry paths: Slack or a coding tool. |
| Find a starting point | weak | Flat links did not distinguish learning, operating and reference. | Grouped persistent sidebar across eleven pages. |
| Follow a task | weak | Oversized intro and wide article did not supply a clear reading system. | Reading-scale heading, prerequisites, numbered steps, expected outcomes and follow-up links. |
| Find a specific answer | missing | No functional search or page contents. | Searchable pages/sections, keyboard controls and page anchor links. |
| Understand a benchmark | partial | Historical run was mixed into the generic evidence guide. | Dedicated recorded benchmark page with raw artifacts and method. |
| Understand the footer | weak | Brand lineage, release status and licence terminology crowded the footer. | Short product description; release, naming and exact licence terms on a dedicated page. |

## Implemented changes

- Eleven documentation pages generated from one authoring source.
- Local search across 67 pages/sections; no service or account required.
- Desktop sidebar, page contents and compact 36px H1; mobile collapsible navigation.
- Native search dialog, keyboard navigation, Escape close and trigger focus restoration.
- Real copy buttons; the Codex command was copied and read back exactly.
- Concepts, MCP tool reference and troubleshooting added; task and review guides rewritten.
- Licensing, technical-name explanation, prerequisites and source pin moved to Release and licence.
- Product footer simplified on all three marketing pages.
- Installation remains explicitly coming soon.
- Django patch, grader report and test output unchanged; homepage now links directly to its dedicated page.
- Generated docs/search freshness guard added to both local checks and PR validation.
- Source guard reconciles the developer tool reference against the actual eleven definitions.

## Source verification

OBSERVED: AgentX `origin/mainline` was freshly fetched and remained at `8acb7ac00c97e3e5ff547cb13af07e5ff160bc86`. Website claim references match this commit. This is an explicit code snapshot, not live installation acceptance.

| Documentation surface | Primary source reviewed | Scope |
|---|---|---|
| Client connection | AgentX README and CLI command surface | Claude Code, Codex and Cursor install options. |
| MCP reference, waiting and continuation | `packages/mcp/src/tools.ts` | Eleven names, task states, timeout semantics, sharing, PR draft default and async PR URL. |
| Projects and checks | Existing reviewed project-schema and worker implementation references | Setup/readiness commands, immutable revisions, devcontainer behavior and policy boundary. |
| Check review and PR behavior | Existing pinned worker verification and publication references in `site/data/claims.json` | Before/after comparison where possible, missing checks, reporting path and CodeBuild evidence. |
| Cost example | `packages/cli/src/init/cost.ts` and model runtime configuration | Source estimate derives $211.13 under stated sample usage; not a current bill or price guarantee. |
| Licence | Actual AgentX LICENSE | FSL-1.1-ALv2; exact file copied without modification. |
| Recorded Django task | Saved patch, output, grader report and metadata | Hashes and 3 bug/19 regression checks reconcile; no new task run. |

The source guard checks reference drift and documentation tool names. It cannot verify that the deployment operates correctly in AWS. A future public installer needs separate fresh install and first-task checks.

## Benchmark presentation decision

Recommendation: polish the presentation with task stories, readable diffs and complete dataset-specific scorecards. Preserve the recorded results, denominators and failures. A selected successful task is identified as selected; it is not an overall solve rate.

The currently inspectable Django example belongs to SWE-bench Verified. A separate campaign found during evaluation research belongs to SEC-bench and must not be labelled SWE-bench. Full campaign rows/reports remain unavailable to this review pending existing AgentX sign-in. Slack summaries are leads to artifacts, not reconciled public scorecards. No aggregate scores were added to the website.

A campaign report must identify dataset/version, task selection, models/settings, run count, resolved count over all started runs, graded count, errors/cancellations, retries, cost scope and artifact links. Distinguish recorded grader results from a fresh independent rerun. Do not turn model-batch comparisons into a product leaderboard without equivalent settings and sufficient evidence.

## Browser verification

OBSERVED through the Codex in-app browser:

- All eleven docs pages loaded at 1440px and 390px: correct H1, no page-level horizontal overflow. No broken images on desktop checks.
- A 320px MCP reference check had no page-level horizontal overflow. Tables scroll inside their bounded wrapper; tool identifiers remain unbroken.
- Sidebar navigation, next-page links and a page-contents anchor led to their named destinations.
- Codex search ranks the coding-tool guide first; selecting a section closes the dialog and navigates to its anchor.
- No-result feedback, ArrowDown/Enter selection, Escape close and focus restoration exercised.
- Copied `agentx mcp install --client codex` matches the example exactly.
- Mobile navigation expands and collapses; the mobile search button has an accessible name.
- With JavaScript disabled, all twelve sidebar links remain and the unavailable search control is hidden.
- No console errors observed in the reviewed path.

Website generation, fourteen-page route/anchor/asset checks, saved benchmark checksums, source-reference checks, exact MCP-name comparison and static build pass locally. These checks do not constitute live AgentX acceptance, customer proof, or a comprehensive accessibility certification.

Screenshots are saved in the companion local review artifact. Before: current docs and task guide, Paperclip and Herdr entry/reading pages. After: overview, first task, coding tools, benchmark, mobile reference and functional search.

## Postflight

```yaml
executed_against: MSDLC-OBJ-001@0.4
alignment: pass
result_status: verified
result_scope: local website documentation and controls; public deployment unchanged
evidence_added: [rendered docs screenshots, browser interaction observations, source drift guard, exact MCP reference reconciliation]
decision_proposals: [publish dataset-specific campaign scorecards after raw artifact reconciliation]
assumption_changes: [one located campaign is SEC-bench, not SWE-bench]
scope_delta: none
contradictions: []
objective_change_attempted: false
objective_digest_match: true
```
