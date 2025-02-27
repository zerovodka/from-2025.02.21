import type { Metadata } from "next";
import "globals.css";
import { BLOG_TITLE, BLOG_DESCRIPTION } from "~public/constants";
import StyledComponentsRegistry from "~lib/registry";

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
