import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Years of Life',
  description: 'Website to see the years of life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-blue-600">
        <h1 className="text-white text-center">
          Years of Life
        </h1>
      {children}</body>
    </html>
  )
}
