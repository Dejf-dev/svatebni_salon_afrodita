// Simple image wrapper (kept as its own component so callers don't need
// to change if styling is revisited later).
export default function ArchImage({ src, alt = '', className = '' }) {
  return <img className={className} src={src} alt={alt} loading="lazy" />
}
