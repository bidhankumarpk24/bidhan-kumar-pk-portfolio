# Bidhan Kumar PK — Portfolio Website

This is a Vite + React + TypeScript portfolio website for **Bidhan Kumar PK**, built from the information verified in the supplied CV. The visual direction is a warm editorial layout with ink typography, cobalt accents, generous spacing, and restrained motion for a professional job-application presence.

## Verified content scope

The public LinkedIn URL was reviewed, but LinkedIn redirected to its public sign-up/auth wall rather than exposing profile details. Therefore, the website uses the CV as its only source of factual profile content. It includes the name, Computer Operator role, location, contact details, career objective, education, fresher experience statement, computer skills, professional skills, languages, and two professional trainings shown in the CV.

Projects, certifications, courses beyond the listed professional trainings, and achievements are intentionally not displayed because they were not provided in the CV and could not be verified from the public LinkedIn page.

## Run locally

```bash
pnpm install
pnpm dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Build for production

```bash
pnpm install
pnpm build
```

The production files are generated in `dist/`.

## Publish free online

### Option 1: Netlify Drop (fastest)

1. Run `pnpm install` and `pnpm build` locally.
2. Go to [Netlify Drop](https://app.netlify.com/drop).
3. Drag the generated `dist` folder into the page.
4. Netlify will provide a free public URL. You can optionally change the site name in **Site settings → Domain management**.

### Option 2: Vercel

1. Create a GitHub repository and upload this folder.
2. Sign in at [Vercel](https://vercel.com) and import the repository.
3. Use these build settings:
   - **Framework preset:** Vite
   - **Build command:** `pnpm build`
   - **Output directory:** `dist`
4. Deploy. Vercel provides a free public URL and automatic redeploys when the repository changes.

### Option 3: GitHub Pages

1. Upload the project to GitHub.
2. Enable GitHub Actions or use a Pages deployment workflow that runs `pnpm install` and `pnpm build`.
3. Publish the `dist` directory as the Pages artifact.
4. If the repository is not at the root domain, configure the Vite `base` to match the repository name before building.

## Functional links

- The navigation menu scrolls to each section.
- The LinkedIn buttons open `https://linkedin.com/in/bidhanpk` in a new tab.
- The Download CV button downloads the supplied CV PDF.
- Email and phone links use `mailto:` and `tel:`.
- Mobile navigation collapses into a menu button.

## Updating the content

The main content is in `client/src/pages/Home.tsx`. Global styling and responsive breakpoints are in `client/src/index.css`. The standalone package uses local files in `client/public/assets/` so it can be deployed independently from the managed WebDev preview.
