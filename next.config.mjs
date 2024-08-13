/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV;

const nextConfig = {
  basePath: isProd ? "" : "",
};

export default nextConfig;
