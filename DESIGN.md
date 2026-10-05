# Design System: AgentX Systems Atlas

## Overview

**Creative North Star: “A working system, drawn in section.”**

Follow the selected Systems Atlas concept: a quiet, technical editorial site organized around a large isometric architecture cutaway. The left index makes the site feel like a guide to a real system. The headline establishes the job; the diagram teaches the path. Below it, separate leader and builder panels translate the same runtime into operating value and developer value.

Key characteristics:
- Near-white, cool blue ground; deep navy type; cobalt system linework; red only for sparse proof marks and current release limits.
- High-contrast serif display typography paired with compact monospaced labels.
- One dominant isometric cutaway, drawn from AgentX terminology and current architecture.
- Fixed vertical section rail on wide viewports; concise, accessible section navigation on mobile.
- Distinct editorial panels divided by rules and whitespace, not a generic SaaS card grid.
- Small motion traces the task route and stops under reduced-motion preferences.

## Colors

- **Porcelain** (#F4F8FD): page field.
- **Navy** (#0D2451): primary editorial text.
- **Cobalt** (#1B58B2): architecture, links, and navigation.
- **Blueprint** (#B7C9E0): construction lines and boundaries.
- **Proof red** (#D65249): rare status marks and annotations; never implies a successful check.

## Typography

Use Iowan Old Style/Palatino/Georgia for high-contrast editorial titles and system sans for prose. Use monospace for section indexes, labels, coordinates, costs, and evidence notes. Font stacks are local system faces; no remote font request is required.

## Layout

A 180px fixed left rail anchors wide screens. The hero is asymmetrical: compact editorial copy on the left, a large blueprint cutaway on the right. Two equal lower panels speak to leaders and builders. Below, deployment, extension, and status sections use ruled ledgers and left-to-right flows. At mobile widths, the rail becomes a compact header and the content stacks without horizontal overflow.

## Elevation & Depth

Use a restrained sheet shadow only on diagram artifacts. Most depth comes from isometric projection, overlapping planes, line weight, and pale-blue field changes.

## Shapes

Use angular geometry for workspace boundaries and documents. Circles are reserved for nodes and evidence ticks. Controls are square and quiet.

## Components

- The hero cutaway distinguishes ingress, orchestration, the per-task execution boundary, retained EBS, and human review. It is an explanatory diagram, not a screenshot or live deployment.
- The leaders/builders split translates the product for buyer and user without repeating the same pitch.
- The deployment ledger states region, workload assumptions, cost caveats, and account boundary.
- The source/release block states the actual FSL license and no-public-release status before offering a CTA.

## Do's and Don'ts

- Keep the selected reference's spatial composition, cool palette, serif hierarchy, left rail, cutaway diagram, and leader/builder split.
- Tie product claims to `site/data/claims.json`; run `scripts/check-product-claims.mjs` against current fetched AgentX mainline before publication.
- Do not call FSL-1.1-ALv2 open source.
- Do not add customer proof, solve rates, savings, install-time claims, or security certifications without current evidence.
- Avoid stock AI art, simulated code output, generic dashboard mockups, nested cards, gradients, and ornamental animation.
