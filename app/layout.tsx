import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header, Navbar } from "@/widgets";
import { Suspense } from "react";

const font = Ubuntu({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Мои тренировки",
  description: "Мои тренировки",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      suppressHydrationWarning
      lang="ru"
      className={`${font.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-20">
        <main>
          <Suspense>
            <Header />
          </Suspense>
          {children}
          <Suspense>
            <Navbar />
          </Suspense>
        </main>
      </body>
    </html>
  );
}
