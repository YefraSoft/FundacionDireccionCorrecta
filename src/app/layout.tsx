import { Ubuntu_Condensed } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu_Condensed({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Doreccion Correcta",
  description:
    "Plataforma de donaciones para personas de bajos recursos en Mexico.",
  robots: "index, follow",
  keywords: "donaciones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>{children}</body>
    </html>
  );
}
