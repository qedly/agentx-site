# Product story

## Owner-approved direction

Standalone website; public self-hosted install is the eventual primary destination. Rovara is the chosen public display brand; AgentX remains the source project and CLI identity. Do not rename configuration, evidence IDs or commands as part of website branding.

Hero: **Give it a task. Get the work back.**

Explanation: Hand off a coding task from Slack or your coding tool. Rovara works in your AWS account and brings back code changes and evidence from tests and checks for you to inspect.

Authority: **You decide what gets merged.**

Supporting value: **Code to review. Evidence to inspect.**

## Audience

Developers need a concrete task workflow: delegate, inspect, follow up in the same workspace, request a PR. CTOs and VPs need quick understanding of infrastructure ownership, cost, visible evidence and human review authority. Both see the same product, with operational depth on supporting pages.

## Story order

1. Task outcome and human authority.
2. Slack/coding-tool → AWS workspace → change and evidence → human review.
3. Persistent workspace for follow-up.
4. Bounded task examples and familiar connections.
5. Ownership and operating model.
6. Documentation and a clearly labelled installation placeholder.

Verification strengthens the complete coding workflow. It is not presented as the whole product or as proof of correctness. Missing checks, stopped runs, unrerun commands and failing checks must remain visible in the detailed explanation.

## Current boundaries

The current AgentX source is private, no public package/release exists, and the source uses FSL-1.1-ALv2. Installation is explicitly deferred to a simple coming-soon page. The useful current destination is the task walkthrough and documentation, with installation status visible. Do not imply a working public install, all checks passing before PR creation, universal exact-commit verification, automatic merge, cost caps, customer success or a controlled public benchmark.

Implementation review is recorded in `site/data/claims.json` at `8acb7ac00c97e3e5ff547cb13af07e5ff160bc86`. Source references are drift guards; public source references are not independently accessible until the product is published.

## Launch transition

When public release artifacts exist, update the primary CTA, exact installation instructions, source link, license wording and operator guide together. Verify a fresh self-hosted installation through a first task, follow-up, PR and cleanup before claiming that path works. A website build does not establish that product acceptance.
