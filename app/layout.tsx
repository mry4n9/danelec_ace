import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/ui/footer";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import { MainNavigation } from "./components/navigation-menu";
import { DockDemo } from "./components/ui/dock-demo";

const aeonikRegular = localFont({
  src: "../public/fonts/Aeonik-Regular.woff2",
  variable: "--font-aeonik-regular",
  display: "swap",
});

const aeonikMedium = localFont({
  src: "../public/fonts/Aeonik-Medium.woff2",
  variable: "--font-aeonik-medium",
  display: "swap",
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
      className={`${aeonikRegular.variable} ${aeonikMedium.variable}`}
    >
      <body className="font-sans antialiased flex flex-col min-h-[100dvh]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center px-5 sm:px-7 mt-1 sm:mt-5 gap-1">
              <MainNavigation />
              <LightDarkToggle />
            </div>
            <div className="flex-1 flex flex-col px-2 sm:px-0">
              {children}
            </div>
            {/*Disabled dock<div className="fixed bottom-1 sm:bottom-3 left-1/2 -translate-x-1/2">
              <DockDemo />
            </div>*/}
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
