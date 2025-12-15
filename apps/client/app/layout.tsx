import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
// import { Toaster } from '@workspace/ui'
import '@workspace/ui/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Client App',
    template: '%s | Client App',
  },
  description: 'Customer-facing application with amazing features and services',
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'React', 'Client'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://client.your-domain.com',
    title: 'Client App',
    description: 'Customer-facing application with amazing features and services',
    siteName: 'Client App',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client App',
    description: 'Customer-facing application with amazing features and services',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background min-h-screen font-sans antialiased`}
      >
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  )
}
