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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <head>
        {/*
          Prevents Samsung Browser and other aggressive browser dark mode
          engines from re-processing colors on an already-dark site.
          Must be in <head> to take effect before first paint.
        */}
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
