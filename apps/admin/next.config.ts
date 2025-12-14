import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: [
    '@workspace/components',
    '@workspace/hooks',
    '@workspace/utils',
    '@workspace/types',
  ],
  experimental: {
    optimizePackageImports: ['@workspace/components'],
  },
}

export default nextConfig
