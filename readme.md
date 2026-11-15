<p align="center">
	<img width="192" height="192" src="https://tufan.ee/images/icon_domain.svg">
</p>

---
# tufan.ee
[**`tufan.ee`**](https://tufan.ee) is my personal hub, hosted on GitHub Pages. It shows my name and three links: my resume, LinkedIn and GitHub.

My resume lives on its own site, [mustafatufan.de](https://mustafatufan.de). Until commit `027b374` this repository was the English resume; that version stays in the git history.

## Tech Stack
- Plain HTML and CSS
- No framework, no JavaScript, no build step
- No external requests: system fonts only

## Structure
| File | Purpose |
|---|---|
| `index.html` | The hub: name, title and the three links |
| `css/style.css` | All styles, colours as CSS variables at the top |
| `404.html` | Shown by GitHub Pages for unknown addresses |
| `images/` | Favicon, social preview photo and the icon shown in this readme |
| `robots.txt`, `sitemap.xml` | For search engines |

## Editing
- Change the links: edit the `<a>` elements inside `<nav class="links">` in `index.html`.
- Change colours: edit the variables in `:root` at the top of `css/style.css`.

## License
[MIT](https://choosealicense.com/licenses/mit/)
