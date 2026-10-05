# Editable system explanations

The four .excalidraw files are the editable sources. SVG exports are in site/assets/diagrams. They were rendered with the official @excalidraw/excalidraw 0.18.0 exportToSvg/restoreElements API, then visually inspected in the website. No third-party runtime is loaded by the published diagrams.

Palette: palette.md. Roughness 0; system diagram uses crisp service relationships, not decorative sketching. Keep SVG exports and editable sources together when changing a diagram. Use a full-size SVG link plus a text equivalent on small screens.

## Source trace, AgentX mainline 8acb7ac00c97e3e5ff547cb13af07e5ff160bc86
- Journey: packages/mcp/src/tools.ts (start, status, continue, requested PR, close); docs/architecture-production.md (Slack return thread).
- Verification: packages/worker/src/run-task.ts:150 and :263 (extension and checks.json); packages/worker/src/verification/extension.ts; checks.ts; packages/worker/src/publish.ts; packages/broker/src/aws/broker.ts (draft/reporting behavior).
- Architecture: docs/architecture-production.md; infra/lib; packages/orchestrator/src/action-gate.ts; packages/gateway; packages/model-runtime/src/config.ts. Service relationships are simplified; exact dispatch infrastructure is disclosed in the engineering view. External provider routes are configuration dependent. The gateway itself is inside the account; vendor connectors are outside.
- Lifecycle: packages/mcp/src/tools.ts (cancel vs wait vs close, unpublished refusal); README idle-reaper behavior; docs/day-two.md and docs/teardown.md. No generic crash-recovery guarantee.

These are implementation-derived explanations, not recorded runtime outcomes. The CSV journey is a constructed scenario. Unpublished native-workflow planning/reviewer/multi-PR work is excluded from mainline claims.

The homepage return-path.svg is a cropped view of the officially exported journey SVG, using viewBox 0 282 1215 125 and the pale-blue section background. Its arrows and label come from that same editable source, not a separately drawn approximation. Regenerate the crop after changing the journey layout.
