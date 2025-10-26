import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  trailingSlash: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      // Redirect /en to root (English should be at root)
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
      // Existing redirects
      { source: '/es-es', destination: '/es', permanent: true },
      { source: '/es-es/:path*', destination: '/es/:path*', permanent: true },
      { source: '/ultancy-liquidity-provider', destination: '/ultency-liquidity-provider', permanent: true },
      { source: '/es/ultancy-proveedor-liquidez', destination: '/es/ultency-proveedor-liquidez', permanent: true },
      { source: '/ja/ultancy-liquidity-provider', destination: '/ja/ultency-liquidity-provider', permanent: true }
    ];
  }
};

export default withNextIntl(nextConfig);
