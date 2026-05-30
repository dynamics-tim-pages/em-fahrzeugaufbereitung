import { legalLinks, siteMeta } from '@/data/site';

const routes = ['/', ...legalLinks.map((link) => link.href)];

export async function GET() {
  const urls = routes
    .map((route) => {
      const loc = new URL(route, siteMeta.baseUrl).toString();
      return `<url><loc>${loc}</loc></url>`;
    })
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    },
  );
}
