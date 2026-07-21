# anthonyyasan.github.io

Personal portfolio site for Anthony Yasan — MS Quantitative Finance, Northeastern University.

Hand-coded static site (HTML + one CSS file + ~30 lines of vanilla JS). No framework, no build
step. Deployed via GitHub Pages.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

```
index.html            Home
projects.html         Projects index
about.html            About / background
projects/*.html       Project case studies
css/style.css         Single stylesheet (design tokens, dark mode)
js/main.js            Nav + theme toggle (progressive enhancement)
assets/               Images, resume, exported figures
```

## Deploy

Pushing to `main` deploys automatically (GitHub Pages, Deploy-from-branch → `main` / root).
`.nojekyll` disables Jekyll so files are served as-is.
