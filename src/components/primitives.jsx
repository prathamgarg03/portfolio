/* Small building blocks shared across sections. */

/** Display heading broken into stacked lines that step to the right, each revealed from a mask. */
export function Stacked({ lines, as: Tag = 'h3', className = '', step = true }) {
  return (
    <Tag className={`stacked ${className}`} data-reveal aria-label={lines.join(' ')}>
      {lines.map((l, i) => (
        <span
          className="line"
          key={i}
          aria-hidden="true"
          style={step ? { '--i': i } : undefined}
        >
          <span className="line-in">{l}</span>
        </span>
      ))}
    </Tag>
  )
}

/** SVG filter defs used by every hand-drawn border. Render once. */
export function WobbleDefs() {
  return (
    <svg id="wobble-defs" width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
      {[0, 1, 2].map((i) => (
        <filter id={`wobble-${i}`} key={i} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed={i * 7 + 1} />
          <feDisplacementMap in="SourceGraphic" scale="7" />
        </filter>
      ))}
    </svg>
  )
}

/** An image inside a jittering, hand-drawn outline. */
export function Frame({ src, alt, ratio = 'land', fit = 'cover', tone = 'ink', tilt = 0, wobble = 0, parallax = 6, className = '' }) {
  return (
    <figure className={`frame frame--${ratio} frame--${tone} ${className}`} style={{ '--tilt': `${tilt}deg` }}>
      <div className="frame-clip" data-frame>
        <img src={src} alt={alt} loading="lazy" decoding="async" style={{ objectFit: fit }} data-parallax={fit === 'cover' ? parallax : undefined} />
      </div>
      <svg className="frame-line" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 100 100">
        <rect x="1.5" y="1.5" width="97" height="97" vectorEffect="non-scaling-stroke" style={{ filter: `url(#wobble-${wobble % 3})` }} />
      </svg>
    </figure>
  )
}

/** Link with a hand-drawn loop that draws itself around the text on hover and focus. */
export function Sketch({ href, children, className = '', external, ...rest }) {
  const ext = external ?? /^https?:|^mailto:/.test(href)
  return (
    <a
      href={href}
      className={`sketch ${className}`}
      {...(ext && !href.startsWith('mailto:') ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...rest}
    >
      <span className="sketch-text">{children}</span>
      <svg className="sketch-loop" viewBox="0 0 120 50" preserveAspectRatio="none" aria-hidden="true">
        <path
          pathLength="1"
          d="M14 30 C 10 12, 52 4, 86 8 C 116 12, 120 34, 92 42 C 62 50, 18 46, 8 34 C 2 24, 30 12, 62 10"
        />
      </svg>
    </a>
  )
}
