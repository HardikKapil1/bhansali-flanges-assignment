# Bhansali Flanges

A product-category website for stainless-steel flange enquiries from Saudi Arabia, the UAE, and the wider Middle East.

## What is included

- Grade-specific specifications for 304, 316, and 316L stainless steel.
- A shared-layout sliding grade indicator that respects reduced-motion preferences.
- Responsive specifications table with its existing staggered row reveal.
- Export contact links for phone, WhatsApp, and email.
- Validated quotation form that sends enquiries to the configured Google Sheets webhook.
- Search and social metadata for the product category page.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

## Enquiry delivery

The form posts validated name, email, phone, product-interest, and timestamp data to the `GOOGLE_SHEET_WEBHOOK_URL` environment variable. Configure that value in `.env.local` for local development and in the deployment environment for production.

## Manual checks

- Confirm the Call, WhatsApp, and Email links open the intended contact method.
- Switch between 304, 316, and 316L to verify the sliding tab indicator and updated table content.
- Submit a valid form enquiry and confirm it reaches the configured webhook.
- Check the layout at mobile and desktop widths; the specifications table should scroll horizontally on narrow screens.
