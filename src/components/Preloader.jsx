import { useLayoutEffect, useRef } from 'react'
import { gsap, reduceMotion, lockScroll } from '../motion/engine'

const KEY = 'pg-entered'

/** Full-screen ink curtain with a counter. Shown in full once per visit, briefly after that. */
export default function Preloader({ onDone }) {
  const root = useRef(null)
  const count = useRef(null)

  useLayoutEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem(KEY) === '1'
    } catch {
      /* storage blocked: treat as first visit */
    }
    if (reduceMotion()) {
      onDone()
      root.current.style.display = 'none'
      return
    }
    lockScroll(true)
    const n = { v: 0 }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          try {
            sessionStorage.setItem(KEY, '1')
          } catch {
            /* ignore */
          }
          lockScroll(false)
          root.current.style.display = 'none'
        },
      })
      tl.from('.pre-name .line-in', { yPercent: 110, duration: 0.8, ease: 'expo.out', stagger: 0.08 })
        .to(
          n,
          {
            v: 100,
            duration: seen ? 0.5 : 1.7,
            ease: 'power3.inOut',
            onUpdate: () => {
              if (count.current) count.current.textContent = String(Math.round(n.v)).padStart(3, '0')
            },
          },
          0.1,
        )
        .to('.pre-bar-fill', { scaleX: 1, duration: seen ? 0.5 : 1.7, ease: 'power3.inOut' }, 0.1)
        .to('.pre-name .line-in, .pre-count', { yPercent: -110, duration: 0.6, ease: 'expo.in', stagger: 0.04 })
        .add(() => onDone(), '-=0.1')
        .to(root.current, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1.1, ease: 'expo.inOut' }, '-=0.15')
    }, root)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="pre-name">
        <span className="line"><span className="line-in">Pratham Garg</span></span>
        <span className="line"><span className="line-in pre-sub">Portfolio, Vancouver</span></span>
      </div>
      <div className="pre-bar"><span className="pre-bar-fill" /></div>
      <div className="line pre-count-wrap">
        <span className="pre-count" ref={count}>000</span>
      </div>
    </div>
  )
}
