# Bhansali Flanges — Product Category Page

Professional App Router product page for stainless steel flange buyers in Saudi Arabia, UAE and the wider Middle East.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Build verification: `npm run build`.

## Replace before launch

- `app/components/EnquiryBar.tsx`: phone number, WhatsApp number and export email.
- `app/layout.tsx`: replace the documented `GTM-XXXXXXX` placeholder with the real Google Tag Manager container snippet/ID.
- Add `GOOGLE_SHEET_WEBHOOK_URL` to `.env.local` with your deployed Google Apps Script Web App URL. `app/api/enquiry/route.ts` posts `{ name, email, phone, productInterest, timestamp }` to it and retains a local debug log.

## Feature checks

- Click the sticky Call, WhatsApp and Email links to verify their `tel:`, `wa.me` and `mailto:` targets.
- Switch 304, 316 and 316L in **Specification, by grade**. Table values update without a reload; the only page animation is its staggered table rows (and it respects reduced-motion preferences).
- Submit an empty enquiry form to see field validation, then submit valid details and check the dev server terminal for the logged payload and browser devtools for the `form_submit` gtag event.
- Resize from mobile to desktop; table remains horizontally scrollable on narrow screens while the contact bar stays visible.
