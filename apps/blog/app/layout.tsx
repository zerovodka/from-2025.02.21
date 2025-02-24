import type { Metadata } from "next";
import "./globals.css";

// TODO: Metadata Setting
export const metadata: Metadata = {
  title: "Zerovodka[blog]",
  description: "Jr. FE Developer Zerovodka's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
