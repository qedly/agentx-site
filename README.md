# Rovara website

Standalone public website for Rovara, the display brand of the AgentX coding workflow. Static HTML, CSS, JavaScript, self-hosted fonts and licensed icon assets. Hosted by GitHub Pages from `rovara-dev/rovara-dev.github.io`.

## Local preview

Use Node 20 or newer for the website tooling (the AgentX product requires Node `>=22.19.0 <23`). No package installation is required.

```sh
npm run dev
```

Open `http://127.0.0.1:8766/`. Choose another port with `npm run dev -- --port 8767`. The server binds to the loopback interface by default.

## Pages

- `site/index.html`: compact product story, illustrative task handoff, exact recorded Django diff/output, leaders/developers value and a 20-second video.
- `site/how-it-works/index.html`: workflow, check outcomes, account boundary and human review.
- `site/deployment/index.html`: a simple installation-coming-soon placeholder, as requested.
- `site/docs/index.html`: documentation hub with separate task, coding-tool, configuration, evidence, and operations guides.

All pages use relative links. Evidence controls open an accessible native dialog; without JavaScript they lead to expandable explanations. Mobile navigation remains available without JavaScript. Reduced motion is respected.

## Check and build

```sh
npm run check
AGENTX_SOURCE=/path/to/current/AgentX npm run check:claims
npm run build
```

`check` inspects local routes, anchors, assets and required copy. It also checks artifact hashes/test counts and that both homepage regex excerpts match the preserved patch. `check:claims` checks pinned source references against the authorized AgentX clone, verifies that its fetched mainline has not advanced, and recomputes the illustrative cost. It is a drift guard, not proof of runtime behavior. Fresh code review and runtime evidence still qualify product claims.

`build` copies the static artifact to `dist/`. GitHub Pages currently uploads `site/` directly; no framework or runtime backend is needed.

## Publication

Live URL: `https://rovara-dev.github.io/`. `.github/workflows/pages.yml` deploys only from `main` or a manually requested workflow run. Review branches do not publish this site. The approved redesign requires owner approval before live merge/publication.

## Product claim maintenance

`site/data/claims.json` records the reviewed source commit and primary references. Fetch current product mainline, read the affected implementation, then update the pin and copy together. Do not advertise a public installer until the product source, license and release artifacts are actually available.

The current source license is FSL-1.1-ALv2. “Open source,” public install commands, customer results, benchmark scores, security certification and automatic merge-gate promises are not justified by this website build. Public display branding does not rename CLI commands, authorization or evidence identities.

Design decisions: `DESIGN.md`. Product messaging: `PRODUCT.md`. Asset provenance: `ASSET-LICENSES.md`. Browser evidence: `design-qa.md`.

## Connected explanations

Editable task journey, architecture, verification, and lifecycle sources: `docs/diagrams/`. Their SVG exports ship without a diagram runtime. User-started Motion walkthrough has direct stage selection, pause/replay, keyboard controls, reduced-motion handling, and a static no-JavaScript fallback.

The CSV workflow is a constructed explanation, not real run evidence. A separate historical Django benchmark now has an inspectable patch, raw harness output, grader report, and allowlisted metadata in `site/assets/evidence/django-11099/`. Hashes and test counts are checked by `npm run check`. This selected task is not a full Slack-to-PR demo, aggregate solve rate, or proof of the current verification loop. The locally rendered 20-second video is embedded with controls, captions and a transcript. Production notes live in `docs/video/`; share media lives in `site/assets/video/`. No public deployment has been performed for this redesign.
