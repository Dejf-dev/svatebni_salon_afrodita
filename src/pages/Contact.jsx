export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="align-center">Kontakt</h1>

        <div className="row">
          <div>
            <h2>Jak se k nám dostanete</h2>
            <p>
              Prosíme o telefonickou rezervaci termínu zkoušky šatů, abychom
              předešli dlouhým čekacím dobám.
            </p>
          </div>
          <div className="map-frame">
            <iframe
              title="Mapa – Svatební salon Afrodita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1821.5791844596138!2d14.678955063286107!3d49.784146989675705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c7f9f980d82df%3A0xc67dc7d93c7ce250!2sAfrodita%20-%20Svatebn%C3%AD%20Salon!5e0!3m2!1scs!2scz!4v1628761514438!5m2!1scs!2scz"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="row">
          <dl className="contact-details">
            <dt>Otevírací doba</dt>
            <dd>Po–Pá: 12:00 – 17:00</dd>
            <dd>So: 9:00 – 12:00</dd>

            <dt>Adresa</dt>
            <dd>Purkyňova 947, Benešov 256 01</dd>

            <dt>Telefon</dt>
            <dd>
              <a href="tel:+420733682484">+420 733 682 484</a>
            </dd>
          </dl>
          <div>
            <h2>Facebook</h2>
            <p>
              Sledujte novinky a aktuální modely na naší facebookové stránce.
            </p>
            <a
              href="https://www.facebook.com/SvatebnisalonAfrodita"
              target="_blank"
              rel="noreferrer"
              className="facebook-link"
            >
              <img src={`${import.meta.env.BASE_URL}images/facebook-color-svgrepo-com.svg`} alt="Facebook icon" width={18} height={18} />
              Svatební salon Afrodita Benešov
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
