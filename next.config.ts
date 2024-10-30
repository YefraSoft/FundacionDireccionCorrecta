import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/yefrasoft/image/upload/**", // Ruta base para permitir cualquier imagen en este subdirectorio
      },
    ],
  },
};

export default nextConfig;
