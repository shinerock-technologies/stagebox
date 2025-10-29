import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import data from "@/data/data.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  keywords: data.metadata.keywords,
  authors: [{ name: data.metadata.author }],
  openGraph: {
    title: data.metadata["og:title"],
    description: data.metadata["og:description"],
    type: "website",
    url: data.metadata["og:url"],
    siteName: data.metadata["og:site_name"],
    images: [
      {
        url: data.metadata["og:image"],
        alt: data.metadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: data.metadata["twitter:title"],
    description: data.metadata["twitter:description"],
    images: [data.metadata["twitter:image"]],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: data.metadata.canonical,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://timer-pro-sandy.vercel.app" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
