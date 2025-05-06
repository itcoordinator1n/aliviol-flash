import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // ⇐<<< quita cualquier regla manual de css-loader o postcss-loader aquí
    return config;
  },
};

export default nextConfig;
