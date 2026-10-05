# Design QA — connected system explanations

## Findings

No actionable P0/P1/P2 visual or interaction finding remains in the inspected states. This is a local website review, not independent product acceptance or a cross-browser accessibility certification.

## Source and final comparison

- Visual source: `docs/design/approved-reference.png`, the owner's approved white/black/cobalt exploration.
- Final implementation: `docs/design/connected-reference-size.png`, captured from `http://127.0.0.1:8766/` on 5 October 2026.
- Source and implementation: 1113 × 1413 pixels; CSS width 1113, capture height 1413, deviceScaleFactor 1. Top of page, warm-white theme, first workflow stage selected, playback stopped. No density normalization or image resizing.
- Both images were opened together in the same comparison input. The hero and four-column workflow were inspected as focused regions within that readable full-size pair; no separate crop was needed.
- The reference predates the approved connected-explanation scope. The extended workflow adds stage controls, a continuation stage, and readable explanatory detail. Its lower boundary intentionally moves down; it is not a pixel-matched reproduction of the shorter exploration. The two-column hero and pale-blue band remain the visual anchors.

## Required fidelity surfaces

- **Typography:** self-hosted Anton retains the very condensed two-line headline; Inter remains the body/navigation face. The final desktop hero fits its column without collision. Mobile headline wraps in two deliberate lines. Small functional stage labels were raised to at least 11px. Reading-page headings use a compact scale so diagrams are reachable.
- **Spacing and layout:** the desktop hero keeps the reference's left headline/right explanation arrangement. Familiar task, AWS, diff, and PR visuals remain in four columns with aligned headings and captions. Mobile stacks those steps. The additional detail is grouped within the workflow rather than scattered across unrelated cards. Documentation separates sidebar navigation from the reading column on desktop and reflows on mobile.
- **Colors and tokens:** near-black, warm white, cobalt actions/selection, and pale blue retain the approved direction. Actual vendor logo colors are preserved. Passed/failed/unverified descriptions are text, not a decorative universal green-pass signal.
- **Assets and image quality:** genuine Slack/AWS and licensed Phosphor icon assets remain sharp. The four diagrams use editable Excalidraw sources and official vector exports. The return path is cropped from that official export. No rasterized screenshot replaces semantic page text or controls. Diagrams reserve their image dimensions; full-size links and text equivalents are provided.
- **Copy/content:** the complete coding workflow is explicit, with positive human authority: “You decide what gets merged.” The CSV example and patch are consistently constructed examples. Public release remains in preparation; installation is a simple deferred destination. Rovara is display branding; AgentX and agentx retain their technical identity.

## Comparison history and fixes

1. An initial extension replaced too much of the approved homepage workflow with small tabs. Restored the large Slack/AWS/diff/PR visuals and integrated selection into those headings. Final post-fix evidence: `connected-reference-size.png` and `connected-mobile-home.png`.
2. Diagram review found clipped/wrapped verification labels and a crowded retry path. Reflowed labels and moved the retry loop; exported again with Excalidraw. Post-fix evidence: `connected-verification.png`.
3. Architecture review required a visible Slack result-return path and the connector gateway inside the AWS boundary. Updated the editable source and export. Post-fix evidence: `connected-architecture.png`.
4. Mechanical design scan identified tiny mobile functional labels. Raised them; reviewed the 390px stage controls again. Post-fix evidence: `connected-mobile.png`.
5. Final source/implementation comparison found no further P0/P1/P2 issue. No visual changes followed that final comparison.

## Browser checks — observed locally

- Nine routes checked at 390px and 1113px widths; all nine also checked at 780px. Each had one H1, a main region, and no page-wide horizontal overflow. No broken loaded images were observed. Diagrams deliberately scroll within their own bounded container on small screens.
- Additional 1280px captures: `connected-desktop.png`, `connected-verification.png`, `connected-architecture.png`, `connected-lifecycle.png`.
- Mobile captures: `connected-mobile-home.png`, `connected-mobile.png`, `connected-mobile-docs.png`.
- Manual stage selection, ArrowRight navigation, play/pause, and full five-stage playback worked. At the end, the control became “Replay walkthrough.” The progress strip describes the explanation, not a live task.
- Playback stops when the document becomes hidden or the player is offscreen. Reduced-motion emulation hides playback and preserves direct stage selection without spatial animation.
- The example-diff modal opens, Escape closes it, and focus returns to its trigger. The mobile menu opens with an accurate expanded state and closes with Escape.
- With JavaScript disabled, every explanation stage remains visible and the static navigation/disclosure remains usable. Restored scripting afterward.
- The actual runtime exposed Motion and its animate API. Reviewed browser console warnings/errors were empty.

## Local checks and evidence boundaries

`npm run check` validates nine routes, local links/anchors/assets, required copy, and the release/source pin. `npm run build` creates the static site. `AGENTX_SOURCE=/private/tmp/agentx-site-source npm run check:claims` verifies eleven source anchors against freshly fetched mainline 8acb7ac00c97e3e5ff547cb13af07e5ff160bc86 and recalculates the illustrative cost. These checks do not prove semantic correctness of every procedure or a live AWS install.

Impeccable context and one detector pass were used. Tiny functional text was fixed. Uppercase short labels, the approved Anton display scale, and tracking are deliberate visual choices; unused legacy style rules can also appear in detector results. No claim of zero mechanical warnings is made. The older PRODUCT.md schema was not silently migrated.

The available Slack record did not include a complete request/diff/raw-check-output/candidate/PR packet. The constructed example remains labelled; a complete preferred run was requested from the owner. Brag was researched and a storyboard prepared, but no video was rendered. Installation is intentionally deferred. No AWS acceptance run, product release, main-branch merge, or live-site publication was performed.

## Implementation checklist

- [x] Preserve approved headline, palette, vendor visuals, and positive human authority.
- [x] Add editable task, verification, lifecycle, and architecture diagrams.
- [x] Provide purposeful playback, keyboard control, reduced motion, and static alternatives.
- [x] Split documentation into tutorials and focused references.
- [x] Keep the installation placeholder simple.
- [x] Compare final browser rendering with the approved visual source.
- [ ] Substitute a verified complete real-task packet when available.
- [ ] Produce the Brag video from the prepared brief if commissioned.
- [ ] Review and approve the draft before public deployment.

final result: passed
