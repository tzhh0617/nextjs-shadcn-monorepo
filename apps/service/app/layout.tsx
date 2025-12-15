import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'

import '@workspace/ui/globals.css'
import { Providers } from '@/components/providers'
import { AppSidebar } from '@/components/sidebar/app-sidebar'
import { DynamicBreadcrumb } from '@workspace/ui/components/breadcrumb/dynamic-breadcrumb'
import { Separator } from '@workspace/ui/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@workspace/ui/components/ui/sidebar'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Service Dashboard',
  description: 'Service dashboard for NextJS Demo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}>
        <Providers>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                  />
                  <DynamicBreadcrumb rootTitle="Service Desk" />
                </div>
              </header>
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
            </SidebarInset>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  )
}
