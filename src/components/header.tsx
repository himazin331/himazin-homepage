/** ヘッダー */

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

interface HeaderProps {
  pathName: string;
}

const Header: NextPage<HeaderProps> = ({ pathName }) => {
  return (
    <header className="sticky-top">
      <Navbar className="header-navbar" variant="dark" expand="lg" collapseOnSelect>
        <Navbar.Brand href="/" as={Link}>
          <Image src="/images/header_picture.png" alt="himazin331" 
            width={500} height={43} style={{objectFit: "contain"}} />
        </Navbar.Brand>
    
        <Navbar.Toggle aria-controls="navbar" label="Toggle navigation" />
        <Navbar.Collapse className="justify-content-end" id="navbar">
          <Nav className="text-center">
            <Nav.Link active={pathName === "/"} href="/" as={Link}>Home</Nav.Link>
            <Nav.Link active={pathName.indexOf("blog") !== -1} href="/blog" as={Link}>Blog</Nav.Link>
            <Nav.Link active={pathName === "/skills"} href="/skills" as={Link}>Skills</Nav.Link>
            <Nav.Link active={pathName === "/portfolio"} href="/portfolio" as={Link}>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
