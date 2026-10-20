# Website editing notes

The page and components live directly in `app/`.

- `app/data.ts`: business details and menu dishes.
- `app/menu.tsx`: accessible category filters and WhatsApp links.
- `app/page.tsx`: visible copy, daily menu, gallery and contact.
- `app/seo.ts`: Restaurant JSON-LD and public URL configuration.
- `app/layout.tsx`: titles, social metadata and viewport.

The current version remains a static export. No database, external font service or paid API is required.

Before public release:
1. Confirm closing time and individual dish prices; they have not been invented.
2. Add the final HTTPS origin as `SITE_URL` in the hosting build environment, then rebuild. This populates canonical, sitemap, Open Graph image and absolute schema URLs. With no origin, the sitemap intentionally has no entries.
3. Validate the deployed JSON-LD in Google's Rich Results Test and Schema.org Validator.
4. Confirm mobile layout, category filters, browser back/forward and contact links.

Source audit improvements: a location-specific H1 and metadata, consistent address and phone, Restaurant JSON-LD, shareable category filters, named category sections, larger touch targets, reduced-motion support and clear collection-only ordering.

Pending verification: build, runtime, mobile rendering, accessibility tools and structured-data validators. The owner runs and tests the project.
