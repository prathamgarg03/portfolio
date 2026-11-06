import { useLayoutEffect, useRef } from 'react'
import { gsap, reduceMotion, scrollToTarget } from '../motion/engine'
import { person } from '../data/content'
import cutout from '../assets/photos/pratham-cutout.webp'
import sky from '../assets/photos/pratham-sky.webp'

const chars = (word) =>
  word.split('').map((c, i) => (
    <span className="char" key={i}>
      <span className="char-in">{c}</span>
    </span>
  ))

export default function Hero({ entered }) {
  const root = useRef(null)
  const intro = useRef(null)

  // Build the entrance (paused) and the scroll choreography once.
  useLayoutEffect(() => {
    if (reduceMotion()) return
    const ctx = gsap.context(() => {
      intro.current = gsap
        .timeline({ paused: true })
        .from('.hero-sky', { scale: 1.5, duration: 2.2, ease: 'expo.out' }, 0)
        .from('.hero-first .char-in', { yPercent: 115, duration: 1.4, ease: 'expo.out', stagger: 0.05 }, 0.1)
        .from('.hero-cutout', { yPercent: 18, opacity: 0, duration: 1.6, ease: 'expo.out' }, 0.35)
        .from('.hero-last .char-in', { yPercent: 115, duration: 1.3, ease: 'expo.out', stagger: 0.06 }, 0.55)
        .from('.hero-meta > *', { y: 24, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, 0.9)

      const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      gsap.to('.hero-sky', { yPercent: 18, scale: 1.08, ease: 'none', scrollTrigger: st })
      gsap.to('.hero-first', { yPercent: 55, ease: 'none', scrollTrigger: st })
      gsap.to('.hero-cutout-wrap', { yPercent: 10, ease: 'none', scrollTrigger: st })
      gsap.to('.hero-last', { yPercent: -60, ease: 'none', scrollTrigger: st })
      gsap.to('.hero-meta', { yPercent: -120, opacity: 0, ease: 'none', scrollTrigger: st })
    }, root)
    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    if (entered && intro.current) intro.current.play()
  }, [entered])

  return (
    <header className="hero" ref={root} id="top">
      <div className="hero-sky-wrap" aria-hidden="true">
        <img className="hero-sky" src={sky} alt="" />
      </div>
      <h1 className="hero-title">
        <span className="sr-only">
          {person.first} {person.last}, {person.role}
        </span>
        <span className="hero-first" aria-hidden="true">{chars(person.first)}</span>
        <span className="hero-last" aria-hidden="true">{chars(person.last)}</span>
      </h1>
      <div className="hero-cutout-wrap">
        <img className="hero-cutout" src={cutout} alt="Pratham in a green varsity jacket, looking to the left" />
      </div>
      <div className="hero-meta">
        <p className="hero-role">
          <span className="accent">{person.city}</span>
          {person.role}. {person.school}, class of 2026.
        </p>
        <button className="pill pill--light" onClick={() => scrollToTarget('#chapters')}>
          Read the story
        </button>
      </div>
    </header>
  )
}
