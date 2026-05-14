import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ShowroomShell } from "@/components/layout/showroom-shell";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadcn Design System Showroom",
  description:
    "Showroom navegavel para identidade visual, componentes e padroes de UI com Next.js e shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ShowroomShell>{children}</ShowroomShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
