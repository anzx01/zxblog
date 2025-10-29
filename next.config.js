/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Disable worker threads to resolve Jest worker issues
    workerThreads: false,
    // Optimize build process
    optimizePackageImports: ['classnames'],
  },
  webpack: (config, { dev, isServer }) => {
    // Disable all parallelism during development
    if (dev) {
      config.parallelism = 1;
      // Configure webpack watch options
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    // Force disable all worker threads through aliasing
    config.resolve.alias = {
      ...config.resolve.alias,
      'jest-worker': false,
      'worker_threads': false,
    };

    return config;
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
}

module.exports = nextConfig