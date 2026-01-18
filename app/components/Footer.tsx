import Link from "next/link";
import Image from "next/image";
import footerBg from "../../public/footerBg.png";
import "../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Image src={footerBg} alt="Footer Bg" className="footer-bg" />

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-services">
          <h4>Services</h4>
          <p>Web Development</p>
          <p>Mobile Apps</p>
          <p>UI/UX Design</p>
          <p>Digital Marketing</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: info@yourbrand.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright © {new Date().getFullYear()} - AdAired Digital Media | Terms & Conditions / Privacy Policy
      </div>
    </footer>
  );
};

export default Footer;