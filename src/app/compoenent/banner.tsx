"use client";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
export default function Banner() {
     const [isFastMenuOpen, setIsFastMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#EEEEEE] flex justify-center text-[#0071A2]">
      <div className="w-[1077px] flex items-center justify-between h-[55px] px-6 relative z-10">
        {/* 🔹 Left Links with Dropdowns */}
        <div className="flex gap-6 text-lg font-medium text-[#0071A2] relative">
          {/* === Patents Dropdown === */}
          <div className="relative group">
            <Link
              href="#"
              className="hover:text-red-500 border border-r-gray-500 pr-10"
            >
              Patents
            </Link>

            <div className="absolute left-0 top-full mt-1 hidden group-hover:flex bg-white shadow-lg rounded-md text-sm p-6 z-20 w-[800px] gap-10">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Getting Started</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Patent basics</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Process overview</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Legal assistance and resources</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Inventor and entrepreneur resources</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">International cooperation</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Patent FAQs</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Application Process</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Search for patents</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Learn about patent classification</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Filing online</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Checking application status</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Responding to Office actions</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Petitions</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Patent Trial and Appeal Board</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Maintenance</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Maintaining a patent</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Maintenance fees</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Correcting your patent</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Transferring ownership</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Ordering certified documents</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Tools & Links</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Online patent tools</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Patent Center</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Electronic Business Center</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Fees and payment</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Patent Trial & Appeal Board</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Global Dossier</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">More tools & links</Link>
              </div>
            </div>
          </div>

          {/* === Trademarks Dropdown === */}
          <div className="relative group">
            <Link
              href="#"
              className="hover:text-red-500 border border-r-gray-500 pr-10"
            >
              Trademarks
            </Link>

            <div className="absolute left-0 top-full mt-1 hidden group-hover:flex bg-white shadow-lg rounded-md text-sm p-6 z-20 w-[800px] gap-10">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Getting Started</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Trademark basics</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Process overview</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Trademark FAQs</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Hiring a U.S.-licensed attorney</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Madrid Protocol international protection</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Protect against trademark scams</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Application Process</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Search our trademark database</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Apply online</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Disclosure of public information</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Checking application status & viewing documents</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Responding to office actions</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Abandoned applications</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Ordering certified documents</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Trademark Trial and Appeal Board</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Maintenance</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Maintaining a trademark registration</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Keeping your registration alive</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Forms to file</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Checking registration status & viewing documents</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Enforcing your trademark rights</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Trademark litigation</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Transferring ownership</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Tools & Links</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Apply online (TEAS)</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">File through TEAS</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Check status (TSDR)</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Trademark fees</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Trademark Trial and Appeal Board</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">More tools & links</Link>
              </div>
            </div>
          </div>

          {/* === IP Policy Dropdown === */}
          <div className="relative group">
            <Link
              href="#"
              className="hover:text-red-500 border border-r-gray-500 pr-10"
            >
              IP Policy
            </Link>

            <div className="absolute left-0 top-full mt-1 hidden group-hover:flex bg-white shadow-lg rounded-md text-sm p-6 z-20 w-[800px] gap-10">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">IP Policy</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Patent policy</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Industrial design policy</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Trademark policy</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Copyright policy</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Enforcement policy</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Trade secret policy</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">International Affairs</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">IP Attaché Program</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">China IP</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">IPR toolkits</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">International intergovernmental organizations</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">IP Research & Training</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">IP research and training</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Economic research</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Global Intellectual Property Academy</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Tools & Links</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Legislative resources</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Learn about our current legislative initiatives</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">IPR toolkits</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">IP policy events</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">More tools & links</Link>
              </div>
            </div>
          </div>

          {/* === Learning & Resources Dropdown === */}
          <div className="relative group">
            <Link
              href="#"
              className="hover:text-red-500 border border-r-gray-500 pr-10"
            >
              Learning and Resources
            </Link>

            <div className="absolute left-0 top-full mt-1 hidden group-hover:flex bg-white shadow-lg rounded-md text-sm p-6 z-20 w-[800px] gap-10">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Resources by Audience</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Attorneys, agents & paralegals</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Inventors & entrepreneurs</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Kids & educators</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Media</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Researchers & librarians</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Patent & trademark practitioners</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Help by Topic</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Fees and payment</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">General FAQs</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Patents FAQs</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Trademark FAQs</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Transferring ownership / Assignments help</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Services & Publications</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Open data & mobility</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Federal Register Notices</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Official Gazette</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Support centers</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">XML resources</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Classification</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Tools & Links</span>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Operational status</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Events</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Guidance documents</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Glossary of terms</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Subscriptions</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">How-to videos</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">IP programs and awards</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">Statistics</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">IP Identifier</Link>
                <Link href="#" className="text-[#0071A2] hover:text-red-500">More tools & links</Link>
              </div>
            </div>
          </div>
        </div>

        {/* 🔸 Right: Find it Fast Button */}
      <div
          className="relative"
          onMouseEnter={() => setIsFastMenuOpen(true)}
          onMouseLeave={() => setIsFastMenuOpen(false)}
        >
          <button className="bg-[#0076A3] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-[#005f84] transition">
            <FaSearch />
            Find it Fast
          </button>

          {isFastMenuOpen && (
            <div className="absolute right-0 top-full mt-1 bg-white shadow-lg rounded-md text-sm text-gray-700 p-6 z-20 w-[900px] grid grid-cols-3 gap-10">
              {/* Patents */}
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Patents</span>
                <Link href="#">Patent Public Search</Link>
                <Link href="#">Patent Center Forms</Link>
                <Link href="#">Patent filing</Link>
                <Link href="#">Patent Center Global Dossier</Link>
                <Link href="#">Filing status</Link>
                <Link href="#">Pay maintenance fees</Link>
                <Link href="#">PTAB - Patent Trial and Appeal Board</Link>
                <Link href="#">Search recorded assignment</Link>
                <Link href="#">Record ownership changes</Link>
                <Link href="#">MPEP</Link>
                <Link href="#">Classification</Link>
                <Link href="#">Guides and manuals</Link>
              </div>

              {/* Trademarks */}
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Trademarks</span>
                <Link href="#">Trademark search (TESS)</Link>
                <Link href="#">TEAS Forms - Trademark filing</Link>
                <Link href="#">TSDR - Status & Documents</Link>
                <Link href="#">TTAB, ESTTA, TTABVUE</Link>
                <Link href="#">Search recorded assignment</Link>
                <Link href="#">Record ownership changes</Link>
                <Link href="#">TMEP ID Manual</Link>
                <Link href="#">TMOG</Link>
                <Link href="#">TBMP</Link>
                <Link href="#">Guides and manuals</Link>
                <Link href="#">Trademark processing wait times</Link>
              </div>

              {/* Fees & Systems */}
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Fees & Payment</span>
                <Link href="#">Fee schedule</Link>
                <Link href="#">Payment information</Link>
                <Link href="#">Systems status</Link>
                <Link href="#">Current outages</Link>
                <Link href="#">Planned outages</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
