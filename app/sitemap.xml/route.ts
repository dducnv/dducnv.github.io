import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const appDir = path.join(process.cwd(), 'app');

function getRoutes(dir: string, baseUrl = ''): string[] {
  let routes: string[] = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (file.startsWith('_') || file === 'layout.tsx' || file === 'globals.css' || file === '.DS_Store') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Bỏ qua các folder đặc biệt nếu muốn
      if (['api', 'sitemap.xml'].includes(file)) continue;
      routes = routes.concat(getRoutes(fullPath, baseUrl + '/' + file));
    } else if (
      file === 'page.tsx' ||
      file === 'page.js' ||
      file === 'route.ts' ||
      file === 'route.js'
    ) {
      // Bỏ /page.tsx, /route.ts, chỉ lấy đường dẫn thư mục
      let route = baseUrl || '/';
      // Đặc biệt: nếu là /app/page.tsx thì là trang chủ
      if (route === '') route = '/';
      routes.push(route);
    }
  }
  return routes;
}

export async function GET() {
  const baseUrl = 'https://dducnv.github.io';
  const routes = getRoutes(appDir);

  const urls = routes.map(
    (route) => `
      <url>
        <loc>${baseUrl}${route}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `
  ).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 