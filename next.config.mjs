/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  // async generateStaticParams() {
  //   return {
  //     "/": { page: "/" },
  //     "/committee": { page: "/committee" },
  //     "/404": { page: "/not-found" },
  //     "/500": { page: "/error" },
  //     "/_error": { page: "/error" },
  //     "/_not-found": { page: "/not-found" },
  //   };
  // },
};

export default nextConfig;
