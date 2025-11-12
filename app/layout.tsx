import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/ui/footer";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import { DockDemo } from "./components/ui/dock-demo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danelec ACE",
  description: "For creating campaigns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-mono antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="px-5 sm:px-0">
          {children}
          </div>

          <div className="fixed bottom-1 sm:bottom-3 left-1/2 -translate-x-1/2">
            <DockDemo />
          </div>

          <LightDarkToggle className="fixed top-4 right-4" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
