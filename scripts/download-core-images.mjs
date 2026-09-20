// Downloads the "core" site images (logo, hero, category thumbnails, about
// photo, favicon) from the original Webnode CDN links and saves them into
// public/images with the filenames the React components expect.
//
// Run once, locally, where you have normal internet access:
//   npm run images:core
//
// After this runs successfully you can delete this script and never touch
// the *.cbaul-cdnwnd.com / *.cloudfront.net domains again.

import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'images')

const files = [
  ['favicon.ico', 'https://duyn491kcolsw.cloudfront.net/files/2s/2sd/2sd9d9.ico?ph=9f26fa6ca7'],
  ['logo.png', 'https://9f26fa6ca7.cbaul-cdnwnd.com/6d7e446be6721226c5b0bc88bed6e20f/200000008-b1b9fb1ba1/logo.png?ph=9f26fa6ca7'],
  ['hero-couple.jpg', 'https://9f26fa6ca7.cbaul-cdnwnd.com/6d7e446be6721226c5b0bc88bed6e20f/200000004-0b5040b505/beautiful-couple-having-their-wedding-beach_23-2149043941.jpeg?ph=9f26fa6ca7'],
  ['category-wedding-dress.jpg', 'https://9f26fa6ca7.cbaul-cdnwnd.com/6d7e446be6721226c5b0bc88bed6e20f/200000022-37df837df9/3074090.png?ph=9f26fa6ca7'],
  ['category-evening-dress.jpg', 'https://9f26fa6ca7.cbaul-cdnwnd.com/6d7e446be6721226c5b0bc88bed6e20f/200000020-b8af8b8af9/6439419.png?ph=9f26fa6ca7'],
  ['category-suit.jpg', 'https://9f26fa6ca7.cbaul-cdnwnd.com/6d7e446be6721226c5b0bc88bed6e20f/200000018-a414fa4150/3074234.png?ph=9f26fa6ca7'],
  ['category-rings.jpg', 'https://9f26fa6ca7.cbaul-cdnwnd.com/6d7e446be6721226c5b0bc88bed6e20f/200000016-b6b47b6b48/531864.png?ph=9f26fa6ca7'],
  ['about-portrait.jpg', 'https://9f26fa6ca7.cbaul-cdnwnd.com/6d7e446be6721226c5b0bc88bed6e20f/200000012-9cf979cf98/EA2_2316.jpg?ph=9f26fa6ca7'],
]

async function download(name, url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} – ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  await writeFile(path.join(outDir, name), buf)
  console.log('✔', name)
}

async function main() {
  await mkdir(outDir, { recursive: true })
  for (const [name, url] of files) {
    try {
      await download(name, url)
    } catch (err) {
      console.error('✘', name, '-', err.message)
    }
  }
  console.log('\nDone. Check public/images – replace any failed downloads manually if needed.')
}

main()
