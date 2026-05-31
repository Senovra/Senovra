import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import MouseGradient from "@/components/MouseGradient";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Senovra",
    template: "%s - Senovra",
  },
  description:
    "High-performance web development and maintenance for ambitious businesses. Fast, scalable, modern websites engineered for results.",
  icons: {
    icon: "/logo3.png",
  },
  openGraph: {
    title: "Senovra",
    description:
      "High-performance web development and maintenance for ambitious businesses. Fast, scalable, modern websites engineered for results.",
    url: "https://senovra.com",
    siteName: "Senovra",
    images: [
      {
        url: "https://senovra.com/logo3.png",
        width: 1200,
        height: 630,
        alt: "Senovra",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senovra",
    description:
      "High-performance web development and maintenance for ambitious businesses. Fast, scalable, modern websites engineered for results.",
    images: ["https://senovra.com/logo3.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{
        colorScheme: "dark",
        backgroundColor: "#070B14",
      }}
    >
      <head>
        {/*
          ── Color scheme declarations ──────────────────────────────
          Multiple layers needed because Samsung Browser's Enhanced
          Dark Mode runs two passes — a pre-render meta read and a
          post-render filter injection. We target both.
        */}
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
        <meta name="theme-color" content="#070B14" />

        {/*
          ── Open Graph ────────────────────────────────────────────
          Used by WhatsApp, Facebook, LinkedIn, iMessage previews.
        */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://senovra.com" />
        <meta property="og:site_name" content="Senovra" />
        <meta property="og:title" content="Senovra" />
        <meta
          property="og:description"
          content="High-performance web development and maintenance for ambitious businesses. Fast, scalable, modern websites engineered for results."
        />
        <meta property="og:image" content="https://senovra.com/logo3.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Senovra" />

        {/*
          ── Twitter / X Card ──────────────────────────────────────
        */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://senovra.com" />
        <meta name="twitter:title" content="Senovra" />
        <meta
          name="twitter:description"
          content="High-performance web development and maintenance for ambitious businesses. Fast, scalable, modern websites engineered for results."
        />
        <meta name="twitter:image" content="https://senovra.com/logo3.png" />

        {/*
          ── Samsung Browser Dark Mode Nuclear Fix ─────────────────
          Samsung Browser's Enhanced Dark Mode ignores color-scheme
          meta tags and injects a CSS filter directly on <html>
          after the page renders. This inline <style> block fires
          before Samsung's pre-render pass makes its decision, and
          the filter:none cancels the post-render injection.

          Must be inline in <head> — an external CSS file loads
          too late for Samsung's pre-render dark mode decision.
        */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                color-scheme: dark !important;
              }
              html {
                color-scheme: dark !important;
                background-color: #070B14 !important;
                filter: none !important;
                -webkit-filter: none !important;
              }
              body {
                color: #ffffff !important;
                background-color: #070B14 !important;
                -webkit-text-fill-color: unset !important;
              }
              *, *::before, *::after {
                forced-color-adjust: none !important;
                -webkit-forced-color-adjust: none !important;
              }
            `,
          }}
        />
      </head>
      <body>
        <MouseGradient />
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
