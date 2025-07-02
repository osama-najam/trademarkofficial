"use client";
import Link from "next/link";
import Flag from "react-world-flags";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-full">
      {/* 🔹 Top Info Bar */}
      <div className="bg-white h-[19px] flex items-center px-4 sm:px-6 lg:px-8 border-b border-gray-200 text-[10px] sm:text-xs text-black">
        <span className="flex items-center gap-1 sm:gap-2">
          <Flag code="US" style={{ width: 20, height: 14 }} />
          <span>An Official Website Of The United States Government</span>
        </span>
      </div>

      {/* 🔸 Main Navbar */}
      <div className="bg-[#838383] py-4 md:py-0 flex items-center justify-center">
        {/* 🎯 Inner Dark Box */}
        <div className="bg-[#333333] w-full max-w-[1077px] flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 h-auto md:h-[125px] gap-4 md:gap-0">
          
          {/* 🔹 Logo */}
          <div className="flex-shrink-0 max-w-[180px] lg:max-w-[500px] md:max-w-[400px] sm:max-w-[180px]">
            <Image
              src="/logo.png"
              alt="Logo"
              width={500}
              height={300}
              className="object-contain w-full h-auto"
            />
          </div>

          {/* 🔸 Right Side (Links + Search) */}
          <div className="w-full md:w-auto flex flex-col justify-center md:justify-between items-end h-full gap-4 py-2 md:py-4">
            
            {/* Links */}
            <div className="flex flex-wrap justify-end gap-3 text-xs sm:text-sm text-white">
              <Link href="#" className="hover:underline">About Us</Link>
              <span className="hidden sm:inline">|</span>
              <Link href="#" className="hover:underline">Jobs</Link>
              <span className="hidden sm:inline">|</span>
              <Link href="#" className="hover:underline">Contact Us</Link>
              <span className="hidden sm:inline">|</span>
              <Link href="#" className="hover:underline">MyUSPTO</Link>
            </div>

            {/* Search */}
            <div className="w-full sm:w-[300px] md:w-[430px] relative">
              <input
                type="text"
                placeholder="search uspto.gov"
                className="w-full px-3 py-2 sm:py-3 text-sm bg-gray-200 text-black placeholder-black"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[45px] sm:w-[50px] h-[40px] sm:h-[45px] bg-[#0076A3] flex items-center justify-center hover:bg-[#005f84] transition"
              >
                <FaSearch className="text-white text-sm sm:text-base" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
