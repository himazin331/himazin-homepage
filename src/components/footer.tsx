/** フッター */

import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer>
      <ul className="nav justify-content-center footer-nav">
        <li className="nav-item">
            <Link className="nav-link" href="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" href="/sitepolicy">Policy</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" href="https://nakayumc.com" target="_blank" rel="noopener noreferrer">nakayumc0278さんのページ</Link>
        </li>
      </ul>

      <span>Copyright © {new Date().getFullYear()} himazin331. All Rights Reserved.</span>
    </footer>
  );
};
export default Footer;
