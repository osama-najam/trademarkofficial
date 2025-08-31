"use client";
import Image from "next/image";
import Link from "next/link";

export default function PaymentSection() {
  return (
    <section className="w-full py-10 px-4 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* 🖼 Left Side Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/Invoice-499.png"
            alt="Payment Illustration"
            width={400}
            height={300}
            className="shadow-md object-contain max-w-full h-auto"
          />
        </div>

        {/* 📄 Right Side Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left md:pl-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Payment Methods
          </h2>

          <Image
            src="/OIP.jpeg"
            alt="PayPal"
            width={200}
            height={80}
            className="mb-6 object-contain"
          />

          <Link
            href="https://buy.stripe.com/7sY3cn0HSbp1ao648ifYY02"
            target="_blank"
            className="bg-[#0071A2] hover:bg-red-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition"
          >
            Pay Now
          </Link>
        </div>
      </div>
    </section>
  );
}

