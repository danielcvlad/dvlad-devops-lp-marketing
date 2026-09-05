# danielvlad.com

Resume and services landing page for a freelance DevSecOps engineer and cloud
solutions architect. It doubles as a CV and a pitch: work history, certifications,
projects and technical stack, alongside the services offered and a contact form
for booking an infrastructure review.

Live at **[danielvlad.com](https://danielvlad.com)**.

## Stack

| | |
|---|---|
| **[Astro 5](https://astro.build)** | Static site generator. Ships zero JavaScript by default — the whole site is prerendered HTML. |
| **[Tailwind CSS 3](https://tailwindcss.com)** | Utility classes for layout, with a small custom layer in `src/styles/global.css` for buttons, cards and the light/dark theme tokens. |
| **TypeScript** | Used for the content data file and its types. |
| **Vanilla JS** | Three small inline scripts: theme toggle, mobile menu, contact form submission. No framework. |
| **[Web3Forms](https://web3forms.com) + hCaptcha** | Contact form delivery and spam protection. No backend to run. |
| **GitHub Actions → GitHub Pages** | Build and deploy on push to `main`. |

## Content lives in one file

Every piece of resume content — experience, skills, projects, certifications,
education, languages, social links, the resume PDF path — is in
[`src/data/resume.ts`](src/data/resume.ts). Components read from it; none of them
hardcode content. To update the site, edit that file.

The downloadable resume is `public/dv-resume.pdf`, referenced via
`resumeData.resumeUrl` so a rename only has to happen in one place.

## Layout

```
src/
  data/resume.ts       all site content + types
  pages/               index.astro, thank-you.astro
  layouts/Layout.astro <head>, fonts, theme toggle
  components/          one per page section
  styles/global.css    theme tokens + custom classes
  assets/              favicon, certification badge art
public/                resume PDF, favicon, CNAME, .nojekyll
```

## Local development

Requires Node 22.12+.

```bash
npm install
npm run dev      # dev server at localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the built site
```

## Deployment

Push to `main`. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
installs, runs `astro build`, and publishes `dist/` to GitHub Pages.

Two deployment details that look redundant but aren't:

- **`CNAME` exists at both the repo root and in `public/`.** Astro only copies
  `public/` into `dist/`, so the `public/` copy is what ships in the build
  artifact and holds the custom domain. The root copy serves GitHub's
  branch-based Pages path. Removing either one has taken the domain down before.
- **`.nojekyll` likewise.** It stops GitHub running Jekyll over the source tree,
  which otherwise fails on Astro's `---` frontmatter, and protects the `_astro/`
  build directory (Jekyll ignores paths beginning with an underscore).

## Licence

Source is public for reference. Content, resume, certification badges and
personal branding are not licensed for reuse.
