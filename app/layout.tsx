import Image from "next/image";
import type { Metadata } from "next";
import { Jockey_One } from "next/font/google";
import Footer from "./sections/footer";
import "./css/globals.css";

const jockerOne = Jockey_One({
  weight: "400",
  variable: "--font-jockey-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - DUNON Valentin",
  description: "Discover who am I, including my projects",
  icons: "/icons/logo_portfolio.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jockerOne.variable} antialiased`}
      >
        <a href="https://www.epitech.eu/" target="blank">
          <Image
            className="absolute right-5 top-5"
            src="/logos/epitech.svg"
            alt="Epitech's logo"
            width={100}
            height={20}
          />
        </a>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
