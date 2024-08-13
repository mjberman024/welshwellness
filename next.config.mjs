/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "welsh-wellness.s3.amazonaws.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
