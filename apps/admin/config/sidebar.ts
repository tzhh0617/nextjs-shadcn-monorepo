import { User, Home, Shield, Users } from 'lucide-react'

export const sidebarData = {
  user: {
    name: 'Admin',
    email: 'admin@nextjs-demo.com',
    avatar: 'https://github.com/shadcn.png',
  },
  teams: [
    {
      name: 'My',
      logo: User,
      plan: 'My Work',
    },
    {
      name: 'Manager',
      logo: Users,
      plan: 'View Team Data',
    },
    {
      name: 'Admin',
      logo: Shield,
      plan: 'Administration',
    },
  ],
  navGroups: [
    {
      title: 'Dashboard',
      items: [
        {
          title: 'Overview',
          url: '/',
          icon: Home,
        },
        {
          title: 'Analytics',
          url: '/analytics',
          icon: Home,
        },
      ],
    },
    {
      title: 'Management',
      items: [
        {
          title: 'Users',
          url: '/users',
          icon: Users,
        },
        {
          title: 'Settings',
          url: '/settings',
          icon: Shield,
        },
      ],
    },
  ],
}
