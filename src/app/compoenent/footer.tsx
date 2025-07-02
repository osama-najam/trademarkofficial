"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1B1B1B] text-white px-4 sm:px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* 🔹 Logo Section */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Image
            src="/logo.png"
            alt="Logo"
            width={375}
            height={120}
            className="object-contain max-w-[375px] lg:max-w-[375px] md:max-w-[350px] sm:max-w-[350px] h-auto"
          />
        </div>

        {/* 🔸 Social Section */}
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
          <p className="font-semibold text-sm sm:text-base">Follow us:</p>
          <div className="flex gap-4 text-lg sm:text-xl">
            <Link href="#" className="hover:text-blue-500 transition"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-sky-400 transition"><FaTwitter /></Link>
            <Link href="#" className="hover:text-pink-500 transition"><FaInstagram /></Link>
            <Link href="#" className="hover:text-red-600 transition"><FaYoutube /></Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
