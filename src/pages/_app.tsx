/** レンダリング後共通レイアウト */

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header from "@/components/header";
import "@/styles/global.css";

const Homepage: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <Header pathname={router.pathname} />
      <Component {...pageProps} />
    </>
  );
};
export default Homepage;
