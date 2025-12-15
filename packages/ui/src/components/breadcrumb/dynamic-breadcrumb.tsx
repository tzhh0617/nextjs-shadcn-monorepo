'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@workspace/ui/components/ui/breadcrumb'

interface DynamicBreadcrumbProps {
  rootTitle?: string
  rootHref?: string
  nonClickableSegments?: string[]
}

export function DynamicBreadcrumb({
  rootTitle = 'Home',
  rootHref = '/',
  nonClickableSegments = [],
}: DynamicBreadcrumbProps) {
  const pathname = usePathname()
  const segments = pathname.split('/').filter((item: string) => item !== '')

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment: string, index: number) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`
          const isLast = index === segments.length - 1
          const isNonClickable = nonClickableSegments.includes(segment)
          const title = segment
            .split('-')
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

          return (
            <React.Fragment key={href}>
              {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
              <BreadcrumbItem className="hidden md:block">
                {isLast || isNonClickable ? (
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
