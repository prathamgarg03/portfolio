import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger, reduceMotion } from '../motion/engine'
import { stack } from '../data/content'

const Star = () => (
  <svg className="marquee-star" viewBox="0 0 40 40" aria-hidden="true">
    <path d="M20 2 C21 13 27 19 38 20 C27 21 21 27 20 38 C19 27 13 21 2 20 C13 19 19 13 20 2 Z" />
  </svg>
)

function Row({ items, reverse }) {
  return (
    <div className={`marquee-row ${reverse ? 'is-rev' : ''}`}>
      {[0, 1].map((copy) => (
        <div className="marquee-track" key={copy} aria-hidden={copy === 1}>
          {items.map((s) => (
            <span className="marquee-item" key={s}>
              {s}
              <Star />
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

/** Two bands of tools that drift on their own and surge with scroll speed. */
export default function Marquee() {
  const root = useRef(null)
  useLayoutEffect(() => {
    if (reduceMotion()) return
    const rows = gsap.utils.toArray('.marquee-row', root.current).map((row) => ({
      tracks: row.querySelectorAll('.marquee-track'),
      sign: row.classList.contains('is-rev') ? 1 : -1,
      x: 0,
    }))
    const state = { dir: 1, boost: 1, visible: false }
    const st = ScrollTrigger.create({
      trigger: root.current,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => (state.visible = self.isActive),
      onUpdate: (self) => {
        state.dir = self.direction
        state.boost = Math.max(state.boost, gsap.utils.clamp(1, 8, Math.abs(self.getVelocity()) / 200))
      },
    })
    const tick = (_, dt) => {
      if (!state.visible) return
      state.boost += (1 - state.boost) * 0.06
      const step = (dt / 1000) * 3.4 * state.boost * state.dir // percent of a track per second
      rows.forEach((r) => {
        r.x = gsap.utils.wrap(-100, 0, r.x + step * r.sign)
        r.tracks.forEach((t) => (t.style.transform = `translate3d(${r.x}%,0,0)`))
      })
    }
    gsap.ticker.add(tick)
    return () => {
      gsap.ticker.remove(tick)
      st.kill()
    }
  }, [])

  const half = Math.ceil(stack.length / 2)
  return (
    <section className="marquee" ref={root} aria-label="Tools I work with">
      <p className="sr-only">Tools I work with: {stack.join(', ')}.</p>
      <Row items={stack.slice(0, half)} />
      <Row items={stack.slice(half)} reverse />
    </section>
  )
}
