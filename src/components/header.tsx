/** ヘッダー */

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  pathname: string;
}

const Header: NextPage<HeaderProps> = ({ pathname }) => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" href="/" passHref>
          <Image className="navbar-brand-img" src="/images/header_picture.png" alt="himazin331" 
            width={500} height={43} style={{objectFit: "contain"}} />
        </Link>
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
          aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
    
        <div className="collapse navbar-collapse justify-content-end" id="navbar">
          <div className="navbar-nav text-center">
            <Link className={"nav-item nav-link " + (pathname === "/" ? "active" : "")} href="/">Home</Link>
            <Link className={"nav-item nav-link " + (pathname === "/blog" ? "active" : "")} href="/blog">Blog</Link>
            <Link className={"nav-item nav-link " + (pathname === "/skills" ? "active" : "")} href="/skills">Skills</Link>
            <Link className={"nav-item nav-link " + (pathname === "/portfolio" ? "active" : "")} href="/portfolio">Portfolio</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
