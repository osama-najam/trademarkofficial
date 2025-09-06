import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./compoenent/navbar";
import Banner from "./compoenent/banner";
import UspFooter from "./compoenent/upfooter";
import Footer from "./compoenent/footer";

export const metadata: Metadata = {
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
        <UspFooter/>
        <Footer/>
      </body>
    </html>
  );
}
