import { useCallback, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger, startSmoothScroll, scrollToTarget, startWobble, wireMotion } from './motion/engine'
import { WobbleDefs } from './components/primitives'
import Preloader from './components/Preloader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Chapters from './components/Chapters'
import History from './components/History'
import WorkIndex from './components/WorkIndex'
import Marquee from './components/Marquee'
import Contact from './components/Contact'

export default function App({ section, title }) {
  const [entered, setEntered] = useState(false)
  const main = useRef(null)
  const onDone = useCallback(() => setEntered(true), [])

  useEffect(() => {
    startSmoothScroll()
    const stopWobble = startWobble()
    let cleanup = () => {}
    let cancelled = false
    // Split text only once the real fonts are in, so line breaks are measured correctly.
    document.fonts.ready.then(() => {
      if (cancelled) return
      cleanup = wireMotion(main.current)
      ScrollTrigger.refresh()
    })
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    return () => {
      cancelled = true
      cleanup()
      stopWobble()
      window.removeEventListener('load', refresh)
    }
  }, [])

  useEffect(() => {
    if (entered && section) setTimeout(() => scrollToTarget(section, { immediate: true }), 50)
  }, [entered, section])

  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Pratham Garg` : 'Pratham Garg | Software Engineer, SFU Computing Science'}</title>
      </Helmet>
      <a className="skip" href="#chapters">Skip to content</a>
      <WobbleDefs />
      <Preloader onDone={onDone} />
      <Nav />
      <div ref={main}>
        <Hero entered={entered} />
        <main>
          <Chapters />
          <History />
          <Marquee />
          <WorkIndex />
        </main>
        <Contact />
      </div>
    </>
  )
}
