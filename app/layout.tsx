import type { Metadata } from "next";
import localFont from "next/font/local";

const outfit = localFont({
  src: "../fonts/Outfit-VariableFont_wght.ttf",
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dentists At The Place",
  description: "Dental Care for your new smile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}