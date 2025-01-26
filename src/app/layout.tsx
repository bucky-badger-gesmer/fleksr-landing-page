import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "fleksr - Rent Premium Gym Memberships",
  description:
    "Access premium gyms without the long-term commitment. fleksr lets you rent high-end gym memberships, giving you flexibility and variety in your fitness journey.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
