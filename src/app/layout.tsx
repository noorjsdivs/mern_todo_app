import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/layout/Layout";
import { Toaster } from "react-hot-toast";
import LeftSideNav from "@/components/LeftSideNav";
import RightSideNav from "@/components/RightSideNav";
import { ThemeProvider } from "@/components/ThemeContext";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider>
          <Layout>
            <div className="grid grid-cols-12">
              <div className="col-span-2">
                <LeftSideNav />
              </div>
              <div className="col-span-8"> {children}</div>
              <div className="col-span-2">
                <RightSideNav />
              </div>
            </div>
            <Toaster />
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
