import type { Metadata } from "next";
import { Playfair_Display } from 'next/font/google'
import "./globals.css";

const playFair = Playfair_Display({
      subsets: ['latin']
});
export const metadata: Metadata = {
  title: "shi.",
  description: "mi amor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playFair.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
