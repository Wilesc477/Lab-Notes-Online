import type { Metadata } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dracula">
      <title>Lab Notebook</title>
      <body>
        {children}
      </body>
    </html>
  );
}
