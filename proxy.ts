import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { findByLegacyTitle, workPath } from '@/content';

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Old shared links opened a modal with /?project=<title>; case studies now live at /work/<slug>.
  const legacy = pathname === '/' ? searchParams.get('project') : null;
  if (legacy) {
    const project = findByLegacyTitle(legacy);
    if (project) return NextResponse.redirect(new URL(workPath(project), request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
