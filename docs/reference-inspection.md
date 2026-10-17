# Reference inspection — 18 October 2026

Reference: https://www.eufxtrade.com

Inspection before implementation used accessible HTML through the web tool. The in-app browser was unavailable, so rendered desktop/mobile behavior and pixel dimensions could not be verified. All proportions, typography, container widths, navigation spacing, header height and responsive behavior in this implementation are original approximations based on the supplied brief. No pixel-accurate reproduction is claimed.

## Accessible pages

- `/`: observed text order: trading hero with live/demo CTAs; four highlights; six trading benefits; instrument examples; platform features; reviews; payment references; quick links/contact/risk footer. Instrument examples included EURUSD, AAPL, XAUUSD, US30 and crude oil. Footer included identity and regulatory claims that were deliberately not reproduced.
- `/accounts`: observed hero, account-selection introduction, three Bronze/Silver/Gold tiers and trading-condition disclosures. Advertised bonus/leverage figures and unexplained user counts were not adopted as Meridian offerings.
- `/education`: accessible HTML retrieved; retained as a future-phase architecture reference. Visual card/image arrangements not verified.
- `/about-us`: accessible HTML retrieved; retained as a future-phase architecture reference. Visual layout and interactive contact behavior not verified.

Remaining routes were specified by the brief and were not visually inspected in this phase. Promotions, market pages, registration and login remain later-phase work.

## Unverified visual/interaction details

Actual header positioning/height, logo dimensions, navigation gaps, hero image proportions, exact container widths, breakpoint behavior, fonts, button dimensions, card grids, background transitions, dropdown keyboard handling and mobile menu animations were not measurable using text extraction. Original implementation decisions follow the requested accessible, responsive patterns.

## Original design

Meridian Markets is a placeholder brand created for this project. The implementation uses an original code-drawn financial chart, forest-green palette and warm neutral backgrounds. No reference logo, proprietary imagery, testimonials, legal identity or regulatory license was copied.

## Local verification

The Vite application was opened in native Safari after the in-app browser proved unavailable. Desktop hero rendering and the shared header were visually inspected. Chart time-range selection changed its accessible state, and selecting Shares reduced the instrument table to AAPL. TypeScript and production build passed. Mobile breakpoints are implemented but have not yet been visually verified on a mobile viewport. A complete browser console audit and all-route interaction pass remain for a later QA stage.
