import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow importing images from src/imports
  images: {
    unoptimized: true,
  },
  // Transpile motion package for Next.js App Router compatibility
  transpilePackages: ["motion"],
};

export default nextConfig;
