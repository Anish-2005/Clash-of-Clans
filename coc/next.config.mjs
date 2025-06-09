/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'pixelcrux.com',
      },
      {
        protocol: 'https',
        hostname: 'img.tapimg.net',
      },
      {
        protocol: 'https',
        hostname: 'api-assets.clashofclans.com',
      },
      {
        protocol: 'https',
        hostname: 'cloud.frankeapps.com',
      },
      {
        protocol: 'https',
        hostname: 'www.clasher.us',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
    ],
  },
};

export default nextConfig;
