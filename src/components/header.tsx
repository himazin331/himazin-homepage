/** ヘッダー */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

interface HeaderProps {
  asPath: string;
}

const Header: React.FC<HeaderProps> = ({ asPath }): React.ReactElement => {
  return (
    <header className="sticky-top">
      <Navbar className="header-navbar" variant="dark" expand="lg" collapseOnSelect>
        <Navbar.Brand href="/" as={Link}>
          <Image src="/images/header_picture.png" alt="himazin331" 
            width={500} height={60} style={{objectFit: "contain"}} />
        </Navbar.Brand>
    
        <Navbar.Toggle aria-controls="navbar" label="Toggle navigation" />
        <Navbar.Collapse className="justify-content-end" id="navbar">
          <Nav className="text-center">
            <Nav.Link active={asPath === "/"} href="/" as={Link}>Home</Nav.Link>
            <Nav.Link active={asPath.indexOf("blog") !== -1} href="/blog" as={Link}>Blog</Nav.Link>
            <Nav.Link active={asPath === "/skills"} href="/skills" as={Link}>Skills</Nav.Link>
            <Nav.Link active={asPath === "/portfolio"} href="/portfolio" as={Link}>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
