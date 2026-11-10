# Alef FoodCRM — Turnkey Restaurant CRM, Storefront & Kitchen Display System (KDS)

Multilingual SaaS & boxed-solution landing page built for fast-food, street-food, burger/shawarma/pizza bars, food trucks, and cafes worldwide.

## Live Product Sandbox Showcased
- **Customer Storefront & Mobile Web-App**: [https://labriout.vercel.app](https://labriout.vercel.app)
- **Owner CRM & Kitchen KDS (`/owner`)**: [https://labriout.vercel.app/owner](https://labriout.vercel.app/owner) (`PIN: 1111` or `7777`)
- **Self-Admin Menu CMS (`/super-admin`)**: [https://labriout.vercel.app/super-admin](https://labriout.vercel.app/super-admin) (`PIN: 9999`)

## Pricing Plans
1. **Self-Admin Pro — `29,90 € / month`**:
   - `0 €` setup, `0%` commission on orders (100% paid directly to the restaurant's own Stripe account).
   - Full mobile/desktop ordering storefront, Kitchen Display System (KDS) with live cooking timer, 1-click 86 stop-list & inventory tracking, Click & Collect time slots, cloud hosting, and full access to the visual `/super-admin` CMS where the owner manages dishes, prices, discounts, and promo codes independently.
2. **All-Inclusive Concierge — `89 € / month`**:
   - Everything in Self-Admin Pro **plus** free custom branding & logo creation (`0 €`), full initial menu import, multilingual translations (including Hebrew RTL), unlimited (`∞`) menu/price/photo updates on request via WhatsApp, and unlimited custom promo/holiday graphic banners.

## Supported Languages (5 Languages + RTL)
- Russian (`ru`), English (`en`), German (`de`), French (`fr`), and Hebrew (`he` with automatic `dir="rtl"` layout).
- Supports URL parameter `?lang=ru|en|de|fr|he`, `localStorage`, and browser language detection.

## Email Lead Delivery (Vercel + Resend)
Lead submissions post to `/api/send-email` (`api/send-email.ts`) using **Resend**:
- Sender: `hello@alef-web.com`
- Recipient: `meir770d@gmail.com`
- Direct WhatsApp integration & fallback: `+43 681 816 567 80`

### Environment Variables
Copy `.env.example` to `.env.local` (or configure in Vercel Project Settings):
```env
RESEND_API_KEY=re_your_resend_api_key
```

## Development & Build
```bash
npm install
npm run dev
npm run build
```
