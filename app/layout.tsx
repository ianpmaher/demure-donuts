import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ModeToggle";
import Footer from "./components/Footer";
import { sub } from "date-fns";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className={`${lexend.className} min-h-screen flex justify-center items-center flex-col`}>
            <header className="flex justify-center p-1 bg-background text-foreground relative top-0 my-1">
              <ModeToggle className="absolute" />
            </header>
            <main className="w- p-4 my-12">
              {children}
            </main>
          </div>
          <Footer className="fixed bottom-0 left-0 right-0 my-1" />
        </ThemeProvider>
      </body>
    </html>
  );
}
