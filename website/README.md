# Dr. Tyler Shephard consulting website

A responsive, dependency-free editorial website for schools, universities, and educators. The visitor can explore proposed consulting areas, interact with the 15-week character formation pathway, play Benedictine College's official Freedom Fellows film, and prepare an inquiry for Tyler's verified contact page.

## Run

```sh
cd website
npm run check
npm start
```

The local preview is http://127.0.0.1:4173. All deployable files live in `dist/`; no build step, package installation, API key, or database is required.

## Edit

- `dist/index.html`: semantic content, proposed service descriptions, source links, and dialogs.
- `dist/styles.css`: responsive layout and design tokens.
- `dist/app.js`: navigation, accessible tabs, inquiry preparation, opt-in video, and motion.
- `dist/assets/`: locally bundled photographs and favicon.
- `.openai/hosting.json`: private Sites project identity and static output configuration.
- `docs/`: design rationale, provenance, and verification notes.

## Review state

The site is intentionally labeled as a consulting concept and excludes search indexing. Proposed service formats are not represented as existing products. No prices, fabricated clients, testimonials, or performance statistics are used.

The inquiry form prepares a message locally. It does not send email or persist submissions. Visitors copy the message and use Tyler's verified college contact form. Replace this handoff with an approved consulting address or an operated backend before calling it a direct lead-capture system. Do not expose a mail-provider secret in browser JavaScript.

Vimeo is loaded only after the visitor activates the film. The player supports captions and transcript controls. External playback depends on Vimeo's availability and embedding policy. All other displayed imagery is bundled locally.

Before a public business launch, Tyler should confirm the service descriptions, independent contact destination, branding, and authorization to use college imagery. Remove the concept banner and noindex directives only when the intended public launch is authorized. Current academic roles were checked on November 16, 2026.

## Repository

Website source lives beside the existing `skills/` collection. The original submodule references and root README are preserved. Relevant design, writing, and engineering skills informed this build; no third-party skill source is copied into the deployable website.
