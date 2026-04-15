import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Samie Sohrab | Builder. Maker. Founder.",
  description:
    "Full-stack developer crafting mobile & web experiences with React Native, Node.js, Supabase & real-time systems. Based in India.",
  keywords: [
    "Md Samie Sohrab",
    "Samie",
    "Builder",
    "Maker",
    "Founder",
    "Full-stack Developer",
    "React Native",
    "Node.js",
    "Supabase",
    "TypeScript",
    "Mobile App Developer",
    "Web Developer India",
  ],
  authors: [{ name: "Md Samie Sohrab" }],
  creator: "Md Samie Sohrab",
  metadataBase: new URL("https://readme.samsite.in.net"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://readme.samsite.in.net",
    siteName: "Samie Sohrab",
    title: "Md Samie Sohrab | Builder. Maker. Founder.",
    description:
      "Full-stack developer crafting mobile & web experiences with React Native, Node.js, Supabase & real-time systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md Samie Sohrab - Builder. Maker. Founder.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Samie Sohrab | Builder. Maker. Founder.",
    description:
      "Full-stack developer crafting mobile & web experiences with React Native, Node.js, Supabase & real-time systems.",
    images: ["/og-image.png"],
    creator: "@scientific_samie",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "DHXWGxqts2FtZtU81Gi1Cv8J1ICNCb7WLXi-k79KB-U",
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
        <meta
          name="google-site-verification"
          content="DHXWGxqts2FtZtU81Gi1Cv8J1ICNCb7WLXi-k79KB-U"
        />
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased min-h-[100dvh] flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}