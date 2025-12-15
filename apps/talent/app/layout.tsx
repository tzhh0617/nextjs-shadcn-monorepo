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
    default: 'Talent Portal',
    template: '%s | Talent Portal',
  },
  description: 'Connect with talented professionals and discover amazing opportunities',
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'React', 'Talent', 'Jobs'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://talent.your-domain.com',
    title: 'Talent Portal',
    description: 'Connect with talented professionals and discover amazing opportunities',
    siteName: 'Talent Portal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talent Portal',
    description: 'Connect with talented professionals and discover amazing opportunities',
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
