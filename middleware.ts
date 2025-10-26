import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware({
  ...routing,
  localeDetection: false // Force EN at root; no redirect based on cookie/header
});

export const config = {
  matcher: ['/((?!_next|.*\\..*|favicon.ico|robots.txt|sitemap.xml|api).*)']
};
