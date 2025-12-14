export default [
  {
    // Basic configuration for all files
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      // Build outputs
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      // Dependencies
      'node_modules/**',
      'pnpm-lock.yaml',
      // Coverage
      'coverage/**',
      // Temporary files
      '*.log',
      '.DS_Store',
      'Thumbs.db',
    ],
    rules: {},
  },
]
