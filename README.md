# Meridian Markets

Original brokerage frontend concept inspired by the public architecture of EUFX Trade. **Current scope: Phase 1 (foundation) and Phase 2 (homepage).** No brokerage services are offered.

## Run locally

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite. React Fast Refresh updates edits automatically.

```sh
npm run build
npm run preview
```

## Implemented

- React, TypeScript, Vite, Tailwind v4, React Router, Lucide and Framer Motion.
- Shared responsive header/footer; desktop hover/click dropdowns, keyboard access, Escape/outside dismissal and expandable mobile navigation.
- Original responsive homepage with six benefit cards, illustrative trading dashboard, feature highlights, platform features and editorial review carousel with swipe controls.
- Searchable/filterable instrument table, asset-class sorting and specification dialogs.
- Demo chart time-range controls and dedicated platform preview.
- Reserved routes for all brief destinations, with explicit phase notices rather than unimplemented services presented as working features.
- Reduced-motion support, focus styling, skip link and Vercel SPA rewrite configuration.

## Next phases

1. Replace phase notices with complete About, Education, Accounts, Promotions and five market pages.
2. Implement registration/login/contact forms with validation, then connect verified backend services. Preserve account tier and demo mode using URL query parameters.
3. Add approved legal documents and verified company/contact details.
4. Connect a trading API only after real execution, instrument conditions and risk controls are available.
5. Add authorised customer reviews; the homepage currently has clearly identified editorial placeholders.

Authentication, deposits, withdrawals, support delivery, promotions, live quotes and order execution are **not implemented**. No credentials or personal data are collected. All trading values are examples. Hosting and GitHub push have not been performed as part of this local build.

## Structure

- `src/components/`: shared shell, chart and instrument explorer.
- `src/pages/`: homepage and next-phase destination notice.
- `src/styles.css`: design tokens, layouts and responsive rules alongside Tailwind.
- `docs/reference-inspection.md`: source observations and inspection limitations.

For Vercel, import the GitHub repository, select Vite, use `npm run build` and output directory `dist`. A Vercel rewrite handles direct loading of application routes.
