import type { NextConfig } from "next";

// Configuración para GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "");
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix,
  basePath,
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/yefrasoft/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "yefrasoft.github.io",
        pathname: "/direccionCorrectav2/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "YefraSoft/direccionCorrectav2/blob/master/public/**",
      },
    ],
  },
};

export default nextConfig;
