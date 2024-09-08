import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Layout from "@/layout/Layout";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Todo Application using Next js",
  description: "A todo application for education purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-slate-200 to-yellow-50`}
      >
        <Layout >
          <Header />
          {children}
          <Toaster
          position="bottom-right"
          />
        </Layout>
      </body>
    </html>
  );
}
