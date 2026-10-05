# Website publication review - 5 October 2026

## Preflight

- Governing objective: MSDLC-OBJ-001@0.4.
- Objective digest: sha256:707543b940253c8e068da55af87b81b4c57dd8d0e82f83436be13f5391cdf0c2.
- Owner authorized website checks, source reconciliation, corrections and PR preparation. Public merge/deployment remains the final owner approval.
- Preserve the approved cream/ink/cobalt design, simple value proposition, human decisions, explicit task initiation, and coming-soon installation placeholder.
- Completed parity is the owner-selected planning baseline. Current product release availability and a recorded native demonstration remain separate evidence questions.

## Source reconciliation

Mainline was freshly fetched and remains 8acb7ac00c97e3e5ff547cb13af07e5ff160bc86. Native tools, candidate review and linked-PR feedback implementation were inspected at committed local 3455a367005972659875667b82d7b5d28a2da727. GitHub product PR302 remains open/draft with the older remote head af7836d9e0fe809c716bed526437372482c2a967. The website preview identifies the local source qualification and the remaining design-qualified surfaces. No product code was changed here.

## Automated observations

- npm run check: passes 18 pages, generated 15-page docs and 114 searchable entries, local links/anchors/assets, release copy and source pin.
- Django artifact hashes, counts and both displayed regex excerpts reconcile to the preserved record.
- Selected Pro batch receipts reconcile to 40 resolved of 50; all 100 grader artifact copies retain their recorded hashes. The checker uses RESULT and required-test counts from the saved test-summary logs, alongside raw JSON test records; it does not use agent success claims as verdicts.
- npm run check:claims against both authorized source clones passes 11 source references and 15 MCP tool names. Illustrative cost recomputes to $211.13.
- npm run build and git diff --check pass.
- Local HTTP check: all 165 linked routes/assets/downloads served HTTP200 and matched source bytes. See preview-http-check.json.
- Pages now repeats static checks and build before upload. Existing PR validation workflows remain; public CI does not require private product credentials.

## Browser observations

- All 18 pages inspected at 390px and default desktop width: one H1 each and no page-level horizontal overflow.
- Mobile navigation opens, Escape closes it and returns focus. Docs navigation collapses on mobile.
- Walkthrough ArrowRight/Home/End selects the expected stage and one visible panel. Play/Pause works. Reduced-motion emulation hides automatic playback and retains manual stage selection. Disabling JavaScript leaves all six explanations visible. Both emulations restored.
- Evidence dialog opens, Escape closes it and returns focus to Inspect patch.
- Docs Cmd+K, search for PR feedback, ArrowDown and Enter open the correct guide. No-result feedback is visible; Escape restores focus. Code-copy action shows success.
- Keyboard ArrowRight scrolls the narrow-screen diagram region; full-size SVG links and text equivalents are available.
- Downloading the 50-task CSV through the browser succeeded; downloaded bytes match the source.
- Scoped browser console check returned no errors/warnings.
- Updated desktop/mobile screenshots are in docs/design/native-workflow.

These are website observations, not a screen-reader audit, every-browser certification, live AWS acceptance, a fresh benchmark run, customer evidence or a public product release.

## Fresh independent source review

A separate read-only reviewer found 0 Critical, 1 Important, 2 Minor initially. All resolved:

1. Tutorials omitted the explicit request that starts initial candidate reviews at REVIEW/WAITING. Added it to Quick, Full, coding-tool and evidence guides, with matching journey copy.
2. Agent-readable guide hardcoded an old source pin. Generator now derives pins from source records.
3. Sitemap omitted new docs. Generator now derives all18 routes from the documentation inventory and stale-output checking covers it.

Follow-up review: 0 Critical, 0 Important, no remaining blockers. Reviewer repeated check, claim reconciliation and whitespace check, but did not repeat browser tests or run a live product task.

## Postflight

```yaml
executed_against: MSDLC-OBJ-001@0.4
alignment: pass
result_status: verified
scope_delta: none
objective_change_attempted: false
objective_digest_match: true
evidence_added:
  - fresh static and claim checks
  - local HTTP routes and download byte checks
  - desktop/mobile keyboard and reduced-motion observations
  - corrected tutorial source reconciliation
  - fresh independent review and follow-up clearance
decision_proposals: []
assumption_changes: []
contradictions:
  - owner-selected completed scope is not released product availability or recorded live acceptance
```

Verification status qualifies this website artifact only. Installation remains deferred. The full native task video has not been captured; the current walkthrough is labelled illustrative and the embedded video is labelled an earlier overview. Publication is awaiting owner approval.
