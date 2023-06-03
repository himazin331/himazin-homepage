/** レンダリング後共通レイアウト */

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import Header from "@/components/header";
import { usePageView, GoogleAnalytics } from "@/libs/gtag";
import "@/styles/global.css";

declare global {
  var twttr: any;
}

const Homepage: NextPage<AppProps, JSX.Element> = ({ Component, pageProps }) => {
  const asPath: string = useRouter().asPath;
  // Twitter埋め込みロードをレンダリング後に実行
  useEffect(
    () => {
      try {
        window.twttr.widgets.load();
      } catch (err) {
        /* pass */
      }
    },
    [asPath]
  );
  usePageView();

  return (
    <>
      <GoogleAnalytics />
      {/* Bootstrap JavaScript */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous" />
      <Header asPath={asPath} />
      <Component {...pageProps} />
    </>
  );
};
export default Homepage;
