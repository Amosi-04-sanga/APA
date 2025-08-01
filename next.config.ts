import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["randomuser.me"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
