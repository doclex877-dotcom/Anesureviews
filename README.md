# Anesu Reviews

Tech, gadget, and smart-living buying guides for Southern African readers — built with Next.js (App Router) + Tailwind CSS, deployable free-tier on Vercel.

## Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Static-generated article pages (20 guides, all pre-rendered at build time)

## Structure
- `src/lib/articles.ts` — all article content (edit here to add/update guides)
- `src/lib/site.ts` — site name, author bio, categories, contact email
- `src/components/AdSlot.tsx` — placeholder ad container; see comments for how to wire up a real AdSense publisher ID once approved (none is baked into this repo)
- `public/logo.png` — replace with the final brand logo file

## Local development
```
npm install
npm run dev
```

## AdSense
No AdSense publisher ID is included in this repository. Add your own client's ID to:
1. `src/app/layout.tsx` (AdSense script tag)
2. `src/components/AdSlot.tsx` (real ad unit)
3. `public/ads.txt`

## Deploy
Push to GitHub, then import the repo into Vercel (Hobby tier is sufficient).
