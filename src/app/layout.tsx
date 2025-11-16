import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { generateMetadata as getMetadata } from "@/lib/seo";

export const metadata: Metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Domain Sale" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
        <Script src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} strategy="lazyOnload" />
      </head>
      <body className="antialiased">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}

