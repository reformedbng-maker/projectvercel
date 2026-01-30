import React from "react"
import type { Metadata, Viewport } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '23 Movimentos da Massagem Orgástica | Guia Tântrico para Homens',
  description: 'Descubra os 23 movimentos secretos da massagem orgástica. Guia completo de terapia tântrica para homens: melhore suas habilidades, aumente a confiança e transforme sua vida íntima. Livro digital + videoaulas por apenas R$19,90.',
  keywords: ['massagem tântrica', 'terapia tântrica', 'educação sexual masculina', 'prazer', 'relacionamentos', 'bem-estar íntimo'],
  authors: [{ name: '23 Movimentos' }],
  openGraph: {
    title: '23 Movimentos da Massagem Orgástica',
    description: 'Guia Tântrico para Homens: Transforme sua vida íntima com técnicas milenares.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: 'index, follow',
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F5F5' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
