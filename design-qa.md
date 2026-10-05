# Design QA — selected Design 1

Reviewed locally on 5 October 2026. Replaces the earlier Anton/pale-blue review. The owner selected Design 1, the cream palette and audience split from Design 2, and correction of generated sample evidence.

## Source and final comparison

- Source: `docs/design/design-1-selected.png`, 1156 × 1360. Generated concept: a composition reference, not product proof.
- Final: `docs/design/design-1-implemented.png`, 1156 × 1360, CSS viewport 1156 × 1360, device scale 1, reduced motion. CDP capture clips document coordinates x=0/y=0. No resizing or density normalization. Browser scroll restoration does not change this document-coordinate capture.
- Both full-size images opened in the same comparison input. Headline/workflow and code/test panels inspected at original resolution.
- Intentional changes: cream; normal-width Inter; illustrative request without fake Slack identity/time; actual saved Django patch/output instead of generated counts; human review and continuation; audience split below the evidence.

## Fidelity surfaces

1. **Typography:** normal-width Inter replaces condensed Anton. Homepage headline capped at 57px; supporting headings use a compact scale. Clear two-line headline and reading hierarchy. Functional labels and artifact links remain legible on mobile.
2. **Spacing/layout:** headline and task/workspace/review diagram form the opening. Evidence panels immediately follow. Mobile stacks workflow/artifacts; 390px and 320px inspections found no document-wide overflow. Mobile evidence links have 44px minimum touch targets.
3. **Color/tokens:** cream, ink and cobalt follow the owner's selected blend. Genuine vendor colors remain. Green is confined to actual added code and the saved successful result, not universal correctness.
4. **Assets:** real Slack/AWS/coding-tool marks and licensed Phosphor icons; semantic HTML task/evidence text. Four editable Excalidraw sources and vector exports retain their relationships with the new palette. Text equivalents/full-size links remain. Return path cropped from the official journey export, with duplicated tiny labels removed and a readable HTML caption.
5. **Copy/content:** complete coding workflow, AWS ownership, inspectable code/evidence, final human decision and leader/developer value. Exact two-validator patch and saved 22-test count are source-linked. Slack request illustrative; historical benchmark not a captured Slack-to-PR run. Installation placeholder retained.

## Comparison history and fixes

- P1: generated sample had a malformed regex and unsupported counts/pass claims. Replaced with unchanged saved patch/output/grader artifacts. Added expressions contain `\A` and `\Z`; both removed/added excerpts checked against the preserved patch. Deliberately broken Z excerpt failed the checker; restored version passed. Separate Python check confirmed valid names accepted, trailing newline rejected, literal terminal Z not required. No new benchmark run.
- P2: initial spacing pushed evidence too far down. Tightened opening; final matched-size comparison includes both evidence panels within reference height.
- P2: return crop had pale-blue fill, tiny duplicate labels and weak line. Matched cream, removed redundant SVG text, increased stroke and aligned route toward workspace. Final desktop capture includes fixes.
- P2: mobile artifact actions too small. Added 44px touch targets and rechecked 390px layout.

No actionable P0/P1/P2 finding remains in inspected states. Local design review, not independent product acceptance or cross-browser accessibility certification.

## Observed browser checks

- Homepage desktop and 390/320px mobile layout; menu open/close, patch dialog open/Escape/focus return, artifact links and diagram navigation.
- Reduced-motion ArrowRight navigation changes Request to Work, selected state and explanation. Earlier branch playback/no-JavaScript checks are historical evidence, not rerun claims for this pass.
- Architecture inspected at settled anchor; source relationships unchanged. Captures retained under `docs/design/`.
- Final cream video played to 20 seconds in native website player: ended=true, readyState=4, 1920×1080, no media error. Controls, optional English caption track and transcript. Caption source inspected; native CC selection not exercised.
- Reviewed console warnings/errors empty. Nine-route link/anchor/asset checks and static build passed locally. Product anchors matched freshly fetched mainline `8acb7ac00c97e3e5ff547cb13af07e5ff160bc86`.

## Video qualification

20-second local Brag/Hyperframes render, 1920×1080 at 30fps. Final pre-render check: zero runtime/layout/contrast errors, 68/68 contrast checks passed. Seven lint warnings concern repeated marks and short nested scenes. Motion assertions not enabled. Original local ambient score plus licensed CC0 accents; no narration/cloud render. Editable composition/logs retained locally. Explanation with one recorded benchmark, not live execution proof.

## Delivery boundary

Local website/media implementation and scoped verification. No AWS acceptance, new AgentX product tests, public release, main merge or live deployment. Owner retains publication control.

final result: passed
