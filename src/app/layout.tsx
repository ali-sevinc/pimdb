import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import NavBar from "@/components/Layout/NavBar";
import Search from "@/components/Layout/Search";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "πMDb",
  description: "This is a movie database.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Suspense>
          <Header />
          <NavBar />
          <Search />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
