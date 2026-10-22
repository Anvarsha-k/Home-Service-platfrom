# Apex Home Services — client demo site

Next.js 16 + Tailwind CSS 4 + Framer Motion. Every page is pre-rendered as static HTML.

## Run it

```bash
npm install      # first time only
npm run dev      # http://localhost:3000 — live reload while editing
npm run build && npm start   # production build
```

## Pages

| URL | What it is |
|---|---|
| `/` | Main landing page (hero hook + quote form, services, why us, call/quote section) |
| `/hvac` | Winter heating landing page for Google Ads (hero, services, winter offers, warning signs, call/quote) |
| `/services/plumbing`, `/electrical`, `/roofing`, `/appliance-repair`, `/junk-removal` | One shared template, content from `src/lib/services.ts` |
| `/about` | Story, values, guarantees |
| `/contact` | Call card, quote form, contact details, map |

## Swapping in the client's real info

Everything is placeholder data. Edit these files:

- **`src/lib/site.ts`** — business name, phone, email, address, license, hours, rating, service areas, offers, guarantees
- **`src/lib/services.ts`** — each service's headline, problems, offerings, photos
- **`src/app/about/page.tsx`** — company story and values
- **`src/components/ui/Logo.tsx`** + **`src/app/icon.svg`** — logo
- **`src/assets/`** — photos (currently free Unsplash images)
- Brand colors live at the top of **`src/app/globals.css`** (`--color-flame-*`, `--color-ink-*`)

## Forms

Forms are in **demo mode**: they validate and show a success screen, but nothing is sent.
To make them send real leads, edit **`src/lib/submitLead.ts`** (instructions are in the file — e.g. Web3Forms, Formspree or a CRM webhook).

## Deploy

Push to GitHub and import the repo at vercel.com (free), or run `npx vercel` from this folder.
