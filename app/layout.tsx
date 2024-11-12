import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import { LayoutProvider } from "./LayoutProvider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PoodieLearning',
  description: 'Learn Python programming with Poodie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen")}>
        <LayoutProvider>{children}</LayoutProvider>
        <footer className="bg-gray-100 border-t py-4">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-600 text-sm">
              © {new Date().getFullYear()} PoodieLearning. All rights reserved for Booschnie.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}