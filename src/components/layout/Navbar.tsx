"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import { IoIosArrowDown } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-28 w-full items-center justify-center">
      <div className="flex h-20 w-4/5 items-center gap-3 rounded-full border-b border-gray-200 bg-white px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/navbar/mainLogo.png"
            alt="Logo"
            width={150}
            height={48}
            priority
          />
        </Link>

        {/* Menu */}
        <nav className="ml-20 flex h-12 w-1/2 items-center justify-center gap-4 rounded-full bg-orange-50">
          <NavItem href="/about">About</NavItem>

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
          <span className="ml-16 flex h-12 w-56 cursor-pointer items-center justify-center active:scale-95 rounded-full border border-black transition hover:bg-[#FB9100] hover:text-white hover:border-transparent">
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
        flex items-center gap-1
        rounded-full px-5 py-1.5
        text-sm transition

        ${isActive
          ? "bg-[#FB9100] text-white"
          : "text-black hover:bg-[#FB9100] hover:text-white"}
      `}
    >
      {children}
    </Link>
  );
};