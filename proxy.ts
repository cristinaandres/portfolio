import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { findByLegacyTitle, workPath } from '@/content';
import { VARIANT_COOKIE, VARIANT_PARAM, isVariantId, variantsEnabled } from '@/variants/config';

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Old shared links opened a modal with /?project=<title>; case studies now live at /work/<slug>.
  const legacy = pathname === '/' ? searchParams.get('project') : null;
  if (legacy) {
    const project = findByLegacyTitle(legacy);
    if (project) return NextResponse.redirect(new URL(workPath(project), request.url), 308);
  }

  // Outside production, ?variant=a|b|c picks a variant: this request renders it at once, and a
  // cookie keeps it for the next pages.
  const variant = searchParams.get(VARIANT_PARAM);
  if (variantsEnabled() && isVariantId(variant)) {
    request.cookies.set(VARIANT_COOKIE, variant);
    const response = NextResponse.next({ request: { headers: request.headers } });
    response.cookies.set(VARIANT_COOKIE, variant, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  // Pages only: skip Next internals, API routes and files with an extension.
  matcher: ['/((?!_next/|api/|.*\\..*).*)'],
};
