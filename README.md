# Human-Robot Coexistence Dataset Website

This repository contains the official GitHub Pages landing page for the **Human-Robot Coexistence Dataset**.

## Project Structure

- `/index.html` — Main dataset website page
- `/assets/styles.css` — Styling for layout, typography, cards, and responsiveness
- `/assets/script.js` — Centralized external links and small interactive behaviors (e.g., BibTeX copy button)

## Update External Links

All external links are defined in one place:

- `/assets/script.js` in the `LINKS` object

Replace the placeholder values:

- `TODO_DATASET_URL`
- `TODO_PUBLICATION_URL`
- `TODO_ZOTERO_URL`
- `TODO_GITHUB_REPOSITORY_URL`

## Local Preview

Because this is a static website, you can open `index.html` directly in a browser.

Or run a simple local server:

```bash
cd /home/runner/work/human-robot-coexistence-dataset/human-robot-coexistence-dataset
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000`

## Deploy with GitHub Pages

1. Push changes to your default branch (or a publishing branch).
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your chosen branch)
   - **Folder**: `/ (root)`
4. Save and wait for deployment.
5. Your site will be available at:
   - `https://MaryamKazemi96.github.io/human-robot-coexistence-dataset/`

## Notes

- The page intentionally uses TODO placeholders for unknown values (statistics, DOI, authors, URLs, license details).
- No backend is required; this site is fully compatible with GitHub Pages static hosting.
