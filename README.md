# Domain Seller - Premium Domain Selling Page

A modern, SEO-optimized Next.js application for selling domains. Fully customizable through environment variables, making it easy to reuse for multiple domains.

## Features

- ✅ **SEO Optimized** - Full metadata support, Open Graph, Twitter Cards, and search engine verification
- ✅ **Environment-Based Configuration** - All settings configurable via `.env` file
- ✅ **Modern Design** - Beautiful, responsive UI with Tailwind CSS
- ✅ **Contact Form** - Ready-to-use contact form with email integration
- ✅ **Performance Optimized** - Built with Next.js 14 for optimal performance

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` with your domain and configuration details.

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   # or
   yarn build
   yarn start
   ```

## Environment Variables

See `.env.example` for all available configuration options. Key variables include:

- `NEXT_PUBLIC_SITE_URL` - Your domain URL
- `NEXT_PUBLIC_DOMAIN_NAME` - The domain name you're selling
- `NEXT_PUBLIC_SEO_TITLE` - SEO title
- `NEXT_PUBLIC_SEO_DESCRIPTION` - SEO description
- `NEXT_PUBLIC_EMAIL_ENDPOINT` - Email service endpoint (e.g., Formspree)
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - Google reCAPTCHA site key
- `RECAPTCHA_SECRET_KEY` - Google reCAPTCHA secret key (for backend verification)

## Customization

### Adding an OG Image

1. Add your Open Graph image to `/public/og-image.jpg`
2. Set `NEXT_PUBLIC_OG_IMAGE` in your `.env` file

### Email Integration

The contact form supports multiple email services:

1. **Formspree** (recommended):
   - Sign up at https://formspree.io
   - Get your form endpoint
   - Set `NEXT_PUBLIC_EMAIL_ENDPOINT` to your Formspree URL

2. **Custom API Endpoint**:
   - Set `NEXT_PUBLIC_EMAIL_ENDPOINT` to your API endpoint
   - Ensure it accepts POST requests with JSON body

3. **Fallback**:
   - If no endpoint is set, the form will use a `mailto:` link

### reCAPTCHA Setup

The contact form includes Google reCAPTCHA v2 for spam protection:

1. **Frontend**: The site key is configured via `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
2. **Backend Verification** (optional): Use the secret key (`RECAPTCHA_SECRET_KEY`) to verify tokens on your server
   - Send a POST request to `https://www.google.com/recaptcha/api/siteverify` with:
     - `secret`: Your secret key
     - `response`: The token from the form submission

## SEO Features

- Automatic sitemap generation
- Robots.txt configuration
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card tags
- Search engine verification (Google, Yandex, Yahoo)
- Canonical URLs

## License

MIT

