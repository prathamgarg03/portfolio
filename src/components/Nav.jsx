import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger, reduceMotion, lockScroll, scrollToTarget } from '../motion/engine'
import { chapters, person } from '../data/content'
import { Sketch } from './primitives'

function useVancouverTime() {
  const fmt = () =>
    new Intl.DateTimeFormat('en-CA', { hour: 'numeric', minute: '2-digit', timeZone: 'America/Vancouver' }).format(new Date())
  const [t, setT] = useState(fmt)
  useEffect(() => {
    const id = setInterval(() => setT(fmt()), 15000)
    return () => clearInterval(id)
  }, [])
  return t
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [onDark, setOnDark] = useState(true)
  const menu = useRef(null)
  const toggle = useRef(null)
  const tl = useRef(null)
  const time = useVancouverTime()

  // Nav text sits on the blue hero and footer, ink everywhere else.
  useEffect(() => {
    const triggers = ['.hero', '.contact', '.divider'].flatMap((sel) =>
      gsap.utils.toArray(sel).map((el) =>
        ScrollTrigger.create({
          trigger: el,
          start: 'top 40px',
          end: 'bottom 40px',
          onToggle: () => {
            const dark = ScrollTrigger.getAll().some(
              (t) => t.vars.id === 'nav-dark' && t.isActive,
            )
            setOnDark(dark)
          },
          id: 'nav-dark',
        }),
      ),
    )
    return () => triggers.forEach((t) => t.kill())
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ paused: true })
        .set(menu.current, { visibility: 'visible' })
        .fromTo(menu.current, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'expo.inOut' })
        .from('.menu .line-in', { yPercent: 110, duration: 0.9, ease: 'expo.out', stagger: 0.05 }, 0.45)
        .from('.menu-foot > *', { opacity: 0, y: 16, duration: 0.6, ease: 'expo.out', stagger: 0.05 }, 0.7)
    }, menu)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const t = tl.current
    if (!t) return
    lockScroll(open)
    if (open) {
      reduceMotion() ? t.progress(1) : t.timeScale(1).play()
      menu.current.querySelector('a')?.focus({ preventScroll: true })
    } else if (t.progress() > 0) {
      reduceMotion() ? t.progress(0) : t.timeScale(1.6).reverse()
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (hash) => (e) => {
    e.preventDefault()
    setOpen(false)
    setTimeout(() => scrollToTarget(hash), reduceMotion() ? 0 : 450)
    toggle.current?.focus({ preventScroll: true })
  }

  return (
    <>
      <nav className={`nav ${onDark || open ? 'nav--light' : ''}`} aria-label="Main">
        <a href="#top" className="nav-mark" onClick={go('#top')} aria-label="Back to top">
          PG
        </a>
        <p className="nav-time">
          Vancouver <span>{time}</span>
        </p>
        <button
          ref={toggle}
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="nav-toggle-label">
            <span className={open ? 'is-out' : ''}>Menu</span>
            <span className={open ? '' : 'is-out'}>Close</span>
          </span>
          <span className={`burger ${open ? 'is-open' : ''}`} aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </nav>

      <div className="menu" id="menu" ref={menu} aria-hidden={!open} inert={!open ? '' : undefined}>
        <ol className="menu-chapters">
          {chapters.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} onClick={go(`#${c.id}`)}>
                <span className="line">
                  <span className="line-in">
                    <span className="menu-n">{c.n}</span>
                    {c.name}
                  </span>
                </span>
                <span className="line menu-span">
                  <span className="line-in">{c.span}</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
        <ul className="menu-links">
          <li>
            <a href="#work" onClick={go('#work')}>
              <span className="line"><span className="line-in">All projects</span></span>
            </a>
          </li>
          <li>
            <a href="#contact" onClick={go('#contact')}>
              <span className="line"><span className="line-in">Contact</span></span>
            </a>
          </li>
        </ul>
        <div className="menu-foot">
          <Sketch href={person.github}>GitHub</Sketch>
          <Sketch href={person.linkedin}>LinkedIn</Sketch>
          <Sketch href={`mailto:${person.email}`}>Email</Sketch>
        </div>
      </div>
    </>
  )
}
