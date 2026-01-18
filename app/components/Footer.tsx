import Link from "next/link";
import Image from "next/image";
import footerLocation from "../../public/footerLocation.png";
import footerCall from "../../public/footerCall.png";
import footerMail from "../../public/footerMail.png";

import footerMainLogo from "../../public/footerMainLogo.png";
import footerPlane from "../../public/footerPlane.png";


import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";

import "../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-container-top">
          <div className="footer-location-container">
            <div>
              <Image className="footer-location-icon" src={footerLocation} alt="Location" />
            </div>
            <div className="footer-location">
              Find Us <br />
              <span className="footer-text-bold">
                B-509, 5th Floor, Bestech Business Towers, <br />
                Sector 66, SAS Nagar, Punjab 160066
              </span>
            </div>
          </div>

          <div className="footer-contact-container">
            <div>
              <Image className="footer-contact-icon" src={footerCall} alt="Call" />
            </div>
            <div className="footer-contact">
              Call Us <br />
              <span className="footer-text-bold">
                91-8907400008
              </span>
            </div>
          </div>

          <div className="footer-mail-container">
            <div>
              <Image className="footer-mail-icon" src={footerMail} alt="Mail" />
            </div>
            <div className="footer-mail">
              Mail Us <br />
              <span className="footer-text-bold">
                info@adaired.com
              </span>
            </div>
          </div>
        </div>


        <div className="footer-container-bottom">
          <div className="footer-social-info">
            <Image className="footer-main-logo" src={footerMainLogo} alt="Main Logo" />
            AdAired Digital Media is a digital marketing company located in Mohali.
            We are a team of marketing and design experts who are committed to your online growth.
            <div className="footer-social-icons">
              <span className="footer-facebook-icon"><RiFacebookFill /></span>
              <span className="footer-twitter-icon"><FaXTwitter /></span>
              <span className="footer-instagram-icon"><RiInstagramLine /></span>
              <span className="footer-linkedin-icon"><RiLinkedinFill /></span>
            </div>
          </div>

          <div className="footer-content">
            <div className="footer-links">
              <span className="footer-content-heading">Useful links</span>
              <span className="footer-content-heading-line"></span>
              <ul className="footer-useful-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/career">Career</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-services">
              <span className="footer-content-heading">Services</span>
              <span className="footer-content-heading-line"></span>
              <ul className="footer-services-links">
                <li><Link href="/website-design">Website Designing & Development</Link></li>
                <li><Link href="/seo">Search Engine Optimization (SEO)</Link></li>
                <li><Link href="/digital-marketing">Digital Marketing Services USA</Link></li>
                <li><Link href="/digital-marketing-india">Digital Marketing Company India</Link></li>
                <li><Link href="/seo-services">SEO Services USA</Link></li>
                <li><Link href="/web-development">Web Development Company USA</Link></li>
              </ul>
            </div>

            <div className="footer-subscribe">
              <span className="footer-content-heading">Subscribe</span>
              <span className="footer-content-heading-line"></span>
              <p>Share your email address to subscribe to Adaired&apos;s newsletter.</p>
              <form className="footer-subscribe-form">
                <div className="footer-subscribe-wrapper">
                  <input type="email" className="footer-subscribe-input" placeholder="Email Address*" required />
                  <span className="footer-subscribe-button">
                    <Image className="footer-btn-plane" src={footerPlane} alt="Plane" />
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright © {new Date().getFullYear()} - AdAired Digital Media | Terms & Conditions / Privacy Policy
      </div>
    </footer >
  );
};

export default Footer;