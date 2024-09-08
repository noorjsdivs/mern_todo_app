import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LayOut from "@/components/LayOut/LayOut";
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <LayOut>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
      </LayOut>
      </body>
    </html>
  );
}
