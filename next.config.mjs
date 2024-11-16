/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thvupyklxwvkawmeocvo.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabins-image/**",
      },
    ],
  },
};

export default nextConfig;
