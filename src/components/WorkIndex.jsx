import { useLayoutEffect, useRef, useState } from 'react'
import { gsap, reduceMotion } from '../motion/engine'
import { person, work } from '../data/content'
import { Stacked } from './primitives'

export default function WorkIndex() {
  const root = useRef(null)
  const preview = useRef(null)
  const [active, setActive] = useState(null)
  const move = useRef(null)

  useLayoutEffect(() => {
    if (reduceMotion()) return
    const p = preview.current
    const xTo = gsap.quickTo(p, 'x', { duration: 0.6, ease: 'power3' })
    const yTo = gsap.quickTo(p, 'y', { duration: 0.6, ease: 'power3' })
    const rTo = gsap.quickTo(p, 'rotate', { duration: 0.8, ease: 'power3' })
    let lastX = 0
    move.current = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
      rTo(gsap.utils.clamp(-12, 12, (e.clientX - lastX) * 0.6))
      lastX = e.clientX
    }
  }, [])

  const current = active != null ? work[active] : null

  return (
    <section className="work" id="work" ref={root} aria-labelledby="work-title">
      <div className="work-head">
        <h2 id="work-title" aria-label="Everything on GitHub">
          <Stacked lines={['Everything', 'on GitHub']} as="span" />
        </h2>
        <p className="work-note">
          {work.length} projects, newest first. Each row opens its repository.
        </p>
      </div>
      <ul
        className="work-list"
        onMouseMove={(e) => move.current?.(e)}
        onMouseLeave={() => setActive(null)}
      >
        {work.map((w, i) => (
          <li key={w.id}>
            <a
              className="work-row"
              href={w.code}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
            >
              <span className="work-year">{w.year}</span>
              <span className="work-name">{w.name}</span>
              <span className="work-what">{w.what}</span>
              <span className="work-stack">{w.stack}</span>
            </a>
            {w.live && (
              <a className="work-live" href={w.live} target="_blank" rel="noreferrer" aria-label={`${w.name} live site`}>
                Live
              </a>
            )}
          </li>
        ))}
      </ul>
      <p className="work-more">
        <a className="pill" href={`${person.github}?tab=repositories`} target="_blank" rel="noreferrer">
          View all repositories
        </a>
      </p>
      <div className={`work-preview ${current?.image ? 'is-on' : ''}`} ref={preview} aria-hidden="true">
        {work.map((w, i) =>
          w.image ? <img key={w.id} src={w.image} alt="" className={i === active ? 'is-active' : ''} loading="lazy" /> : null,
        )}
      </div>
    </section>
  )
}
