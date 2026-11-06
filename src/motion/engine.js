import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)

export { gsap, ScrollTrigger, SplitText }

export const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

let lenis = null

export function startSmoothScroll() {
  if (lenis || reduceMotion()) return lenis
  lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, touchMultiplier: 1.4 })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
  return lenis
}

export const getLenis = () => lenis

export function scrollToTarget(target, opts = {}) {
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (!el) return
  if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.6, ...opts })
  else el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' })
}

export const lockScroll = (locked) => {
  if (lenis) (locked ? lenis.stop() : lenis.start())
  document.documentElement.classList.toggle('is-locked', locked)
}

/**
 * Wires every data-attribute driven effect inside `root`.
 *  [data-reveal]          stacked heading lines (.line > .line-in) rise out of a mask
 *  [data-split="lines"]   paragraph lines rise out of a mask
 *  [data-split="words"]   words fill from faint to solid as you scroll through
 *  [data-parallax]        element drifts by data-parallax (yPercent) across the viewport
 *  [data-frame]           image frames wipe open and their image settles from a zoom
 *  [data-pop]             stickers drop in with a little overshoot
 * Returns a cleanup function.
 */
export function wireMotion(root) {
  if (reduceMotion()) return () => {}
  const splits = []
  const ctx = gsap.context(() => {
    gsap.utils.toArray('[data-reveal]', root).forEach((el) => {
      gsap.from(el.querySelectorAll('.line-in'), {
        yPercent: 105,
        rotate: 2,
        duration: 1.1,
        ease: 'expo.out',
        stagger: 0.09,
        scrollTrigger: { trigger: el, start: 'top 88%' },
      })
    })

    gsap.utils.toArray('[data-split="lines"]', root).forEach((el) => {
      const s = SplitText.create(el, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.lines, {
            yPercent: 100,
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.06,
            scrollTrigger: { trigger: el, start: 'top 90%' },
          }),
      })
      splits.push(s)
    })

    gsap.utils.toArray('[data-split="words"]', root).forEach((el) => {
      const s = SplitText.create(el, { type: 'words' })
      splits.push(s)
      gsap.fromTo(
        s.words,
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
        },
      )
    })

    gsap.utils.toArray('[data-parallax]', root).forEach((el) => {
      const amt = parseFloat(el.dataset.parallax) || 10
      gsap.fromTo(
        el,
        { yPercent: -amt },
        {
          yPercent: amt,
          ease: 'none',
          scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
    })

    gsap.utils.toArray('[data-frame]', root).forEach((el) => {
      const img = el.querySelector('img')
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%' } })
      tl.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'expo.inOut' })
      if (img) tl.from(img, { scale: 1.35, duration: 1.6, ease: 'expo.out' }, 0.2)
    })

    gsap.utils.toArray('[data-pop]', root).forEach((el) => {
      gsap.from(el, {
        scale: 0.4,
        rotate: -18,
        opacity: 0,
        duration: 1,
        ease: 'back.out(2)',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })
    })
  }, root)

  return () => {
    splits.forEach((s) => s.revert())
    ctx.revert()
  }
}

/** Animates the seed of the shared hand-drawn border filters at a low, sketchy frame rate. */
export function startWobble(fps = 7) {
  if (reduceMotion()) return () => {}
  const turbs = document.querySelectorAll('#wobble-defs feTurbulence')
  let seed = 1
  const id = setInterval(() => {
    if (document.hidden) return
    seed = (seed % 50) + 1
    turbs.forEach((t, i) => t.setAttribute('seed', String(seed + i * 7)))
  }, 1000 / fps)
  return () => clearInterval(id)
}
