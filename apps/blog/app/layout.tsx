import type { Metadata } from "next";
import localFont from "next/font/local";

import { BLOG_TITLE, BLOG_DESCRIPTION } from "~public/constants";
import StyledComponentsRegistry from "~style/registry";

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
};

const font = localFont({
  src: "../fonts/SpoqaHanSansNeo-Light.woff",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
