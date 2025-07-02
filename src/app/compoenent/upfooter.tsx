"use client";
import Link from "next/link";

export default function UspFooter() {
  return (
    <div className="w-full h-[264px] bg-[#F0F0F0] flex justify-center items-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between gap-8">
        
        {/* 🔹 Left Section */}
        <div className="w-full md:w-[60%] flex flex-col gap-4 text-sm text-gray-800">
          {/* Top Links */}
          <div className="flex flex-wrap gap-4 font-medium">
            <Link href="#" className="hover:underline">About the USPTO</Link>
            <Link href="#" className="hover:underline">Search for patents</Link>
            <Link href="#" className="hover:underline">Search For Trademarks</Link>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-gray-400 w-full my-2" />

          {/* Bottom Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-1 gap-x-6">
            <Link href="#" className="hover:underline">US Department of Commerce</Link>
            <Link href="#" className="hover:underline">Accessibility</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Financial and Performance Data</Link>
            <Link href="#" className="hover:underline">Vulnerability Disclosure Policy</Link>
            <Link href="#" className="hover:underline">Freedom of Information Act</Link>
            <Link href="#" className="hover:underline">Inspector General</Link>
            <Link href="#" className="hover:underline">NoFEAR Act</Link>
            <Link href="#" className="hover:underline">USA.gov</Link>
          </div>
        </div>

        {/* 🔸 Right Section */}
        <div className="w-full md:w-[40%] flex flex-col gap-3 text-sm text-gray-800">
          <h4 className="text-base font-semibold">Receive updates from the USPTO</h4>
          <p>Enter your email to subscribe or update your preferences</p>

          {/* Email input + Subscribe button in a row */}
          <div className="flex w-full gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 border border-gray-300"
            />
            <button className="bg-[#0071A2] hover:bg-red-500 text-white font-semibold px-6 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
