import type { Metadata } from "next";
import { BLOG_TITLE, BLOG_DESCRIPTION } from "~public/constants";
import StyledComponentsRegistry from "~style/registry";

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
