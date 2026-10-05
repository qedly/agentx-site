# AgentX website

A standalone GitHub Pages site for AgentX, separate from `qedly.github.io` and the AgentX product repository.

## Preview locally

From this directory:

```sh
python3 -m http.server 8000 --directory site
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

Create the public repository `qedly/agentx-site`, push this project to its default branch, and enable GitHub Pages with GitHub Actions as the source. `.github/workflows/pages.yml` deploys the static files in `site/` on pushes to `main`.

## Product claim maintenance

`site/data/claims.json` is the factual claim ledger for the site. It records the source repository, pinned mainline commit, claim, and inspected evidence. When AgentX changes, review each claim against the new mainline before changing the published site. Run `AGENTX_SOURCE=/path/to/AgentX-mainline node scripts/check-product-claims.mjs` before deployment; it verifies the pinned source wording and recomputes the illustrative monthly cost. It intentionally fails when mainline advances so a human must refresh the evidence. The AgentX repository is currently not public, so its source claim evidence is not independently available to website visitors.

The site intentionally does not claim that AgentX is open source, released, one-click installable, benchmark-leading, customer-validated, or security-certified.
