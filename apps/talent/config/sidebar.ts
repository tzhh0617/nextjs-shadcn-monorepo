import { User, Home, Settings, Users, Briefcase, Star } from 'lucide-react'

export const sidebarData = {
  user: {
    name: 'Talent Manager',
    email: 'talent@nextjs-demo.com',
    avatar: 'https://github.com/shadcn.png',
  },
  teams: [
    {
      name: 'Talent',
      logo: Users,
      plan: 'Talent Portal',
    },
    {
      name: 'Recruiting',
      logo: Briefcase,
      plan: 'Hiring Team',
    },
  ],
  navGroups: [
    {
      title: 'Talent',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: Home,
        },
        {
          title: 'Candidates',
          url: '/candidates',
          icon: Users,
        },
        {
          title: 'Positions',
          url: '/positions',
          icon: Briefcase,
        },
      ],
    },
    {
      title: 'Management',
      items: [
        {
          title: 'Top Talent',
          url: '/top-talent',
          icon: Star,
        },
        {
          title: 'Settings',
          url: '/settings',
          icon: Settings,
        },
      ],
    },
  ],
}
