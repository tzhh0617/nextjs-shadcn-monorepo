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
    default: 'Service Hub',
    template: '%s | Service Hub',
  },
  description:
    'Centralized service management platform for monitoring and maintaining system services',
  keywords: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'shadcn/ui',
    'React',
    'Service',
    'Monitoring',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://service.your-domain.com',
    title: 'Service Hub',
    description:
      'Centralized service management platform for monitoring and maintaining system services',
    siteName: 'Service Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Hub',
    description:
      'Centralized service management platform for monitoring and maintaining system services',
  },
  robots: {
    index: false,
    follow: false,
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
