import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: "Nabila's Place | Authentic Seafood & Portuguese Restaurant in Benoni",
  description: "Experience the finest seafood and Portuguese-inspired cuisine at Nabila's Place in Benoni. Fresh prawns, paella, crayfish, and more. Family-friendly dining with 4.4★ rating from 400+ reviews.",
  keywords: "restaurant in Benoni, seafood restaurant near me, Portuguese food Benoni, prawns, paella, crayfish, calamari, family restaurant Benoni",
  openGraph: {
    title: "Nabila's Place | Authentic Seafood & Portuguese Restaurant",
    description: "A hidden gem in Benoni serving the finest seafood and Portuguese-inspired dishes. Fresh ingredients, generous portions, and warm hospitality.",
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#3d5a3c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
