# Design QA — approved handoff website

## Scope and source

- Owner-approved source image: `docs/design/approved-reference.png` (original attachment `exec-5090dbc0-643e-4e0a-97aa-1ac5ce1f27f3.png`).
- Implementation: `docs/design/desktop.png`.
- Compared together in the same image review input on 05 October 2026.
- Both PNGs are 1113 × 1413 pixels. Browser render: 1113 × 1413 CSS pixels, device scale factor 1, warm white theme, top-of-page view. No image resizing or density normalization was applied.
- Capture method: browser CDP `Page.captureScreenshot`, explicit document clip. The ordinary in-app screenshot compositor retained its physical viewport scaling after emulation; those inconsistent captures were discarded and replaced with correctly dimensioned CDP captures.

## Comparison and iterations

### Full view

The built page retains the two-column hero, oversized condensed two-line headline, pale blue four-step band, blue actions, return-to-task headline and evidence statement from the reference. Hero/workflow boundaries align at approximately 544/983 pixels. Supporting content continues below the approved upper-page image.

### Focused comparison

- Typography: self-hosted Anton approximates the reference's very condensed display face, with independently compressed headline lines. Inter is used for body and navigation. Selectable text remains semantic HTML.
- Spacing: title and right-column explanation fit without collision; workflow labels, icons, arrows and evidence controls align in four columns. Corrected initial min-content sizing and CTA wrapping.
- Color: near-black headings, warm white, cobalt actions and pale blue workflow. Vendor logos retain their actual colors.
- Assets: real Slack/AWS paths and Phosphor icons replace generated approximations. No fabricated vendor or customer logos.
- Copy: approved task/value/authority lines retained. Public brand is Rovara as chosen earlier; technical command remains `agentx`. Examples say illustrative and do not fabricate check passes.
- Layout: removed an oversized evidence-column gap, corrected the headline overflow on mobile, and made reading pages reflow without a horizontal sidebar.

### Deliberate adaptations, not unresolved defects

- Rovara public wordmark replaces the exploration image's AgentX wordmark.
- A standard return icon and actionable continuation link replace the long looping arrow. No custom decorative SVG is required.
- Real evidence controls describe the report format rather than invented artifact links or a claimed successful run.
- Minor type metrics and button widths differ from the generated reference; the selected composition and hierarchy are preserved.

## Browser checks (observed)

- Four routes: homepage, how-it-works, deployment, docs.
- At 320, 390, 768, 960, 1113, and 1440px widths: all 24 page/width combinations had `scrollWidth === innerWidth`; no broken images observed.
- `docs/design/mobile.png`: 390 × 844, readable hero and CTAs.
- `docs/design/mobile-workflow.png`: 390px wide, complete stacked task journey with reachable evidence controls.
- `docs/design/mobile-docs.png`: 390px wide, readable headings and wrapping reading navigation.
- `docs/design/architecture.png`: account-boundary diagram, component labels, external-service distinction and caption.
- Test output opened with Enter. Check report opened by click. Both produced the correct dialog title and illustration disclosure.
- Opening focused Close evidence. Escape and Close restored focus to the original evidence link and restored background scrolling.
- Mobile menu opened with an accurate expanded state; Escape closed it and returned focus to the menu button.
- Deployment CTA and Docs navigation reached the corresponding routes. Docs check-evidence link changed the hash and scrolled to the section.
- Command copy displayed “Command copied.”
- Reduced-motion emulation: the dialog opened with no active animations. Restored normal preference after the check. Motion library API exists in the actual page context.
- JavaScript disabled: primary navigation remained visible, the menu toggle was hidden, and native Test output disclosure opened successfully via accessibility activation. Restored JavaScript after the check.
- No console warnings or errors returned from the reviewed routes.

## Verification boundaries

`npm run check` covers static links, anchors, assets, required copy and source pin; `check:claims` covers source-reference drift and recalculates the illustrative estimate. These are separate from browser evidence and do not prove a live AWS installation. No product test suite, AWS deployment, public installer release or live site publication was performed.

No actionable P0/P1/P2 visual issue remains in the inspected states. Keyboard, reduced-motion and native no-script checks were bounded functional checks, not a complete accessibility certification or cross-browser audit.

final result: passed
