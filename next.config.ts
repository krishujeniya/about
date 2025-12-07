import type { NextConfig } from 'next';
import { GITHUB_REPO } from './src/config/site';

const nextConfig: NextConfig = {
  output: 'export', // Export as a static site
  basePath: process.env.NODE_ENV === 'production' ? `/${GITHUB_REPO}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${GITHUB_REPO}/` : '',
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
