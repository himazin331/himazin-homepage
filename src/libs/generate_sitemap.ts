/* sitemap自動生成 */

import { microcms } from "@/libs/microcms";
import type { Blog } from "@/types/blog";

interface FieldObject {
  path: string;
  lastmod: string;
}

const generateSitemapXml = async (): Promise<string> => {
  const defaultLastmod: string = new Date().toISOString();
  const blogs = await microcms.get({ endpoint: "blog" });
  const articleFields: Array<FieldObject> = blogs.contents.map((blog: Blog) => {
    return {
      path: `/blog/${blog.id}`,
      lastmod: blog.publishedAt || defaultLastmod
    };
  });

  const otherFields: Array<FieldObject> = [
    {
      path: "/blog/genres",
      lastmod: defaultLastmod
    },
    {
      path: "/blog/tags",
      lastmod: defaultLastmod
    }
  ];

  const fields = articleFields.concat(otherFields);

  let xml: string = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  fields.forEach((field: FieldObject) => {
    const url: URL = new URL(
      field.path,
      "https://himazin331.com"
    );

    xml += `
      <url>
        <loc>${url.toString().replace(/\/$/, '')}</loc>
        <lastmod>${field.lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
    `;
  });
  xml += `</urlset>`;

  return xml;
};
export default generateSitemapXml;