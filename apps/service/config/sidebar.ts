import { User, Home, Settings, Activity, Database, Shield } from 'lucide-react'

export const sidebarData = {
  user: {
    name: 'Service Admin',
    email: 'service@nextjs-demo.com',
    avatar: 'https://github.com/shadcn.png',
  },
  teams: [
    {
      name: 'Service',
      logo: Activity,
      plan: 'Service Desk',
    },
    {
      name: 'Support',
      logo: Shield,
      plan: 'Technical Support',
    },
  ],
  navGroups: [
    {
      title: 'Services',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: Home,
        },
        {
          title: 'Database',
          url: '/database',
          icon: Database,
        },
        {
          title: 'Activity',
          url: '/activity',
          icon: Activity,
        },
      ],
    },
    {
      title: 'Management',
      items: [
        {
          title: 'Settings',
          url: '/settings',
          icon: Settings,
        },
        {
          title: 'Security',
          url: '/security',
          icon: Shield,
        },
      ],
    },
  ],
}
