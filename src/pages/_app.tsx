/** レンダリング後共通レイアウト */

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import Header from "@/components/header";
import "@/styles/global.css";

declare global {
  var twttr: any;
}

const Homepage: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(
    () => {
      try {
        window.twttr.widgets.load();
      } catch (err) {
        console.error(err);
      }
    },
    [router.asPath]
  );

  return (
    <>
      <Head>
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
      </Head>
      {/* Bootstrap JavaScript */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous" />
      {/* Twitter JavaScript */}
      <Script src="https://platform.twitter.com/widgets.js" charSet="utf-8"/>
      <Header pathName={router.pathname} />
      <Component {...pageProps} />
    </>
  );
};
export default Homepage;
