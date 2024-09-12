import type { Metadata } from "next";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/Layout";


export const metadata: Metadata = {
  title: "todo",
  description: "todo application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bodyFont">
        <Layout>
          {children}
          <Toaster toastOptions={{
            position: "top-right",
            duration: 1000
          }} />
        </Layout>
      </body>
    </html>
  );
}
