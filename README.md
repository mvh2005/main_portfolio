# Mara Vignesh Portfolio

Plain HTML/CSS/JS portfolio. No React, no npm, and no build step.

## File Structure

```text
portfolio/
|-- index.html
|-- style.css
|-- script.js
`-- sections/
    |-- header/
    |   `-- header.js
    |-- home/
    |   `-- home.js
    |-- skills/
    |   `-- skills.js
    |-- projects/
    |   `-- projects.js
    |-- milestones/
    |   `-- milestones.js
    |-- contact/
    |   `-- contact.js
    |-- footer/
    |   `-- footer.js
    `-- resume-modal/
        |-- resume-modal.js
        `-- resume_vignesh.pdf
```

## Where To Upload The Resume PDF

Upload or copy your resume PDF here:

```text
sections/resume-modal/resume_vignesh.pdf
```

Use that exact filename unless you also update the resume links in:

```text
sections/home/home.js
sections/resume-modal/resume-modal.js
```

## How To Run

Double-click `index.html` in your file manager to open it in a browser.

## How To Deploy

### Netlify

1. Go to https://netlify.com
2. Drag and drop this portfolio folder onto the deploy zone.
3. Netlify gives you a live URL.

### GitHub Pages

1. Push this folder to a GitHub repo.
2. Go to Settings > Pages.
3. Set Branch to `main` and folder to `/root`.

### Vercel

1. Go to https://vercel.com
2. Import your GitHub repo or drag this folder into Vercel.
