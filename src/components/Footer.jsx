import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Lettings", href: "/lettings" },
  { name: "Sales", href: "/sales" },
  { name: "Tenants", href: "/tenants" },
  { name: "Landlord", href: "/landlord" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/Logo.svg"
                alt="Preview Estates Logo"
                className="h-14 w-auto object-contain bg-white p-2 rounded-lg"
              />
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for property lettings, management, and sales
              in Leytonstone, London. We make finding your perfect home simple.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-[#DC2626] transition-colors"
                  aria-label={social}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="inline-block px-5 py-2 rounded-lg bg-[#1E293B] text-white font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#DC2626] transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4 text-[#DC2626]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="inline-block px-5 py-2 rounded-lg bg-[#1E293B] text-white font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#DC2626] transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4 text-[#DC2626]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="inline-block px-5 py-2 rounded-lg bg-[#1E293B] text-white font-semibold mb-6">
              Contact Us
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#DC2626]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-[#DC2626]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <p className="text-gray-300">
                  855 High Road Leytonstone
                  <br />
                  London E11 1HH
                </p>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#DC2626]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#DC2626]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>

                <a
                  href="tel:02034886585"
                  className="text-gray-300 hover:text-[#DC2626] transition-colors"
                >
                  020 3488 6585
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#DC2626]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#DC2626]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <a
                  href="mailto:previewestates@gmail.com"
                  className="text-gray-300 hover:text-[#DC2626] transition-colors"
                >
                  previewestates@gmail.com
                </a>
              </li>

              {/* Contact Button */}
              <li className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block w-full text-center bg-[#DC2626] hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Preview Estates. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-[#DC2626] transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-[#DC2626] transition-colors"
              >
                Terms of Service
              </Link>

              <Link
                href="/contact"
                className="hover:text-[#DC2626] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
