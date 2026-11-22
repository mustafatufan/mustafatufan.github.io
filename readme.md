<p align="center">
	<img width="340" height="220" src="images/plate-tufan-ee.svg" alt="tufan.ee in white on navy">
</p>

---
# tufan.ee
[**`tufan.ee`**](https://tufan.ee) is my personal hub, hosted on GitHub Pages. Under a line at the top that calls the page a memorial for the domain, it shows my name and role, three links (my resume, LinkedIn and GitHub) a short note with my new resume address and a postcard from Tallinn, all centred on the page.

My resume lives on its own site, [mustafatufan.de](https://mustafatufan.de). Until commit `027b374` this repository was the English resume; that version stays in the git history.

## Brand
The site follows the Mustafa Tufan Brand Kit, which is read off the printed card: its colours, one typeface in two weights (Poppins Regular and Medium) and the short bar under the name. The home page departs from the kit in two points. It is centred, with the bar centred under the name, where the kit aligns left on the margin. And it carries a postcard: a second photograph with a message in a handwriting typeface (Caveat), drawn as a used card with gloss, shadows and a paper tint, where the kit knows one photograph and one typeface and rules out shadows, gradients and tints. The kit is kept outside this repository.

## Tech Stack
- Plain HTML and CSS
- No framework, no JavaScript, no build step
- No external requests: the fonts are served from `fonts/`

## Structure
| File | Purpose |
|---|---|
| `index.html` | The hub: the line at the top, name block, the three links, the note and the postcard |
| `404.html` | Shown by GitHub Pages for unknown addresses |
| `css/style.css` | The brand's tokens as CSS variables at the top, then the brand styles the two pages use, then the postcard |
| `fonts/` | Poppins Regular and Medium 4.004 as woff2, Latin and Latin Extended. Caveat Regular 2.000 as woff2, Basic Latin and Latin-1, for the back of the postcard |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-*.png`, `site.webmanifest` | Site icons: the first letter of the name with the bar centred under it, white on navy |
| `og-tufan-ee.png` | Link preview image |
| `images/me.jpeg` | Portrait, named in the structured data |
| `images/tallinn.jpeg` | The front of the postcard: my photograph of the view from my apartment in Tallinn, with a postcard colour grade, 1080 by 810 pixels, sRGB, without camera data |
| `images/plate-tufan-ee.svg` | The image at the top of this readme |
| `robots.txt`, `sitemap.xml` | For search engines |

## Editing
- Change the line at the top: edit the `<p>` inside `<header class="mt-band mt-memorial">` in `index.html`. The band is the back of the card: navy, with white type.
- Change the links: edit the `<a>` elements inside `<ul class="mt-links">` in `index.html`. Each link is its name, then its address in a `<span>`.
- Change the note: edit the `<p class="mt-copy">` element below the links in `index.html`.
- Change the postcard: see [Postcard](#postcard) below.
- After changing the page: set `dateModified` in the structured data in `index.html` to the date and time of the change, with the time zone, as in `2026-11-22T05:15:00+03:00` (Google's test rejects a date alone), and `<lastmod>` in `sitemap.xml` to the date. Keep the meta description, the Open Graph description and the structured data in line with what the page shows.
- Change colours, type or spacing: change them in the brand kit first, then copy its token block to the top of `css/style.css`.

## Postcard
The `<figure class="mt-postcard">` in `index.html` is a scale model of an A6 postcard (148 by 105 mm) that has been through the post. Its styles are the "Postcard" section of `css/style.css`, in the order of the card.

- **Turning:** a hidden checkbox (`mt-postcard-toggle`) turns the card, with CSS only. A tap, a click or the space key turns it over, and the same again turns it back. Under a mouse it also turns while the pointer is over it.
- **Front:** `images/tallinn.jpeg`. The colour grade is in the file itself: shadows lifted, warm lights, slightly cool shadows, dull colours strengthened. The card cuts the photograph to its own shape.
- **Message:** the `<p>` elements in `mt-postcard-message`; the last is the signature. They are set in Caveat, which holds Basic Latin and Latin-1 only, so a letter outside them falls back to another font.
- **Stamp:** the inline `<svg class="mt-postcard-stamp">`, drawn to scale at 2 units to the millimetre: the stamp 31.80 by 30.13 mm, the postmark 28 mm. The place, the postcode and the date of the postmark are its last three `<text>` elements. It is inline so that its lettering uses the site's font.
- **Address:** the three `<span>` lines in `<p class="mt-postcard-address">`: street and house, postcode and town, country (shown in capitals).
- **Caption:** the `<figcaption>`.
- **Sizes:** everything on the back is in `cqw`, hundredths of the card's width, so the back is the same picture at every screen width. Each `cqw` value follows a `rem` value for older browsers.
- **Light and wear:** the tilt, the gloss, the scratches, the bent corner, the shadows and the paper grain are gradients in the stylesheet. Their colours are the four variables at the top of the section.

## License
[MIT](https://choosealicense.com/licenses/mit/). Poppins and Caveat are licensed under the [SIL Open Font License 1.1](https://openfontlicense.org).
