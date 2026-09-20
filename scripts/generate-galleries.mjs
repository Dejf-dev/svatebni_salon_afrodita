// Extracts the four big product galleries (wedding dresses, evening
// dresses, men's suits, rings) straight out of your ORIGINAL Webnode
// export and rebuilds them as local files + JSON, so the site no longer
// loads a single image from *.cbaul-cdnwnd.com or *.cloudfront.net.
//
// Usage (run locally, where you still have your original export folder
// and normal internet access):
//
//   node scripts/generate-galleries.mjs /path/to/svatebni-salon-afrodita-benesov-u-prahy.webnode.cz
//
// If you omit the path it defaults to "../webnode-export" next to this
// project. The script reads sluzby/index.html from that folder, downloads
// every photo into public/images/gallery/<category>/ and writes
// src/data/gallery*.json with the local paths.

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, '..')

const sourceRoot = process.argv[2] || path.join(projectRoot, '..', 'webnode-export')
const sluzbyHtmlPath = path.join(sourceRoot, 'sluzby', 'index.html')

// Maps each Webnode PhotoGalleryBlock id (found in the exported HTML) to
// where it should end up in the React project.
const GALLERY_MAP = {
  wnd_PhotoGalleryBlock_86488: { slug: 'svatebni-saty', dataFile: 'galleryWeddingDresses.json' },
  wnd_PhotoGalleryBlock_28283: { slug: 'spolecenske-saty', dataFile: 'galleryEveningDresses.json' },
  wnd_PhotoGalleryBlock_38322: { slug: 'panske-obleky', dataFile: 'galleryMenSuits.json' },
  wnd_PhotoGalleryBlock_33883: { slug: 'snubni-prsteny', dataFile: 'galleryRings.json' },
}

function decodeEntities(str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function extractGalleryBlocks(html) {
  const blocks = []
  const re = /id="(wnd_PhotoGalleryBlock_\d+)"[^>]*data-content="([^"]*)"/g
  let m
  while ((m = re.exec(html))) {
    blocks.push({ id: m[1], raw: m[2] })
  }
  return blocks
}

function filenameFromUrl(url) {
  const clean = url.split('?')[0]
  return decodeURIComponent(path.basename(clean)).replace(/[^\w.\-]/g, '_')
}

async function download(url, dest) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  const buf = Buffer.from(await res.arrayBuffer())
  await writeFile(dest, buf)
}

async function main() {
  let html
  try {
    html = await readFile(sluzbyHtmlPath, 'utf8')
  } catch {
    console.error(`Nenalezen soubor: ${sluzbyHtmlPath}`)
    console.error('Zadejte cestu ke složce s původním exportem z Webnode, např.:')
    console.error('  node scripts/generate-galleries.mjs ~/webovky/svatebni-salon-afrodita-benesov-u-prahy.webnode.cz')
    process.exit(1)
  }

  const blocks = extractGalleryBlocks(html)
  if (blocks.length === 0) {
    console.error('V HTML nebyla nalezena žádná galerie (wnd_PhotoGalleryBlock_*).')
    process.exit(1)
  }

  for (const block of blocks) {
    const target = GALLERY_MAP[block.id]
    if (!target) {
      console.warn(`Neznámá galerie ${block.id}, přeskakuji.`)
      continue
    }

    let data
    try {
      data = JSON.parse(decodeEntities(block.raw))
    } catch (err) {
      console.error(`Nepodařilo se rozparsovat galerii ${block.id}: ${err.message}`)
      continue
    }

    const items = data.items || []
    const outFolder = path.join(projectRoot, 'public', 'images', 'gallery', target.slug)
    await mkdir(outFolder, { recursive: true })

    const entries = []
    console.log(`\n${target.slug}: ${items.length} fotek`)

    for (const item of items) {
      const url = item?.img?.src
      if (!url) continue
      const filename = filenameFromUrl(url)
      const dest = path.join(outFolder, filename)
      try {
        await download(url, dest)
        entries.push({
          src: `/images/gallery/${target.slug}/${filename}`,
          alt: item.alt || item.title || '',
        })
        process.stdout.write('.')
      } catch (err) {
        process.stdout.write('x')
        console.error(`\n  chyba u ${url}: ${err.message}`)
      }
    }

    const dataFilePath = path.join(projectRoot, 'src', 'data', target.dataFile)
    await writeFile(dataFilePath, JSON.stringify(entries, null, 2) + '\n')
    console.log(`\n→ uloženo ${entries.length} položek do src/data/${target.dataFile}`)
  }

  console.log('\nHotovo. Galerie teď běží čistě z /public/images/gallery.')
}

main()
