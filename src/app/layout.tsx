import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./compoenent/navbar";
import Banner from "./compoenent/banner";

export const metadata: Metadata = {
  title: "Fee 499 - USPTO",
  description: "https://trademarkofficial.vercel.app/",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar/>
        <Banner/>
        {children}
      </body>
    </html>
  );
}
