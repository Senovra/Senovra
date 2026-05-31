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
        url: "/GIH.png",
        width: 1200,
        height: 630,
        alt: "Senovra Preview",
      },
    ],
    type: "website",
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
