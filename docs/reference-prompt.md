# Approved visual and motion reference

Visual source: owner-approved white/black/cobalt mock, retained in docs/design/approved-reference.png. Preserve its condensed headline, right-side product explanation, vendor icons, pale-blue workflow, whitespace, and human authority. Extend that world to connected explanations; do not invent another palette.

Motion reference: https://motion.dev/docs/animate. Use the current site's vendored Motion for an interruptible, user-started sequence. No page-load or scroll reveal dependency.

Focal sequence: request → remote work → evidence → requested PR → same-workspace follow-up. Each stage receives a blue selection state; the progress strip tracks the *explanation*, not an actual task. Stage changes use 240ms text continuity and a 350ms progress transition. Five-second holds provide reading time. Pause/replay and direct selection work at all times. Offscreen, hidden-page, and reduced-motion states stop playback.

Continuity: return arrow in the editable journey diagram connects review/follow-up to the workspace. Architecture has labelled service relationships; verification branches retain missing results; lifecycle separates compute and retained state.

Feedback: active stage, focus, hover, modal close/focus restoration. Static fallback shows every stage when JavaScript is absent; reduced motion keeps direct stage selection without spatial animation or playback.

Tool guidance actually used: Excalidraw visual arguments and official export; Impeccable clarify/animate/polish and local context/detector; UI UX Pro Max animation/accessibility guidance. The Drive guide's coding-environment and motion workflow is adapted to this static site. A framework migration is unnecessary.
