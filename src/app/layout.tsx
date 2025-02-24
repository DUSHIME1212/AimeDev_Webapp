import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang="en">
        <body className={inter.className}>
        <div className={'px-4 md:px-8 lg:px-16 xl:px-32'}>
          <Navbar/>
        </div>
        <div className={'px-4 md:px-8 lg:px-16 xl:px-32'}>
          {children}
        </div>
        </body>
        </html>
      </ClerkProvider>
  );
}

export const metadata: Metadata = {
  title: "AIME DEV",
  description: "Social media app built with Next.js",
};
