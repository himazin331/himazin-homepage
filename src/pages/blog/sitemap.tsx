/* sitemap */

import type { GetServerSideProps } from "next";
import generateSitemapXml from "@/libs/generate_sitemap";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const xml: string = await generateSitemapXml();

  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 24時間のキャッシュ
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};

const SitemapPage = (): void => {
  return;
};
export default SitemapPage;