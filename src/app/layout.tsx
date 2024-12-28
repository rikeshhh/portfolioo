import type { Metadata } from "next";
import { Roboto, Unbounded } from "next/font/google";

import { ThemeProvider } from "@/components/theme/theme-provider";
import Footer from "@/section/Footer";
import Header from "@/section/Header";

import "./globals.css";
import LenisScrollProvider from "./providers/lenis-provider";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  variable: "--font-unbounded",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${roboto.variable} antialiased`}>
        <section className="grid items-center  min-h-screen  gap-16 font-unbounded w-full">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start container mx-auto px-8 w-full">
              <LenisScrollProvider>
                {children}
              </LenisScrollProvider>
            </main>
              <Footer />
          </ThemeProvider>
        </section>
    </body>
    </html>
  );
}
