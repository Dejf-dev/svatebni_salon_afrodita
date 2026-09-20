export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        © {year} Svatební salón Afrodita, Benešov u Prahy
      </div>
    </footer>
  )
}
