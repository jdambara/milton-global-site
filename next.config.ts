import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      { source: '/es-es', destination: '/es', permanent: true },
      { source: '/es-es/:path*', destination: '/es/:path*', permanent: true },
      { source: '/ultancy-liquidity-provider', destination: '/ultency-liquidity-provider', permanent: true },
      { source: '/es/ultancy-proveedor-liquidez', destination: '/es/ultency-proveedor-liquidez', permanent: true },
      { source: '/ja/ultancy-liquidity-provider', destination: '/ja/ultency-liquidity-provider', permanent: true }
    ];
  }
};

export default withNextIntl(nextConfig);
