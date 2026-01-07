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
  title: "Valentin Dunon | Future Epitech Expert",
  applicationName: "Valentin Dunon Portfolio",
  description: "Explore the portfolio of Valentin Dunon, Full-Stack Developer & Future IT Expert.",
  icons: "/icons/logo_portfolio.png",
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Valentin Dunon',
    'Full-Stack Developer',
    'Internship 2026',
    'Github',
    'C',
    'React',
    'Node.Js',
    'Next.Js',
    'TypeScript',
    'Web Development',
    'IT Project Management'
  ],
  authors: [{ name: 'Valentin Dunon' }],
  creator: 'Valentin Dunon',
  publisher: 'Valentin Dunon',
  openGraph: {
    title: 'Valentin Dunon | Future Epitech Expert',
    siteName: 'Valentin Dunon Portfolio',
    description: 'Discover me, future new technologies expert.',
    url: 'https://vdunon.github.io',
    locale: 'en_US',
    images: [
      {
        url: 'https://vdunon.github.io/images/og_preview.png',
        width: 1200,
        height: 630,
        alt: "Valentin Dunon Portfolio"
      }
    ],
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
