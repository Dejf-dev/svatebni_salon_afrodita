/**
 * Small price callout used under each service's description
 * (e.g. "Cena za půjčení: 2 000 – 6 500 Kč").
 */
export default function PriceTag({ label = 'Cena za půjčení', value }) {
  return (
    <p className="price-tag">
      {label}: <strong>{value}</strong>
    </p>
  )
}
