"use client";
import Link from "next/link";
import Flag from "react-world-flags";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-full">
      {/* 🔹 Top Info Bar */}
      <div className="bg-white h-[19px] flex items-center px-4 sm:px-6 lg:px-8 border-b border-gray-200 text-xs text-black">
        <span className="flex items-center gap-2">
          <Flag code="US" style={{ width: 24, height: 16 }} />
          <span>An Official Website Of The United States Government</span>
        </span>
      </div>

      {/* 🔸 Main Navbar */}
      <div className="bg-[#838383] h-[125px] flex items-center justify-center">
        {/* 🎯 Inner Dark Box */}
        <div className="bg-[#333333] w-[1077px] h-[125px] flex justify-between items-center px-6">
          {/* 🔹 Left: Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png" // ⬅️ make sure this is in your public/ folder
              alt="Logo"
              width={500}
              height={300}
              className="object-contain"
            />
          </div>

          {/* 🔸 Right: Links Top & Search Bottom */}
          <div className="flex flex-col justify-between h-full py-4">
            {/* Links */}
            <div className="flex justify-end gap-6 text-sm">
              <Link href="#" className="hover:underline text-white">About Us</Link>
              <h1 text-black>|</h1>
              <Link href="#" className="hover:underline text-white">Jobs</Link>
              |
              <Link href="#" className="hover:underline text-white">Contact Us</Link>
              |
              <Link href="#" className="hover:underline text-white">MyUSPTO</Link>
            </div>
        {/* Search Bar with Button inside input */}
            <div className="flex justify-end">
            <div className="relative w-[430px]">
                <input
                type="text"
                placeholder="search uspto.gov"
                className="px-3 py-3 text-sm bg-gray-200 text-black placeholder-black w-full"
                />
                <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[50px] h-[45px] bg-[#0076A3] flex items-center justify-center hover:bg-[#005f84] transition"
                >
                <FaSearch className="text-white" />
                </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
