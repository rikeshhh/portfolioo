import type { Metadata } from "next";
import { Roboto, Unbounded } from "next/font/google";
import Header from "@/components/common/Header";
import "./globals.css";
import RevealLink from "@/section/reveal-links";

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
  description:
    "Portfolio of Rikesh Shrestha, a Frontend Developer passionate about building beautiful, user-friendly websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.variable}  ${roboto.variable} antialiased `}
      >
        <Header />
        <main className="flex-grow container mx-auto px-4 md:px-8 w-full font-montserrat">
          {children}
        </main>
        <RevealLink />
      </body>
    </html>
  );
}
