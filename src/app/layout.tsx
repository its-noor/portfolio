import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdulaziz Noor",
  description: "Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-950 text-zinc-200 antialiased`}
      >
        <div className="min-h-screen flex justify-center px-6 sm:px-8">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-16 py-16">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
