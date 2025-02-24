import type { Metadata } from "next";
import "./globals.css";

// TODO: Metadata Setting
export const metadata: Metadata = {
  title: "Zerovodka[blog]",
  description: "Jr. FE Developer Zerovodka's blog",
  keywords: ['Frontend', 'Next.js', 'React', 'Typescript'],
  authors: [{ name: 'Zerovodka', url: 'https://github.com/zerovodka' }],
  openGraph: { images: '/logo_png.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
