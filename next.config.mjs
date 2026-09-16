/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://www.forpips.com/blog/author/john/",
        permanent: false,
      },
      {
        source: "/blog/:path*",
        destination: "https://www.forpips.com/blog/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;