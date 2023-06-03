/* ダミーページ */
/* /blog/pages -> /blog遷移 */

import type { NextPage } from "next";
import type { NextRouter } from "next/router";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotPages: NextPage<JSX.Element> = () => {
    const router: NextRouter = useRouter();
    useEffect(() => {
        router.push('/blog');
    });

  return (
    <>
        Redirecting...
    </>
  );
};
export default NotPages;