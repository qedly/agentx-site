# Editable review-cut composition

Run `npm run check`, then `npm run dev` for Studio. `npm run render -- --output review.mp4` renders locally. Node 22 or later is required by the renderer; the delivered cut used Node 24.19.0. Package scripts pin Hyperframes 0.8.140. GSAP, fonts and audio are local assets; see the repository ASSET-LICENSES.md.

Four seekable scenes, 20 seconds at 1920×1080/30 fps. Source clips remain at 0, 4, 9 and 15 seconds. The site output additionally bakes the settled evidence frame into frame zero with FFmpeg and ships captions/transcript. Validate all scenes and transitions after an edit. Keep illustrative workflow and historical benchmark qualifications visible. This source is an explainer, not recorded product usage.
