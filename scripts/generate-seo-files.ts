import { writeFileSync } from 'fs';
import { join } from 'path';
import { siteConfig } from '../src/config/site';

const publicDir = join(process.cwd(), 'public');

// Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteConfig.baseUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

// Generate robots.txt
const robots = `# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${siteConfig.sitemapUrl}
`;

// Write files
writeFileSync(join(publicDir, 'sitemap.xml'), sitemap);
writeFileSync(join(publicDir, 'robots.txt'), robots);

console.log('✅ Generated sitemap.xml and robots.txt from site config');
console.log(`   Base URL: ${siteConfig.baseUrl}`);
console.log(`   Sitemap: ${siteConfig.sitemapUrl}`);
