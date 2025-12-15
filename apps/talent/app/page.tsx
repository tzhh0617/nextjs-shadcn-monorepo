import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/avatar'
import { Badge } from '@workspace/ui/components/badge'
import { Button } from '@workspace/ui/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="container mx-auto">
        <h1 className="mb-8 text-center text-4xl font-bold">Talent Portal</h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Connect with talented professionals and discover amazing opportunities
        </p>

        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/shadcn.png" alt="Alice Chen" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Alice Chen</CardTitle>
                  <CardDescription>Senior Frontend Developer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                5+ years of experience building scalable web applications with modern frameworks.
              </p>
              <Button className="w-full">View Profile</Button>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>BJ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Bob Johnson</CardTitle>
                  <CardDescription>Backend Engineer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Docker</Badge>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                Specialized in building microservices and cloud infrastructure solutions.
              </p>
              <Button className="w-full">View Profile</Button>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Sarah Miller</CardTitle>
                  <CardDescription>UI/UX Designer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary">Figma</Badge>
                <Badge variant="secondary">Adobe XD</Badge>
                <Badge variant="secondary">Prototyping</Badge>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                Creating intuitive and beautiful user experiences for web and mobile applications.
              </p>
              <Button className="w-full">View Profile</Button>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>DL</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">David Lee</CardTitle>
                  <CardDescription>DevOps Engineer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary">Kubernetes</Badge>
                <Badge variant="secondary">CI/CD</Badge>
                <Badge variant="secondary">Terraform</Badge>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                Automating deployment pipelines and managing cloud infrastructure at scale.
              </p>
              <Button className="w-full">View Profile</Button>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>EK</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Emma Kim</CardTitle>
                  <CardDescription>Product Manager</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary">Strategy</Badge>
                <Badge variant="secondary">Agile</Badge>
                <Badge variant="secondary">Analytics</Badge>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                Driving product vision and leading cross-functional teams to deliver value.
              </p>
              <Button className="w-full">View Profile</Button>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Michael Rodriguez</CardTitle>
                  <CardDescription>Mobile Developer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary">React Native</Badge>
                <Badge variant="secondary">Flutter</Badge>
                <Badge variant="secondary">iOS</Badge>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                Building native and cross-platform mobile applications with exceptional UX.
              </p>
              <Button className="w-full">View Profile</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="mr-4">
            Browse All Talent
          </Button>
          <Button size="lg" variant="outline">
            Join as Talent
          </Button>
        </div>
      </div>
    </div>
  )
}
