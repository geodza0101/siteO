import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Fixed typo here
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Vibecoding Webinar",
  description: "Presentation about the future of AI development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
