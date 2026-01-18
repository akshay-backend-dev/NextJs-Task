import Link from "next/link";
import Image from "next/image";
import logo from "../../public/mainLogo.png";

import { IoIosArrowDown } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";

import "../styles/navbar.css";

const Navbar: React.FC = () => {
  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">
            <Image className="logo" src={logo} alt="Logo" />
          </Link>
        </div>

        <nav className="navbar-menu">
          <Link href="/about">About</Link>
          <Link href="/services">Services <IoIosArrowDown /></Link>
          <Link href="/resources">Resources <IoIosArrowDown /></Link>
          <Link href="/contact-us">Contact Us</Link>
        </nav>

        <span className="navbar-bac-btn">Book a Call</span>
        <span className="navbar-arrow-circle">
          <FaArrowUpLong className="navbar-arrow" />
        </span>
      </div>
    </header >
  );
};

export default Navbar;