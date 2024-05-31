import Navbar from "@/components/Navbar";
import "@/styles/globals.scss";
import { poppins } from "@/ui/fonts";
import type { Metadata } from "next";
import { mediaStyles } from "./media";

export const metadata: Metadata = {
  title: "GSSYA",
  description: "Global Share Support Youth Association",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style
          key="fresnel-css"
          dangerouslySetInnerHTML={{ __html: mediaStyles }}
          type="text/css"
        />
      </head>
      <body
        className={`${poppins.className} antialiased bg-zinc-50 text-zinc-950 overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
