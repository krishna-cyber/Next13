/** @format */

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";
import ProfileInfo from "./components/ProfileInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krishna's Blog",
  description: "Created by Krishna Tiwari and contributors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className=' dark:bg-slate-700'>
        {" "}
        <Providers>
          <NavBar />
          <ProfileInfo />
          {children}
        </Providers>
      </body>
    </html>
  );
}
