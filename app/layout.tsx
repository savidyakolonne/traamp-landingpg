import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playlistScript = localFont({
  src: "./fonts/playlist-script/PlaylistScript.otf",
  variable: "--font-playlist-script",
  display: "swap",
});


export const metadata = {
  title: {
    default: "Traamp | It's time to Traamp",
    template: "Traamp | %s",
  },

  description:
    "Traamp helps tourists discover hidden gems, connect with guides, and explore destinations with real-time recommendations.",

  keywords: [
    "travel app",
    "Traamp",
    "tourist guide",
    "tourism",
    "travel recommendations",
    "Sri Lanka tourism",
    "travel discovery",
    "hidden places"
  ],

  openGraph: {
    title: "Traamp – Explore Smarter",
    description:
      "Discover hidden spots, explore smart maps, and connect with trusted guides using Traamp.",
    url: "https://traamp.com",
    siteName: "Traamp",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 600,
        alt: "Traamp Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Traamp – Travel Better",
    description:
      "Find hidden spots, local guides, and smart recommendations with Traamp.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  metadataBase: new URL("https://traamp.com"),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playlistScript.variable}
 antialiased`}>
        <Navbar />
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}

