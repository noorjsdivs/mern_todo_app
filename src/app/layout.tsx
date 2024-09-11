import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo Application",
  description: "A todo app for learning purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bodyFont text-gray-300">
        <Layout>
          {children}

          <Toaster
            position="bottom-right"
            toastOptions={
              {
                duration: 3000,
                style: {
                  background: '#000000',
                  color: '#ffffff',
                },
              }
            }
          />
        </Layout>

      </body>
    </html>
  );
}
