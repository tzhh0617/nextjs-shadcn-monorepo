import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card'
import { Badge } from '@workspace/ui/components/badge'
import { Button } from '@workspace/ui/components/button'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      <div className="container mx-auto">
        <h1 className="mb-8 text-center text-4xl font-bold">Service Hub</h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Centralized service management platform for monitoring and maintaining all system services
        </p>

        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>API Gateway</CardTitle>
                <Badge variant="default" className="bg-green-500">
                  Online
                </Badge>
              </div>
              <CardDescription>Managing API requests and routing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Requests/sec</span>
                  <span>1,234</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Avg Response</span>
                  <span>45ms</span>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Database Service</CardTitle>
                <Badge variant="default" className="bg-green-500">
                  Online
                </Badge>
              </div>
              <CardDescription>Database connection management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Active Connections</span>
                  <span>42</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Query Performance</span>
                  <span>Excellent</span>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Auth Service</CardTitle>
                <Badge variant="secondary" className="bg-yellow-500 text-white">
                  Maintenance
                </Badge>
              </div>
              <CardDescription>Authentication and authorization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Status</span>
                  <span>Under Maintenance</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Scheduled End</span>
                  <span>2h 30m</span>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>File Storage</CardTitle>
                <Badge variant="default" className="bg-green-500">
                  Online
                </Badge>
              </div>
              <CardDescription>File and media storage service</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Storage Used</span>
                  <span>2.3 TB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Capacity</span>
                  <span>5 TB</span>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Email Service</CardTitle>
                <Badge variant="default" className="bg-green-500">
                  Online
                </Badge>
              </div>
              <CardDescription>Email sending and delivery</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Emails Queued</span>
                  <span>127</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Rate</span>
                  <span>99.8%</span>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Analytics</CardTitle>
                <Badge variant="default" className="bg-green-500">
                  Online
                </Badge>
              </div>
              <CardDescription>Data analytics and reporting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Events Today</span>
                  <span>892K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Processing</span>
                  <span>Real-time</span>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
