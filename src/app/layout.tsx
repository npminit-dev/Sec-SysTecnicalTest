import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import 'normalize.css'
import "./globals.css";
import Header from "@/components/header/Header";

const montserrat = Montserrat({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sec&Sys",
  description: "Security and System technical test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header></Header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
