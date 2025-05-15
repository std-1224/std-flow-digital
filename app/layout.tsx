import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowForge - Digital Products for Modern Creators",
  description: "FlowForge - Digital Products for Modern Creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
