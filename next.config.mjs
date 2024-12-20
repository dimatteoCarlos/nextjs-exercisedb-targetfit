/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v2.exercisedb.io',
        pathname: '/image/**', // Asegúrate de que el patrón de la ruta es correcto
      },
      {
        protocol: 'https',
        hostname: '**.ytimg.com',
        pathname: '/**',
        // O cualquier otro patrón que cubra la URL
      },
    ],
  },

  experimental: {
    missingSuspenseWithCSRBailout: false,
  },

};

export default nextConfig;
