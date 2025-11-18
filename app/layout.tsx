import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/ui/footer";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import { MainNavigation } from "./components/navigation-menu";
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
      <body className="font-mono antialiased flex flex-col min-h-[100dvh]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center px-4 sm:px-6 lg:px-8 mt-4 gap-1">
              <LightDarkToggle />
              <MainNavigation />
              
            </div>
            <div className="flex-1 flex flex-col px-5 sm:px-0">
              {children}
            </div>
            <div className="fixed bottom-1 sm:bottom-3 left-1/2 -translate-x-1/2">
              <DockDemo />
            </div>
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
