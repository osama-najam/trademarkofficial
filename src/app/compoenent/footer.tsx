"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full h-[130px] bg-[#1B1B1B] text-white flex justify-center items-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* 🔹 Left - Logo */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Image
            src="/logo.png" // 🛠 Replace with your logo path
            alt="Logo"
            width={300}
            height={100}
            className="object-contain"
          />
        </div>

        {/* 🔸 Right - Follow us with Icons */}
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <p className="font-semibold whitespace-nowrap">Follow us:</p>
          <div className="flex gap-4 text-xl">
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
