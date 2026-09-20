import ArchImage from '../components/ArchImage.jsx'

export default function About() {
  const foundedYear = 1994
  const ageDiff = new Date().getFullYear() - foundedYear

  return (
    <section className="section">
      <div className="container">
        <h1 className="align-center">O nás</h1>

        <div className="row">
          <ArchImage src={`${import.meta.env.BASE_URL}/images/about-portrait.jpg`} alt="Svatební salón Afrodita" />
          <div>
            <p>
              Svatební salon a půjčovna šatů Afrodita vznikla v roce {foundedYear} a
              působí tedy již po dobu více jak {ageDiff} let. V našem salónu
              naleznete kolekci svatebních a společenských šatů, kterou
              neustále doplňujeme o nové modely. V široké nabídce k
              zapůjčení si nevěsty vyberou svatební šaty jak moderních, tak
              i tradičních modelů.
            </p>
            <p>
              Naleznete u nás i šaty nadměrných velikostí, které si budete
              moci vybírat, nikoliv jen hledat ve vaší velikosti. Jakmile
              zvolíte své svatební šaty, můžete na jednom místě pokračovat
              s výběrem snubních prstenů, svatebních oznámení, doplňků,
              obuvi a všeho dalšího nezbytného pro vaši dokonalou svatbu.
            </p>
            <p>
              Svatební salon Afrodita je salonem s dlouholetou tradicí,
              který nabízí nevěstám kompletní svatební servis, včetně
              koordinátora služeb. Naším cílem je spokojená zákaznice a
              krásná nevěsta.
            </p>
            <p>
              V prostorném prostředí svatebního salonu o rozloze 60 m²
              v příjemném interiéru si můžete pohodlně a v klidu vybrat
              z naší široké nabídky oblečení a doplňků pro svatbu a
              společenskou událost. Nabízíme dlouholetou praxi a zkušenost
              v oboru, profesionalitu a spolehlivost. Naší samozřejmostí je
              zajistit vám kvalitní svatební servis.
            </p>
            <p>Přípravy na váš jedinečný den mohou být díky nám pohodové a radostné.</p>

            <blockquote className="quote-block">
              Svatba dělá ze dvou životů jeden celý.
              <br />— Mark Twain
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
