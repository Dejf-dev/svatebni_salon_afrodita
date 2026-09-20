import Carousel from './Carousel.jsx'

/**
 * Renders a gallery data file as a carousel.
 * `items` is an array of { src, alt } produced by
 * scripts/generate-galleries.mjs (see project README).
 */
export default function Gallery({ items, dataFileHint }) {
  if (!items || items.length === 0) {
    return (
      <p className="gallery-empty">
        Galerie zatím neobsahuje žádné obrázky. Spusťte{' '}
        <code>npm run images:galleries</code> podle návodu v README –
        vygeneruje se soubor <code>{dataFileHint}</code> a fotky se stáhnou do{' '}
        <code>public/images</code>.
      </p>
    )
  }

  return <Carousel items={items} />
}
