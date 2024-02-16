import type { Metadata } from "next";
import { Inter, Qwigley, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });
const qwigley = Qwigley({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-qwigley"
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-montserrat"
})

export const metadata: Metadata = {
  title: {
    default: "Christopher William Photography",
    template: "%s - Christopher William Photography"
  },
  description: "Photography and videography service throughout Norfolk, Cambridge and Suffolk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable} relative`}>
        <Header />
          <Providers>
            {children}
          </Providers>
        <Footer />
      </body>
    </html>
  );
}
