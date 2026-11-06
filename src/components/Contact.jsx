import { useLayoutEffect, useRef, useState } from 'react'
import { gsap, reduceMotion, scrollToTarget } from '../motion/engine'
import { person } from '../data/content'
import { Sketch, Stacked } from './primitives'

export default function Contact() {
  const root = useRef(null)
  const [copied, setCopied] = useState(false)

  useLayoutEffect(() => {
    if (reduceMotion()) return
    const ctx = gsap.context(() => {
      gsap.from('.contact-inner', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'top top', scrub: true },
      })
      gsap.from('.contact-giant .char-in', {
        yPercent: 100,
        ease: 'expo.out',
        duration: 1.4,
        stagger: 0.07,
        scrollTrigger: { trigger: '.contact-giant', start: 'top 95%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${person.email}`
    }
  }

  return (
    <footer className="contact" id="contact" ref={root}>
      <div className="contact-inner">
        <div className="contact-top">
          <h2 aria-label="Let's build something">
            <Stacked lines={["Let's build", 'something']} as="span" />
          </h2>
          <div className="contact-actions">
            <a className="contact-email" href={`mailto:${person.email}`}>
              {person.email}
            </a>
            <button className="pill pill--light" onClick={copy} aria-live="polite">
              {copied ? 'Email copied' : 'Copy email'}
            </button>
            <p className="contact-links">
              <Sketch href={person.github}>GitHub</Sketch>
              <Sketch href={person.linkedin}>LinkedIn</Sketch>
            </p>
          </div>
        </div>
        <p className="contact-giant" aria-hidden="true">
          {'GARG'.split('').map((c, i) => (
            <span className="char" key={i}>
              <span className="char-in">{c}</span>
            </span>
          ))}
        </p>
        <div className="contact-base">
          <p>© {new Date().getFullYear()} Pratham Garg</p>
          <p className="accent">Built in Vancouver with React, GSAP and Lenis</p>
          <button className="contact-top-btn" onClick={() => scrollToTarget('#top', { duration: 2.4 })}>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
