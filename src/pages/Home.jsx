import { Link } from 'react-router-dom'
import ArchImage from '../components/ArchImage.jsx'

const categories = [
  { title: 'Svatební šaty', img: `${import.meta.env.BASE_URL}images/category-wedding-dress.jpg`, slug: 'svatebni-saty' },
  { title: 'Společenské šaty', img: `${import.meta.env.BASE_URL}images/category-evening-dress.jpg`, slug: 'spolecenske-saty' },
  { title: 'Pánské obleky', img: `${import.meta.env.BASE_URL}images/category-suit.jpg`, slug: 'panske-obleky' },
  { title: 'Snubní prsteny', img: `${import.meta.env.BASE_URL}images/category-rings.jpg`, slug: 'snubni-prsteny' },
]

export default function Home() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/hero-couple.jpg')` }}
      >
        <div className="hero-text">
          <h3>Svatební salón</h3>
          <h1>Afrodita</h1>
          <h3>Benešov u Prahy</h3>
        </div>
      </section>

      <section className="section align-center">
        <div className="container">
          <h2>Vítejte</h2>
          <p>
            V našem salónu naleznete kolekci svatebních a společenských
            šatů, kterou neustále doplňujeme o nové modely. V široké
            nabídce k zapůjčení si nevěsty vyberou svatební šaty jak
            moderních, tak i tradičních modelů. Naleznete u nás i šaty
            nadměrných velikostí, které si budete moci vybírat, nikoliv
            jen hledat ve vaší velikosti. Jakmile zvolíte své svatební
            šaty, můžete na jednom místě pokračovat s výběrem snubních
            prstenů, svatebních oznámení, doplňků, obuvi a všeho dalšího
            nezbytného pro vaši dokonalou svatbu.
          </p>
        </div>
      </section>

      <section className="section align-center">
        <div className="container">
          <h2>Služby</h2>
          <div className="category-grid">
            {categories.map((c) => (
              <Link
                key={c.title}
                to={`/sluzby#${c.slug}`}
                className="category-item"
              >
                <ArchImage src={c.img} alt={c.title} />
                <span>{c.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
