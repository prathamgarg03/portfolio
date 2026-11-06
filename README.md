# prathamgarg.com

Personal portfolio of Pratham Garg, a single scrolling page told as a three-chapter timeline.

## Stack

- React 18 + Vite
- [GSAP](https://gsap.com) (ScrollTrigger, SplitText) for reveals, parallax and the hero intro
- [Lenis](https://lenis.darkroom.engineering) for smooth scrolling
- Self-hosted fonts via Fontsource: Anton (display), Inter Tight (body), Instrument Serif italic (accents)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run lint
```

## Where things live

| Path | What |
| --- | --- |
| `src/data/content.js` | All copy: chapters, timeline entries, project list, links |
| `src/motion/engine.js` | Lenis setup and the data-attribute motion system (`data-reveal`, `data-split`, `data-parallax`, `data-frame`, `data-pop`) |
| `src/components/` | Page sections (Preloader, Nav, Hero, Chapters, History, Marquee, WorkIndex, Contact) |
| `src/assets/illustrations/` | Risograph-style project illustrations for projects without a live site |
| `src/assets/work/` | Screenshots of live projects |

To add a project, add it to `work` in `src/data/content.js`. To put it on the timeline, reference its `id` from an entry's `work` list or add a new entry.

Animations respect `prefers-reduced-motion`: Lenis, the preloader and all scroll effects are skipped.
