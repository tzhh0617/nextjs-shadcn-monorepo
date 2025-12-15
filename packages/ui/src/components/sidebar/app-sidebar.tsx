'use client'

import * as React from 'react'

import { Nav } from '@workspace/ui/components/sidebar/nav'
import { NavUser } from '@workspace/ui/components/sidebar/nav-user'
import { TeamSwitcher } from '@workspace/ui/components/sidebar/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@workspace/ui/components/sidebar'

export interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: {
    user: React.ComponentProps<typeof NavUser>['user']
    teams: React.ComponentProps<typeof TeamSwitcher>['teams']
    navGroups: React.ComponentProps<typeof Nav>['groups']
  }
}

export function AppSidebar({ data, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <Nav groups={data.navGroups} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
