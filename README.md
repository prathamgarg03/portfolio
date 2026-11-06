# Pratham Garg — Portfolio

React + Vite portfolio with an editorial, portrait-led redesign inspired by the oversized typography and chapter-based storytelling of daddyyankee.com. All personal content and photography come from this repository; no reference-site artwork is copied.

## Local development

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

## Production

```sh
npm run build
npm run preview
```

Routes: `/` (introduction and selected work), `/projects` (all projects), and `/resume` (background and printable resume). Existing Vercel SPA routing is preserved.

Content lives in `src/constants/index.jsx`; photos and the self-hosted font live in `src/assets`. The resume preserves dates as provided in the source, including expected graduation and ongoing employment. Update those entries as circumstances change.

The layout includes keyboard focus states, a skip link, reduced-motion support, responsive navigation, and print styles. Contact opens the visitor's email application.
