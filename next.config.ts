import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use the updated serverExternalPackages instead of deprecated experimental option
  serverExternalPackages: [],
  // Suppress hydration warnings for browser extension attributes
  reactStrictMode: false,
  // Handle browser extension hydration issues
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Output configuration for Netlify Functions
  output: process.env.NETLIFY === 'true' ? 'export' : undefined,
  // Disable image optimization for Netlify
  images: {
    unoptimized: process.env.NETLIFY === 'true',
  },
  // Ensure proper trailing slashes
  trailingSlash: process.env.NETLIFY === 'true' ? true : false,
};

export default nextConfig;
