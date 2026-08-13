<<<<<<< HEAD
# Sumit-Gupta-Professional-Digital-Portfolio
Digital Portfolio of Sumit Gupta for Professional life as Software Engineer
=======
# Integration Portfolio

A premium, static-exportable Next.js portfolio for a MuleSoft Developer and Digital Technology Analyst. It is data driven: content belongs in `src/data`, while presentation stays in reusable components.

## Features

- Responsive dark/light interface, mobile menu, smooth section navigation, print-friendly resume, and accessible semantic controls.
- Context-aware global background that shifts as visitors move between portfolio sections.
- Interactive skill categories, project filtering, expandable career details, client-side GitHub public API lookup with a graceful fallback, and a provider-ready contact form.
- Static Next.js export, SEO metadata, sitemap/robots output, configurable asset base path, and a modern GitHub Pages deployment workflow.

## Stack

Next.js 14, TypeScript, React, Tailwind CSS, Framer Motion, and Lucide icons.

## Project structure

```
src/
  app/                 Next app entry, SEO, sitemap and global styles
  components/          Portfolio UI and global DynamicBackground
  data/                Profile, experience, skills, projects, credentials, education
  types/               Content contracts
public/
  resume/resume.pdf    Add your downloadable resume here
  profile/profile.jpg  Add your portrait here
.github/workflows/     GitHub Pages deployment
```

## Install and run

```bash
git clone <repository-url>
cd <repository-name>
npm install
npm run dev
npm run build
```

Copy `.env.example` to `.env.local` and fill in the public values. For a project site, set `NEXT_PUBLIC_REPOSITORY_NAME=repository-name`; the site derives `NEXT_PUBLIC_BASE_PATH=/repository-name`. Set `NEXT_PUBLIC_BASE_PATH` directly only when you need an override. For a `USERNAME.github.io` repository, leave both repository name and base path blank.

## Update your biodata

- Your name, summary, contacts, and GitHub username: `src/data/profile.ts`.
- Work history: `src/data/experience.ts`.
- Skill categories and descriptions: `src/data/skills.ts`.
- Portfolio work and links: `src/data/projects.ts`.
- Certification dates, IDs, and verification URLs: `src/data/certifications.ts`.
- Degree and university: `src/data/education.ts`.
- Resume: add a real `resume.pdf` at `public/resume/resume.pdf`.
- Profile image: add `public/profile/profile.jpg`, then substitute the current hero placeholder with an image using `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/profile/profile.jpg`.

## GitHub Pages deployment

Push to `main`. In GitHub repository **Settings → Pages**, set Source to **GitHub Actions**. The included workflow installs dependencies, runs lint, builds the static `out/` folder, and deploys it. Configure repository variables (`GITHUB_USERNAME`, `REPOSITORY_NAME`, `BASE_PATH`, `LINKEDIN_URL`, `EMAIL`) in **Settings → Secrets and variables → Actions**. These contain only public site configuration.

## Troubleshooting

- If images or the PDF 404 on a project site, confirm `NEXT_PUBLIC_REPOSITORY_NAME` or `NEXT_PUBLIC_BASE_PATH` is set at build time.
- Static export intentionally does not use server routes or private GitHub tokens.
- The contact form validates locally; replace its submit handler in `src/components/Portfolio.tsx` when connecting Formspree, EmailJS, Supabase, or another provider.
>>>>>>> c374419 (initial commit)
