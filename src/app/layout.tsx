import { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

import { Providers } from "@/providers";

import "./globals.css";
import Script from "next/script";

const font = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const description =
    "Step into the ITM Mongolia 2024 Tourism Expo in Ulaanbaatar, Mongolia – an avant-garde display of tourism, culture, and technology innovations.";

  return {
    metadataBase: new URL("https://mta-front-end.vercel.app/"),
    title: "UG-Group",
    description,
    keywords: ["UG-Group"],
    openGraph: {
      title: "UG-Group",
      description,
      images: [
        {
          url: "/assets/favicon.ico",
          width: 600,
          height: 600,
          alt: "Logo",
        },
      ],
      url: new URL("https://mta-front-end.vercel.app/"),
      type: "website",
    },
  };
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>

      <body className={cn(font.className, "w-full dark:bg-[#202020]")}>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
