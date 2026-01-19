import Link from "next/link";
import Image from "next/image";

import footerLocation from "@/public/images/footer/footerLocation.png";
import footerCall from "@/public/images/footer/footerCall.png";
import footerMail from "@/public/images/footer/footerMail.png";
import footerMainLogo from "@/public/images/footer/footerMainLogo.png";
import footerPlane from "@/public/images/footer/footerPlane.png";

import { RiFacebookFill, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full text-white">
      {/* MAIN FOOTER */}
      <div
        className="flex w-full flex-col items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/footer/footerBg.png')" }}
      >
        {/* TOP */}
        <div className="mt-12 flex w-4/5 items-start gap-8">
          {/* Location */}
          <a
            href="https://maps.app.goo.gl/CEMtUbQd1246YQ3c7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer gap-3"
          >
            <Image src={footerLocation} alt="Location" className="h-12 w-12" />
            <div className="text-lg leading-relaxed">
              Find Us <br />
              <span className="font-bold">
                B-509, 5th Floor, Bestech Business Towers, <br />
                Sector 66, SAS Nagar, Punjab 160066
              </span>
            </div>
          </a>

          {/* Call */}
          <a
            href="tel:+918907400008"
            className="flex cursor-pointer gap-3"
          >
            <Image src={footerCall} alt="Call" className="h-12 w-12" />
            <div className="text-lg leading-relaxed">
              Call Us <br />
              <span className="font-bold">91-8907400008</span>
            </div>
          </a>

          {/* Mail */}
          <a
            href="mailto:info@adaired.com"
            className="flex cursor-pointer gap-3"
          >
            <Image src={footerMail} alt="Mail" className="h-12 w-12" />
            <div className="text-lg leading-relaxed">
              Mail Us <br />
              <span className="font-bold">info@adaired.com</span>
            </div>
          </a>
        </div>


        {/* DIVIDER */}
        <div className="mt-8 w-4/5 border-t border-[#E5E7EB]/70 pt-8" />

        {/* CONTENT */}
        <div className="flex w-4/5 gap-8 pb-12">
          {/* Left */}
          <div className="flex w-1/2 flex-col gap-6">
            <Image src={footerMainLogo} alt="Logo" />
            <p>
              AdAired Digital Media is a digital marketing company located in
              Mohali. We are a team of marketing and design experts who are committed to
              your online growth.
            </p>

            <div className="flex gap-5">
              {[
                { Icon: RiFacebookFill, href: "https://www.facebook.com/adaired.digital/" },
                { Icon: FaXTwitter, href: "https://x.com/adaireddigital/" },
                { Icon: RiInstagramLine, href: "https://www.instagram.com/adaired.digital" },
                { Icon: RiLinkedinFill, href: "https://www.linkedin.com/company/adaired/mycompany/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-[#1B5A96] transition hover:text-[#FB9100]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

          </div>

          {/* Right */}
          <div className="flex w-full gap-12">
            {/* Useful Links */}
            <div className="w-1/4">
              <h4 className="text-lg font-bold">Useful links</h4>
              <span className="my-3 block h-0.5 w-14 bg-[#FB9100]" />
              <ul className="flex flex-col gap-2">
                {[
                  ["Home", "/"],
                  ["About", "/about"],
                  ["Blog", "/blog"],
                  ["Case Studies", "/case-studies"],
                  ["Career", "/career"],
                  ["Contact Us", "/contact-us"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="transition hover:text-[#FB9100]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="w-1/2">
              <h4 className="text-lg font-bold">Services</h4>
              <span className="my-3 block h-0.5 w-14 bg-[#FB9100]" />
              <ul className="flex flex-col gap-2">
                {[
                  "Website Designing & Development",
                  "Search Engine Optimization (SEO)",
                  "Digital Marketing Services USA",
                  "Digital Marketing Company India",
                  "SEO Services USA",
                  "Web Development Company USA",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="#"
                      className="transition hover:text-[#FB9100]"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe */}
            <div className="w-[45%]">
              <h4 className="text-lg font-bold">Subscribe</h4>
              <span className="my-3 block h-0.5 w-14 bg-[#FB9100]" />
              <p className="mb-3">
                Share your email address to subscribe to Adaired&apos;s
                newsletter.
              </p>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="h-12 w-full rounded-full px-4 text-sm text-black outline-none bg-white"
                />
                <button className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#FB9100] transition hover:bg-[#e67f00] cursor-pointer">
                  <Image src={footerPlane} alt="Plane" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex h-14 items-center justify-center bg-gray-100 text-sm text-black">
        © {new Date().getFullYear()} AdAired Digital Media | Terms & Conditions /
        Privacy Policy
      </div>
    </footer >
  );
};

export default Footer;
