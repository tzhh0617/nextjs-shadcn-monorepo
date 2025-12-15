'use client'

import * as React from 'react'
import { AppSidebar as SharedAppSidebar } from '@workspace/ui/components/sidebar/app-sidebar'
import { sidebarData } from '@/config/sidebar'

export function AppSidebar({
  ...props
}: Omit<React.ComponentProps<typeof SharedAppSidebar>, 'data'>) {
  return <SharedAppSidebar {...props} data={sidebarData} />
}
