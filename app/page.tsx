import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./globals.css";

export default function Home() {
  return (
    <>
      <section className="landing-page">
        <Navbar />
        <div className="content">
          <h1>Welcome to Our Website</h1>
          <p>Your gateway to exceptional services and resources.</p>
        </div>
        <Footer />
      </section>
    </>
  );
}