import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { MouseFollower } from "@/components/ui/MouseFollower";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { MeshGradientBackground } from "@/components/ui/MeshGradientBackground";
import { CursorProvider } from "@/context/CursorContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devendhar Reddy | Senior UI/UX Designer",
  description: "Portfolio of Devendhar Reddy, a Senior UI/UX Designer specializing in enterprise-scale digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSans.variable} antialiased`}
      >
        <CursorProvider>
          <MouseFollower />
          <MeshGradientBackground />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </CursorProvider>
      </body>
    </html>
  );
}
