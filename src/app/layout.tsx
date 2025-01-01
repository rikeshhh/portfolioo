import type { Metadata } from "next";
import { Roboto, Unbounded,Montserrat } from "next/font/google";

import { ThemeProvider } from "@/components/theme/theme-provider";
import Footer from "@/section/Footer";
import Header from "@/section/Header";

import LenisScrollProvider from "./providers/lenis-provider";

import "./globals.css";

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
  title: "Rikesh Shrestha",
  description: "Portfolio of Rikesh Shrestha, a Frontend Developer passionate about building beautiful, user-friendly websites.",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  variable: '--font-montserrat',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${montserrat.variable} ${roboto.variable} antialiased`}>
        <section className="grid items-center  min-h-screen  gap-16 font-unbounded w-full">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start container mx-auto px-8 w-full font-montserrat">
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
