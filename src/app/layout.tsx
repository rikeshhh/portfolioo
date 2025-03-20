import type { Metadata } from "next";
import { Roboto, Unbounded, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Footer from "@/section/Footer";
import Header from "@/section/Header";
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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  variable: "--font-montserrat",
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
        className={`${unbounded.variable} ${montserrat.variable} ${roboto.variable} antialiased `}
      >
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 md:px-8 w-full font-montserrat">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
