# hcm202-project

Next.js app (App Router) with a **static export** setup for **GitHub Pages**.

## Requirements

- Node.js 22+
- pnpm

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Build (static export)

```bash
pnpm build
```

The static site will be generated into the `out/` folder.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that:

- installs dependencies with pnpm
- builds a static export to `out/`
- deploys `out/` to GitHub Pages

### Steps

1. Push this project to GitHub on the `main` branch.
2. In your GitHub repo go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` (or re-run the workflow) and wait for the action to finish.

### Base path behavior

- If your repository is named **`<username>.github.io`**, the site is served at the domain root, so the workflow uses **no base path**.
- Otherwise, GitHub Pages serves your site at `/<repo>/`, and the workflow automatically sets:
  - `NEXT_PUBLIC_BASE_PATH=/<repo>`

