import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sravanthworks.netlify.app"),
  title: {
    default: "Sravanth | Full Stack Developer",
    template: "%s | Sravanth",
  },
  description: "Portfolio of Sravanth, a Full Stack Developer specializing in modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Portfolio", "Sravanth", "Web Development"],
  authors: [{ name: "Sravanth" }],
  creator: "Sravanth",
  publisher: "Sravanth",
  openGraph: {
    title: "Sravanth | Full Stack Developer",
    description: "Portfolio of Sravanth, a Full Stack Developer specializing in modern web technologies.",
    url: "https://sravanthworks.netlify.app",
    siteName: "Sravanth Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sravanth | Full Stack Developer",
    description: "Portfolio of Sravanth, a Full Stack Developer specializing in modern web technologies.",
    creator: "@sravanth", // Replace with actual handle if available
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
