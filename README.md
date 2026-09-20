# Svatební salón Afrodita — React + Vite

1:1 kopie původního webu (stejné stránky, stejné pořadí bloků, stejný
text) přepsaná do Reactu a bez jakékoli závislosti na Webnode: žádné
`wnd.*` skripty, žádný „Vytvořeno službou Webnode“ proužek, žádné volání
na `webnode.com` / `*.cbaul-cdnwnd.com` / `*.cloudfront.net` ve výsledné
stránce.

## Co je hotové

- 4 stránky ve stejné struktuře jako originál: **Úvod** (celoplošná
  úvodní fotka s nápisem přes ni → uvítací text → dlaždice 4 kategorií),
  **Služby** (4 řady galerie+text ve stejném pořadí jako na originále),
  **O nás** (foto vlevo, text + citát vpravo), **Kontakt** (mapa + otvírací
  doba/adresa/telefon + odkaz na Facebook)
- Veškerý text z originálu přepsaný 1:1 do JSX komponent
- Jednoduchý, neutrální styl blízký originálu (žádný nový „redesign“)
- Mapa v Kontaktu je čisté vložení z Google Maps (to není závislost na
  Webnode, jde o embed přímo od Google); Facebook je teď obyčejný odkaz
  místo vloženého FB widgetu (ten by si tahal skripty z Facebooku, ne z
  Webnode, ale pořád je to externí závislost navíc)

## Důležité: stažení obrázků

**Nemohl jsem obrázky stáhnout za vás uvnitř tohoto prostředí** — sandbox,
ve kterém pracuji, má omezenou síť a nemá přístup na `cbaul-cdnwnd.com`
ani `cloudfront.net`, kde jsou vaše fotky uložené. Proto jsem připravil
dva skripty, které to udělají za vás, jakmile si projekt spustíte na
svém počítači (tam běžný internet funguje bez omezení):

### 1) Základní obrázky (logo, úvodní foto, ikony kategorií, foto „O nás“)

```bash
npm install
npm run images:core
```

Stáhne asi 12 souborů přímo z původních URL do `public/images`.

### 2) Velké fotogalerie šatů, obleků a prstenů

Tohle je desítky až stovky fotek na kategorii — nedávalo smysl je sem
přepisovat ručně. Skript proto čte přímo váš **původní** stažený export
z Webnode (ten, který už máte na disku v `~/webovky/...`) a fotky si z
něj sám dohledá a stáhne:

```bash
node scripts/generate-galleries.mjs ~/webovky/svatebni-salon-afrodita-benesov-u-prahy.webnode.cz
```

Skript:

1. přečte `sluzby/index.html` z vašeho původního exportu,
2. najde v něm 4 fotogalerie (svatební šaty, společenské šaty, obleky, prsteny),
3. stáhne všechny fotky do `public/images/gallery/<kategorie>/`,
4. vygeneruje `src/data/galleryWeddingDresses.json` (a další 3 soubory)
   s cestami k lokálním souborům.

Dokud tento krok nespustíte, stránka Služby zobrazí jen informační
hlášku místo prázdné galerie — nic se nerozbije.

Jakmile obě skripty jednou proběhnou, `scripts/` složku klidně smažte —
projekt už žádnou externí URL nepotřebuje.

## Spuštění vývojového serveru

```bash
npm install
npm run dev
```

## Produkční build

```bash
npm run build
npm run preview
```

Výstup je ve složce `dist/` — statické soubory, které nahrajete na
jakýkoli hosting (žádný Webnode účet není potřeba).

## Struktura

```
src/
  components/   Header, Footer, ArchImage, Gallery
  pages/        Home, Services, About, Contact
  data/         JSON soubory s fotogaleriemi (viz výše)
  index.css     veškeré styly
scripts/        jednorázové download skripty (viz výše)
public/images/  všechna statická obrazová data webu
```
