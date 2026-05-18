# Jasper Marc Chan — Portfolio

A modern, single-page portfolio built with vanilla HTML, CSS, and JavaScript. Designed for static hosting on GitHub Pages.

## File Structure

```
portfolio/
├── index.html       # All content & markup
├── styles.css       # Dark editorial styles (navy + cyan accent)
├── script.js        # Nav, mobile menu, reveal animations
├── .nojekyll        # Tells GitHub Pages to skip Jekyll processing
└── assets/          # Add your project images here
    └── (your images)
```

## Local Preview

Open `index.html` directly in your browser, or run a tiny local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. **Create a new GitHub repo** (e.g. `jaspermarc911.github.io` for a user site, or any name for a project site).
2. **Push these files** to the repo root.
3. **Enable Pages** — Settings → Pages → Source: `Deploy from a branch` → Branch: `main` (root).
4. Your site will be live at:
   - User site: `https://<your-username>.github.io/`
   - Project site: `https://<your-username>.github.io/<repo-name>/`

## Adding Project Images

Each project card currently shows a placeholder graphic. To add real images:

1. Save your screenshots to `assets/` (e.g. `assets/project-ilovefdl.jpg`).
2. In `index.html`, find each `<div class="project__media">` block.
3. Replace the placeholder `<div class="project__placeholder">...</div>` with:

```html
<img src="assets/project-ilovefdl.jpg" alt="I Love FDL homepage" />
```

Recommended image size: **1600×1000 px** (16:10 aspect ratio), JPG or WebP, under 300 KB.

## Customization

- **Colors** — edit CSS variables at the top of `styles.css` (`--accent`, `--bg`, etc.)
- **Fonts** — currently using Fraunces (display), Manrope (body), JetBrains Mono (code). Swap the Google Fonts link in `index.html`.
- **Content** — all copy lives in `index.html`. No build step.

## Built With

Vanilla HTML, CSS, JavaScript. No frameworks, no build step, no dependencies. Just open and edit.
