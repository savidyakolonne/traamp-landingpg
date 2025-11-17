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


export const metadata: Metadata = {
  title: "Traamp",
  description: "Tourism social media app",
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

