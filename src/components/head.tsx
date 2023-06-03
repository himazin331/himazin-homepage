/** ページ毎カスタムHead */

import Head from "next/head";
import React from "react";
import type {Thumbnail} from "@/types/blog";

interface CustomHeadProps {
  title?: string;
  description?: string;
  ogImage?: Thumbnail;
  originUrl: string;
}

const CustomHead: React.FC<CustomHeadProps> = ({ title, description, ogImage, originUrl })
                                              : React.ReactElement => {
  const siteName: string = "himazin331's page";
  if (title === undefined) {
    title = siteName;
  } else {
    title = `${title} | ${siteName}`;
  }
  if (description === undefined) {
    description = "ゆるゆるITエンジニアhimazin331の普通のホームページ";
  }
  let ogImageUrl: string;
  if (ogImage !== undefined) {
    ogImageUrl = ogImage.url;
  } else {
    ogImageUrl = "https://himazin331.com/images/favicon.ico";
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* <!-- OGP --> */}
      <meta property="og:type" content="website" /> 
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={originUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      {/* <!-- facebook OGP --> */}
      <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FB_ID || "fb_id_undefined"} />
      {/* <!-- twitter OGP --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={process.env.NEXT_PUBLIC_TW_ID || "tw_id_undefined"} />
    </Head>
  );
};
export default CustomHead;
