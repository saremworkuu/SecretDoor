# SecretDoor

SecretDoor is a small CTF-style web app. Your goal is to discover hidden routes using standard recon tactics and reach the access-granted page.

## Puzzle Flow
- Visit `/robots.txt` to find a disallowed path and a hint.
- Apply ROT13 to `uvqqra` → `hidden`.
- Opening `/hidden` reveals the hidden page.

## Routes
- `/` Home
- `/about` About page
- `/robots.txt` Plaintext hints (served from `public/robots.txt`)
- `/hidden` Hidden page (ACCESS GRANTED)

## Tech Stack
- React + TypeScript
- React Router (BrowserRouter)
- Vite
- Tailwind via CDN (in `index.html`)

## Project Structure
```
App.tsx
index.html
index.tsx
metadata.json
package.json
tsconfig.json
vite.config.ts
components/
   Layout.tsx
   Navbar.tsx
pages/
   About.tsx
   HiddenPage.tsx
   Home.tsx
   RobotsTxt.tsx
public/
   robots.txt
```

## Getting Started
Prerequisite: Node.js (LTS recommended)

Install and run the dev server:

```bash
npm install
npm run dev
```

Then open:
- Dev server: http://localhost:3000/
- Hints: http://localhost:3000/robots.txt
- Target: http://localhost:3000/hidden

## Build & Preview
```bash
npm run build
npm run preview
```

## Notes
- Files in `public/` are served at the site root (e.g., `public/robots.txt` → `/robots.txt`).
- The app uses `BrowserRouter`; make sure your production host serves `index.html` for unknown routes if you deploy.
