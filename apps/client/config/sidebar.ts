import { User, Home, Settings, FileText } from 'lucide-react'

export const sidebarData = {
  user: {
    name: 'Client User',
    email: 'client@nextjs-demo.com',
    avatar: 'https://github.com/shadcn.png',
  },
  teams: [
    {
      name: 'Client',
      logo: User,
      plan: 'Client Portal',
    },
    {
      name: 'Support',
      logo: Settings,
      plan: 'Get Help',
    },
  ],
  navGroups: [
    {
      title: 'Dashboard',
      items: [
        {
          title: 'Home',
          url: '/',
          icon: Home,
        },
        {
          title: 'Documents',
          url: '/documents',
          icon: FileText,
        },
      ],
    },
    {
      title: 'Account',
      items: [
        {
          title: 'Settings',
          url: '/settings',
          icon: Settings,
        },
        {
          title: 'Profile',
          url: '/profile',
          icon: User,
        },
      ],
    },
  ],
}
