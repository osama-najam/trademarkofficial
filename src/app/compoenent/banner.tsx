"use client";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function Banner() {
  const [isFastMenuOpen, setIsFastMenuOpen] = useState(false);
  const fastMenuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        fastMenuRef.current &&
        !fastMenuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsFastMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-[#EEEEEE] text-[#0071A2]">
      <div className="max-w-[1077px] mx-auto flex items-center h-[55px] px-4 md:px-6 relative z-10">
        {/* Left Navigation */}
        <div className="hidden lg:flex gap-4 xl:gap-6 text-sm xl:text-lg font-medium relative">
          {[
            {
              title: "Patents",
              sections: [
                {
                  heading: "Getting Started",
                  links: [
                    "Patent basics",
                    "Process overview",
                    "Legal assistance and resources",
                    "Inventor and entrepreneur resources",
                    "International cooperation",
                    "Patent FAQs",
                  ],
                },
                {
                  heading: "Application Process",
                  links: [
                    "Search for patents",
                    "Learn about patent classification",
                    "Filing online",
                    "Checking application status",
                    "Responding to Office actions",
                    "Petitions",
                    "Patent Trial and Appeal Board",
                  ],
                },
                {
                  heading: "Maintenance",
                  links: [
                    "Maintaining a patent",
                    "Maintenance fees",
                    "Correcting your patent",
                    "Transferring ownership",
                    "Ordering certified documents",
                  ],
                },
                {
                  heading: "Tools & Links",
                  links: [
                    "Online patent tools",
                    "Patent Center",
                    "Electronic Business Center",
                    "Fees and payment",
                    "Patent Trial & Appeal Board",
                    "Global Dossier",
                    "More tools & links",
                  ],
                },
              ],
            },
            {
              title: "Trademarks",
              sections: [
                {
                  heading: "Getting Started",
                  links: [
                    "Trademark basics",
                    "Process overview",
                    "Trademark FAQs",
                    "Hiring a U.S.-licensed attorney",
                    "Madrid Protocol international protection",
                    "Protect against trademark scams",
                  ],
                },
                {
                  heading: "Application Process",
                  links: [
                    "Search our trademark database",
                    "Apply online",
                    "Disclosure of public information",
                    "Checking application status & viewing documents",
                    "Responding to office actions",
                    "Abandoned applications",
                    "Ordering certified documents",
                    "Trademark Trial and Appeal Board",
                  ],
                },
                {
                  heading: "Maintenance",
                  links: [
                    "Maintaining a trademark registration",
                    "Keeping your registration alive",
                    "Forms to file",
                    "Checking registration status & viewing documents",
                    "Enforcing your trademark rights",
                    "Trademark litigation",
                    "Transferring ownership",
                  ],
                },
                {
                  heading: "Tools & Links",
                  links: [
                    "Apply online (TEAS)",
                    "File through TEAS",
                    "Check status (TSDR)",
                    "Trademark fees",
                    "Trademark Trial and Appeal Board",
                    "More tools & links",
                  ],
                },
              ],
            },
            {
              title: "IP Policy",
              sections: [
                {
                  heading: "IP Policy",
                  links: [
                    "Patent policy",
                    "Industrial design policy",
                    "Trademark policy",
                    "Copyright policy",
                    "Enforcement policy",
                    "Trade secret policy",
                  ],
                },
                {
                  heading: "International Affairs",
                  links: [
                    "IP Attaché Program",
                    "China IP",
                    "IPR toolkits",
                    "International intergovernmental organizations",
                  ],
                },
                {
                  heading: "IP Research & Training",
                  links: [
                    "IP research and training",
                    "Economic research",
                    "Global Intellectual Property Academy",
                  ],
                },
                {
                  heading: "Tools & Links",
                  links: [
                    "Legislative resources",
                    "Learn about our current legislative initiatives",
                    "IPR toolkits",
                    "IP policy events",
                    "More tools & links",
                  ],
                },
              ],
            },
            {
              title: "Learning and Resources",
              sections: [
                {
                  heading: "Resources by Audience",
                  links: [
                    "Attorneys, agents & paralegals",
                    "Inventors & entrepreneurs",
                    "Kids & educators",
                    "Media",
                    "Researchers & librarians",
                    "Patent & trademark practitioners",
                  ],
                },
                {
                  heading: "Help by Topic",
                  links: [
                    "Fees and payment",
                    "General FAQs",
                    "Patents FAQs",
                    "Trademark FAQs",
                    "Transferring ownership / Assignments help",
                  ],
                },
                {
                  heading: "Services & Publications",
                  links: [
                    "Open data & mobility",
                    "Federal Register Notices",
                    "Official Gazette",
                    "Support centers",
                    "XML resources",
                    "Classification",
                  ],
                },
                {
                  heading: "Tools & Links",
                  links: [
                    "Operational status",
                    "Events",
                    "Guidance documents",
                    "Glossary of terms",
                    "Subscriptions",
                    "How-to videos",
                    "IP programs and awards",
                    "Statistics",
                    "IP Identifier",
                    "More tools & links",
                  ],
                },
              ],
            },
          ].map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href="#"
                className="hover:text-red-500 pr-4 border-r border-gray-300"
              >
                {item.title}
              </Link>
              <div className="absolute left-0 top-full mt-2 hidden group-hover:flex bg-white shadow-xl rounded-md p-4 lg:p-6 z-20 w-[90vw] lg:w-[800px] gap-6 flex-wrap">
                {item.sections.map((section, idx) => (
                  <div key={idx} className="min-w-[150px] flex flex-col gap-1">
                    <span className="font-semibold text-[#0071A2]">
                      {section.heading}
                    </span>
                    {section.links.map((link, i) => (
                      <Link
                        key={i}
                        href="#"
                        className="text-[#0071A2] hover:text-red-500 text-sm"
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Find it Fast Button */}
        <div className="relative ml-auto">
          <button
            ref={buttonRef}
            onClick={() => setIsFastMenuOpen((prev) => !prev)}
            className="bg-[#0076A3] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-[#005f84] transition"
          >
            <FaSearch />
            <span className="hidden sm:inline">Find it Fast</span>
          </button>

          {isFastMenuOpen && (
            <div
              ref={fastMenuRef}
              className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 md:p-6 z-20 w-[90vw] md:w-[900px] grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 text-sm text-gray-700"
            >
              {/* Optional close button (visible mostly on mobile) */}
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-lg font-bold"
                onClick={() => setIsFastMenuOpen(false)}
              >
                &times;
              </button>

              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Patents</span>
                <Link href="#">Patent Public Search</Link>
                <Link href="#">Patent Center Forms</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Trademarks</span>
                <Link href="#">Trademark Search</Link>
                <Link href="#">Apply (TEAS)</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0071A2]">Learning</span>
                <Link href="#">How-to Videos</Link>
                <Link href="#">FAQs</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
