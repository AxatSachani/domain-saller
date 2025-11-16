import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  siteUrl: string;
  domainName: string;
  ogImage?: string;
  twitterHandle?: string;
  canonicalUrl?: string;
}

export function getSEOConfig(): SEOConfig {
  // NEXT_PUBLIC_ variables work on both client and server
  return {
    title: process.env.NEXT_PUBLIC_SEO_TITLE || 'Premium Domain for Sale',
    description: process.env.NEXT_PUBLIC_SEO_DESCRIPTION || 'Premium domain name available for purchase',
    keywords: process.env.NEXT_PUBLIC_SEO_KEYWORDS || 'domain, domain sale, buy domain, premium domain',
    author: process.env.NEXT_PUBLIC_SEO_AUTHOR || '',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
    domainName: process.env.NEXT_PUBLIC_DOMAIN_NAME || 'example.com',
    ogImage: process.env.NEXT_PUBLIC_OG_IMAGE || '',
    twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '',
    canonicalUrl: process.env.NEXT_PUBLIC_CANONICAL_URL || '',
  };
}

export function generateMetadata(): Metadata {
  const seo = getSEOConfig();
  const canonical = seo.canonicalUrl || `${seo.siteUrl}`;
  const ogImageUrl = seo.ogImage || `${seo.siteUrl}/web-app-manifest-512x512.png`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: seo.author ? [{ name: seo.author }] : undefined,
    creator: seo.author,
    publisher: seo.author,
    metadataBase: new URL(seo.siteUrl),
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: seo.domainName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: seo.twitterHandle
      ? {
          card: 'summary_large_image',
          title: seo.title,
          description: seo.description,
          images: [ogImageUrl],
          creator: `@${seo.twitterHandle}`,
        }
      : {
          card: 'summary_large_image',
          title: seo.title,
          description: seo.description,
          images: [ogImageUrl],
        },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || undefined,
    },
  };
}

