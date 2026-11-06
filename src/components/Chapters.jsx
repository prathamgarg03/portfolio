import { chapters, intro } from '../data/content'
import { scrollToTarget } from '../motion/engine'

export default function Chapters() {
  return (
    <section className="chapters" id="chapters" aria-labelledby="chapters-title">
      <h2 id="chapters-title" className="sr-only">Chapters</h2>
      <ol className="chapter-list">
        {chapters.map((c) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              className="chapter-row"
              onClick={(e) => {
                e.preventDefault()
                scrollToTarget(`#${c.id}`)
              }}
            >
              <span className="chapter-n">{c.n}</span>
              <span className="chapter-name" data-reveal>
                <span className="line"><span className="line-in">{c.name}</span></span>
              </span>
              <span className="chapter-meta">
                <span className="chapter-span">{c.span}</span>
                <span className="accent">{c.place}</span>
              </span>
            </a>
          </li>
        ))}
      </ol>
      <p className="intro" data-split="words">
        {intro}
      </p>
    </section>
  )
}
