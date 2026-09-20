import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Gallery from '../components/Gallery.jsx'
import PriceTag from '../components/PriceTag.jsx'
import weddingDresses from '../data/galleryWeddingDresses.json'
import eveningDresses from '../data/galleryEveningDresses.json'
import menSuits from '../data/galleryMenSuits.json'
import rings from '../data/galleryRings.json'

export default function Services() {
  const { hash } = useLocation()

  // React Router doesn't scroll to an in-page anchor on its own when
  // navigating from another route (e.g. Home's "/sluzby#svatebni-saty"
  // links), so do it manually once the page has rendered.
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <section className="section">
      <div className="container">
        <h1 className="align-center">Služby</h1>

        <div className="row" id="svatebni-saty">
          <Gallery items={weddingDresses} dataFileHint="galleryWeddingDresses.json" />
          <div>
            <h2>Svatební šaty</h2>
            <p>
              V naší nabídce 90 svatebních šatů si nevěsty vyberou k zapůjčení i prodeji šaty moderní i tradiční za velmi příznivé ceny. Svatební šaty nabízíme ve velikostech 32 až 64 v široké škále střihů a stylů. Jsme připraveni bezplatně zajistit úpravu Vašeho modelu, aby vždy působil, jako by byl ušitý na míru právě Vám.
            </p>
            <PriceTag value="2 000 – 6 500 Kč" />
          </div>
        </div>

        <div className="row" id="spolecenske-saty">
          <div>
            <h2>Společenské šaty</h2>
            <p>
              Svatební a společenský salón se specializuje především na společenské šaty značky Luxuar. Tato německá firma nabízí šaty rozmanitých barev, střihů a materiálů. Jejich originálním prvkem je ručně barvené hedvábí, kdy je ručně duhově zbarvená látka přechází z jedné barvy do druhé. Šaty jsou vhodné na věnečky, maturitní plesy a další společenské akce. Naše zákaznice se nemusí bát, že na plese potkají ženu v totožných nebo podobných šatech. Jde vždy o originální modely.
            </p>
            <PriceTag value="800 – 2 500 Kč" />
          </div>
          <Gallery items={eveningDresses} dataFileHint="galleryEveningDresses.json" />
        </div>

        <div className="row" id="panske-obleky">
          <Gallery items={menSuits} dataFileHint="galleryMenSuits.json" />
          <div>
            <h2>Pánské obleky</h2>
            <p>
              Naše aktuální kolekce obleků k zapůjčení zahrnuje obleky ve velikostech 44 až 64. I tyto obleky jsme schopny upravit na míru. Kromě klasických střihů na svatby, smokingy apod. K nim také veškeré doplňky (vesty, vázačky a plastrony).
            </p>
            <PriceTag value="800 – 1 500 Kč" />
          </div>
        </div>

        <div className="row" id="snubni-prsteny">
          <div>
            <h2>Snubní prsteny</h2>
            <p>Snubní prsteny jsou další samostatnou kapitolou svatebních příprav. Nabízíme nepřeberné množství snubních prstenů a je jen na Vás, pro který se rozhodnete.</p>
            <p>Nabízíme snubní prsteny vyrobeny na zakázku s prvotřídního zlata o standardní ryzosti 14 karátů (585/000). Levnější variantou jsou prsteny vyráběné ze stříbra v ryzosti 925/1000. Nevěstin prsten může být osázen zirkony nebo brilianty.</p>
            <p>Vše se ručně vyrábí v české rodinné firmě už více než 30 let.</p>
            <PriceTag label="Sleva pro naše nevěsty" value="1 000 Kč za pár" />
          </div>
          <Gallery items={rings} dataFileHint="galleryRings.json" />
        </div>
      </div>
    </section>
  )
}
