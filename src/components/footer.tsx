/** フッター */

import type { NextPage } from "next";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";

const Footer: NextPage = () => {
  return (
    <footer>
      <Nav className="justify-content-center footer-nav">
        <Nav.Link href="/" as={Link}>Home</Nav.Link>
        <Nav.Link href="/blog" as={Link}>Blog</Nav.Link>
        <Nav.Link href="/sitepolicy" as={Link}>Policy</Nav.Link>
        <Nav.Link href="https://nakayumc.com" target="_blank" rel="noopener noreferrer">nakayumc0278さんのページ</Nav.Link>
      </Nav>

      <span>Copyright © {new Date().getFullYear()} himazin331. All Rights Reserved.</span>
    </footer>
  );
};
export default Footer;
