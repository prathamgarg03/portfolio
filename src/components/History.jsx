import { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from '../motion/engine'
import { chapters, workById } from '../data/content'
import { Frame, Sketch, Stacked } from './primitives'

/** Year that rolls digit by digit, like an odometer. */
function Odometer({ value }) {
  const digits = String(value).split('')
  return (
    <span className="odo" aria-live="polite" aria-label={String(value)}>
      {digits.map((d, i) => (
        <span className="odo-col" key={i} aria-hidden="true">
          <span className="odo-reel" style={{ '--d': d }}>
            {'0123456789'.split('').map((n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        </span>
      ))}
    </span>
  )
}

function Stat({ stat, tilt }) {
  return (
    <aside className="sticker" data-pop style={{ '--tilt': `${tilt}deg` }}>
      <p className="sticker-value">{stat.value}</p>
      <p className="sticker-unit accent">{stat.unit}</p>
      <p className="sticker-label">{stat.label}</p>
    </aside>
  )
}

function WorkCluster({ ids }) {
  return (
    <ul className="cluster">
      {ids.map((id, i) => {
        const w = workById[id]
        return (
          <li key={id} className={`cluster-item ${w.image ? '' : 'cluster-item--type'}`}>
            {w.image ? (
              <Frame src={w.image} alt={`Illustration for ${w.name}`} ratio="land" wobble={i} tilt={i % 2 ? 1.5 : -1.5} parallax={4} />
            ) : (
              <div className="cluster-type" aria-hidden="true">{w.name}</div>
            )}
            <p className="cluster-name">
              <Sketch href={w.code}>{w.name}</Sketch>
            </p>
            <p className="cluster-stack">{w.stack}</p>
          </li>
        )
      })}
    </ul>
  )
}

function Entry({ entry, index, chapterIndex }) {
  const flip = (index + chapterIndex) % 2 === 1
  return (
    <article className={`entry ${flip ? 'entry--flip' : ''}`} data-year={entry.year}>
      <p className="entry-year">{entry.year}</p>
      <Stacked lines={entry.heading} className="entry-title" />
      <div className="entry-body">
        <p data-split="lines">{entry.body}</p>
        {entry.links && (
          <p className="entry-links">
            {entry.links.live && <Sketch href={entry.links.live}>Open the live site</Sketch>}
            {entry.links.code && <Sketch href={entry.links.code}>Read the code</Sketch>}
          </p>
        )}
      </div>
      {entry.images && (
        <div className={`entry-media entry-media--${entry.images.length}`}>
          {entry.images.map((img, i) => (
            <Frame
              key={i}
              {...img}
              tone={img.shot ? 'red' : 'ink'}
              tilt={img.shot ? (i % 2 ? 2 : -2) : 0}
              wobble={index + i}
              className={img.shot ? 'frame--shot' : ''}
            />
          ))}
        </div>
      )}
      {entry.stat && <Stat stat={entry.stat} tilt={flip ? 4 : -5} />}
      {entry.work && <WorkCluster ids={entry.work} />}
    </article>
  )
}

function Chapter({ chapter, ci }) {
  const [year, setYear] = useState(chapter.entries[0].year)
  const body = useRef(null)

  useEffect(() => {
    const triggers = [...body.current.querySelectorAll('.entry')].map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: 'top 55%',
        end: 'bottom 55%',
        onToggle: (self) => self.isActive && setYear(Number(el.dataset.year)),
      }),
    )
    return () => triggers.forEach((t) => t.kill())
  }, [])

  return (
    <section className="chapter" id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
      <div className="divider">
        <p className="divider-n">Chapter {chapter.n}</p>
        <h2 id={`${chapter.id}-title`} className="divider-title" data-reveal>
          <span className="line"><span className="line-in">{chapter.name}</span></span>
        </h2>
        <p className="divider-meta">
          <span>{chapter.span}</span>
          <span className="accent">{chapter.place}</span>
        </p>
      </div>
      <div className="chapter-grid">
        <div className="chapter-rail" aria-hidden="true">
          <div className="rail-sticky">
            <p className="rail-label">{chapter.name}</p>
            <Odometer value={year} />
          </div>
        </div>
        <div className="chapter-body" ref={body}>
          {chapter.entries.map((e, i) => (
            <Entry entry={e} index={i} chapterIndex={ci} key={e.year + e.heading.join()} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function History() {
  return (
    <div className="history" id="history">
      <h2 className="history-title" aria-label="The story so far">
        <Stacked lines={['The story', 'so far']} as="span" />
      </h2>
      {chapters.map((c, i) => (
        <Chapter chapter={c} ci={i} key={c.id} />
      ))}
    </div>
  )
}
