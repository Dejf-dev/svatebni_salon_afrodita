import { useState } from 'react'

/**
 * Simple, dependency-free image carousel: one large photo, prev/next
 * arrows, a counter, and a scrollable strip of clickable thumbnails.
 * `items` is an array of { src, alt }.
 */
export default function Carousel({ items }) {
  const [index, setIndex] = useState(0)

  if (!items || items.length === 0) return null

  const go = (delta) => {
    setIndex((i) => (i + delta + items.length) % items.length)
  }

  const current = items[index]

  return (
    <div className="carousel">
      <div className="carousel-main">
        {items.length > 1 && (
          <button
            type="button"
            className="carousel-arrow prev"
            onClick={() => go(-1)}
            aria-label="Předchozí fotka"
          >
            ‹
          </button>
        )}

        <img src={`${import.meta.env.BASE_URL}${current.src}`} alt={current.alt || ''} loading="lazy" />

        {items.length > 1 && (
          <button
            type="button"
            className="carousel-arrow next"
            onClick={() => go(1)}
            aria-label="Další fotka"
          >
            ›
          </button>
        )}

        {items.length > 1 && (
          <span className="carousel-counter">
            {index + 1} / {items.length}
          </span>
        )}
      </div>

      {items.length > 1 && (
        <div className="carousel-thumbs">
          {items.map((item, i) => (
            <button
              key={item.src + i}
              type="button"
              className={`carousel-thumb${i === index ? ' active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Zobrazit fotku ${i + 1}`}
            >
              <img src={`${import.meta.env.BASE_URL}${item.src}`} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
