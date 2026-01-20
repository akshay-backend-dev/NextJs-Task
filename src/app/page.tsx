import Image from "next/image";

import { FaArrowUpLong } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <section className="min-h-screen w-full bg-[url('/images/home/homeHeroBg.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex h-[70%] w-[82%] items-center justify-between mt-22.5">

          {/* LEFT */}
          <div className="w-[42%]">

            {/* Rounded bar */}
            <div className="flex h-7.5 w-72.5 items-center gap-2 rounded-full border border-black/20 px-4 text-[0.9rem] uppercase">
              <Image
                src="/images/home/homeHeroStar.png"
                alt="Star"
                width={20}
                height={20}
              />
              <span>Gain Visibility That Converts</span>
            </div>

            {/* Heading */}
            <h1 className="mt-5 text-[3.75rem] font-bold leading-[1.1]">
              Result-Driven Digital Marketing Agency for Scalable Growth
            </h1>

            {/* Description */}
            <p className="mt-4 text-[1.1rem]">
              From Google searches to AI chats, we make sure your brand is visible
              to your customers wherever they look.
            </p>

            {/* Avatars + Rating */}
            <div className="mt-5 flex items-center gap-4">

              {/* Avatars */}
              <div className="relative h-12.5 w-42.5">
                {["home1", "home2", "home3", "home4", "home5"].map((img, i) => (
                  <Image
                    key={img}
                    src={`/images/home/${img}.png`}
                    alt="Client"
                    width={50}
                    height={50}
                    style={{ left: `${i * 30}px`, zIndex: i + 10 }}
                    className={`absolute rounded-full border-2 border-white ${img === "home5" ? "animate-pulse-scale" : ""}`}
                  />
                ))}
              </div>

              {/* Stars */}
              <div className="flex items-center gap-2">
                <span className="text-[1.4rem] text-[#FB9100] tracking-[-2px]">
                  ★★★★★
                </span>
                <span className="text-[1rem] text-gray-700">
                  4.9/5 by 1K+ Clients
                </span>
              </div>
            </div>

            {/* Partners */}
            <div className="mt-4 flex items-center gap-4">
              <Image
                src="/images/home/homeGooglePartner.png"
                alt="Google Partner"
                width={200}
                height={60}
              />
              <span className="text-xl opacity-40">|</span>
              <Image
                src="/images/home/homeUpWork.png"
                alt="Upwork"
                width={130}
                height={60}
              />
            </div>

            {/* Data text */}
            <p className="mt-5 text-[1.09rem] leading-[1.6] text-justify">
              Generate leads by 15% or more within your first 6 months with
              real-time data and expert insights. Our strategy ensures that your
              brand reaches the right people, produces measurable results, and
              effectively expands across digital channels.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">

              {/* Primary */}
              <button className="group flex items-center gap-3 rounded-full bg-[#FB9100] px-12 py-4 font-semibold text-white transition hover:bg-[#E67F00]">
                Get a Quote
                <span className="flex rotate-45 transition-transform duration-500 group-hover:rotate-90">
                  <FaArrowUpLong />
                </span>
              </button>

              {/* Secondary */}
              <button className="rounded-full border border-black px-12 py-4 font-semibold transition hover:bg-[#1B5A96] hover:text-white">
                Explore Services
              </button>
            </div>
          </div>


          {/* RIGHT */}
          <div className="relative w-1/2 h-full flex items-center justify-center max-lg:w-full">

            {/* MAIN WRAPPER (controls width like Adaired) */}
            <div className="relative w-full max-w-170">

              {/* DASHBOARD IMAGES */}
              <div className="relative flex justify-center">

                {/* Base Image */}
                <Image
                  src="/images/home/homeHeroTotalRevenue.png"
                  alt="Dashboard"
                  width={620}
                  height={620}
                  className="relative z-10 w-full max-w-149 mt-30"
                />

                {/* Profit */}
                <div className="absolute top-[8%] right-[-6%] max-sm:hidden animate-float-adaired">
                  <Image
                    src="/images/home/homeHeroTotalProfit.png"
                    alt="Profit"
                    width={380}
                    height={380}
                  />
                </div>

                {/* Sessions */}
                <div className="absolute bottom-[-12%] left-[-6%] max-sm:hidden animate-float-adaired">
                  <Image
                    src="/images/home/homeHeroTotalSessions.png"
                    alt="Sessions"
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              {/* MINI CARDS */}
              <div className="mt-4 grid max-w-150 grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 ml-10">

                {/* CARD */}
                <div className="hero-mini-card animate-card-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FaUser className="text-[10px] text-gray-500" />
                      <p>Monthly Users</p>
                    </div>
                    <span className="text-gray-400">•••</span>
                  </div>

                  <div className="mt-1 flex items-center gap-3">
                    <h4>23.6K</h4>
                    <span className="flex items-center gap-1 text-red-600 bg-gray-200 rounded-md px-2 py-0.5">
                      10
                      <span className="rotate-45 inline-flex">
                        <FaArrowUpLong />
                      </span>
                    </span>
                  </div>
                </div>

                <div className="hero-mini-card animate-card-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FaUser className="text-[10px] text-gray-500" />
                      <p className="text-xs text-gray-500">Monthly Users</p>
                    </div>
                    <span className="text-gray-400">•••</span>
                  </div>

                  <div className="mt-1 flex items-center gap-3">
                    <h4 className="text-sm font-bold">23.6K</h4>
                    <span className="flex items-center gap-1 text-green-600 bg-gray-200 rounded-md px-2 py-0.5">
                      102
                      <span className="rotate-45 inline-flex">
                        <FaArrowUpLong />
                      </span>
                    </span>
                  </div>
                </div>

                <div className="hero-mini-card animate-card-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FaUser className="text-[10px] text-gray-500" />
                      <p className="text-xs text-gray-500">New Users</p>
                    </div>
                    <span className="text-gray-400">•••</span>
                  </div>

                  <div className="mt-1 flex items-center gap-3">
                    <h4 className="text-sm font-bold">10.6K</h4>
                    <span className="flex items-center gap-1 text-green-600 bg-gray-200 rounded-md px-2 py-0.5">
                      102
                      <span className="rotate-45 inline-flex">
                        <FaArrowUpLong />
                      </span>
                    </span>
                  </div>
                </div>

                <div className="hero-mini-card animate-card-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FaUser className="text-[10px] text-gray-500" />
                      <p>Subscribers</p>
                    </div>
                    <span className="text-gray-400">•••</span>
                  </div>

                  <div className="mt-1 flex items-center gap-3">
                    <h4 className="text-sm font-bold">21.6K</h4>
                    <span className="flex items-center gap-1 text-green-600 bg-gray-200 rounded-md px-2 py-0.5">
                      102
                      <span className="rotate-45 inline-flex">
                        <FaArrowUpLong />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};