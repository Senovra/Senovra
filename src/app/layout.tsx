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
    <html lang="en" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#070B14" />

        {/* Open Graph — explicit tags for WhatsApp, iMessage, Telegram, Discord */}
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

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://senovra.com" />
        <meta name="twitter:title" content="Senovra" />
        <meta
          name="twitter:description"
          content="High-performance web development and maintenance for ambitious businesses. Fast, scalable, modern websites engineered for results."
        />
        <meta name="twitter:image" content="https://senovra.com/logo3.png" />
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
