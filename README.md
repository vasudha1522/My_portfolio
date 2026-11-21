# My_portfolio

Responsive single-page portfolio for Vasudha Kalyani, built with React, TypeScript, and Vite.

## Setup

Install Node.js (20.19+ or 22.12+) and run:

```sh
npm install
npm run dev
npm run build
```

## Owner configuration

Edit `src/data/portfolio.ts` to add verified URLs for the GitHub and LinkedIn profiles, each project's repository, and any credential URLs. Empty values are intentionally rendered as text rather than clickable links. Add the supplied portrait as `public/images/vasudha-profile.jpg`, then set `profileImage` to `/images/vasudha-profile.jpg`. Add a resume PDF under `public/` and set `resumeUrl` only if it should be offered.

Add a canonical URL to `index.html` after choosing the production domain.
