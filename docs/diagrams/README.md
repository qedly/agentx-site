# Connected workflow explanations

The owner-approved native-workflow story uses four diagrams: task journey, code/evidence version, architecture and task/workspace lifecycle.

Regenerate SVG exports and editable Excalidraw role layouts together:

```sh
node scripts/generate-workflow-diagrams.mjs
```

The generator is the authored layout source. It creates `site/assets/diagrams/{journey,verification,lifecycle,architecture}.svg` and the matching `docs/diagrams/*.excalidraw` geometry/text. `layout-manifest.json` records their titles and dimensions. SVG exports embed the existing licensed service icons; the editable Excalidraw files contain role text and geometry. They are not official Excalidraw-rendered exports. Earlier Excalidraw export screenshots in docs/design are historical.

Use full-size SVG links and a written equivalent on small screens. The published page needs no diagram library. Cream, ink and cobalt remain the approved palette; blue marks owner decisions and directional flow, not a claim of passing evidence.

## Provenance

- Existing infrastructure/direct tasks: AgentX mainline `8acb7ac00c97e3e5ff547cb13af07e5ff160bc86`.
- Native workflow tools and candidate/PR coordination: worktree source `af7836d9e0fe809c716bed526437372482c2a967`, packages/mcp/src/tools.ts, packages/contracts/src/task-workflow.ts, broker/worker workflow operations and GitHub coordination.
- Feedback browser, dependency sequencing and Canvas closeout: owner-approved specs 059/060 and the explicitly approved completed-scope website planning baseline. Availability in a live product release still needs release-matched evidence.

The diagrams are workflow explanations, not recorded runtime outcomes. AI reviews are attributed recommendations. Separate read-only review operations do not imply separate machines or independent host isolation. GitHub owns merge state; humans retain merge decisions. No issue-triggered start, automatic parallel agents, production deployment or indefinite retention is implied.

The older return-path.svg crop is retained for historical assets and is not used by the revised homepage.
