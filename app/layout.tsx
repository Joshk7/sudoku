import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { poppins } from "./font";

export const metadata: Metadata = {
  title: "Sudoku App",
  description: "Small sudoku project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
