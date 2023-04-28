/** レンダリング後共通レイアウト */

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import Header from "@/components/header";
import "@/styles/global.css";

const Homepage: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <Head>
          {/* Icons */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
      </Head>
      {/* <!-- Bootstrap JavaScript --> */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous" />
      <Header pathname={router.pathname} />
      <Component {...pageProps} />
    </>
  );
};
export default Homepage;
