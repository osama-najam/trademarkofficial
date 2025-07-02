"use client";
import Image from "next/image";
import Link from "next/link";

export default function PaymentSection() {
  return (
    <div className="w-full py-10 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 px-4">
        {/* 🖼 Left Side Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/Invoice-499.png"
            alt="Payment Illustration"
            width={400}
            height={200}
            className="shadow-md"
          />
        </div>

        {/* 📄 Right Side Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-center text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Payment Methods</h2>

          <Image
            src="/OIP.jpeg"
            alt="PayPal"
            width={200}
            height={80}
            className="mb-6"
          />

          <Link
            href="https://www.paypal.com/ncp/payment/ZVLMGGQ2JTXF6"
            target="_blank"
            className="bg-[#0071A2] hover:bg-red-500 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Pay Now
          </Link>
        </div>
      </div>
    </div>
  );
}
