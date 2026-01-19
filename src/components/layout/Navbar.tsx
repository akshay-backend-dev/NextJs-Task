"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import { IoIosArrowDown } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-32 w-full items-center justify-center">
      <div className="flex h-23 w-84/100 items-center gap-2 rounded-full border-b border-gray-200 bg-white px-4 pl-7">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/navbar/mainLogo.svg"
            alt="Logo"
            width={130}
            height={65}
            priority
          />
        </Link>

        {/* Menu */}
        <nav className="ml-70 flex h-15 w-40/100 items-center justify-center gap-2 rounded-full bg-orange-50">
          <NavItem href="/about">About Us</NavItem>

          <NavItem href="/services">
            Services <IoIosArrowDown />
          </NavItem>

          <NavItem href="/resources">
            Resources <IoIosArrowDown />
          </NavItem>

          <NavItem href="/contact-us">Contact Us</NavItem>
        </nav>

        {/* Book a Call */}
        <Link href="/contact-us">
          <span className="ml-65 flex h-13 w-56 text-lg cursor-pointer items-center justify-center active:scale-95 rounded-full border border-black transition hover:bg-[#FB9100] hover:text-white hover:border-transparent">
            Book a Call
          </span>
        </Link>

        {/* Arrow Button */}
        <Link href="/contact-us">
          <span className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#FB9100] animate-pulse-scale rotate-45 transition-transform duration-500 hover:rotate-90">
            <FaArrowUpLong className="text-lg text-white" />
          </span>
        </Link>

      </div>
    </header>
  );
};

export default Navbar;

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex items-center gap-0.5
        rounded-full px-5 py-1.5
        text-lg transition

        ${isActive
          ? "bg-[#FB9100] text-white"
          : "text-black hover:bg-[#FB9100] hover:text-white"}
      `}
    >
      {children}
    </Link>
  );
};