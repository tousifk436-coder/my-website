

"use client";

import Link from "next/link";
import { Mail, ShieldCheck, FileText, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-950 to-black text-white">

      {/* TOP GLOW LINE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-blue-400">
            Medico Forensic
          </h2>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Advanced medical & forensic medicine platform designed for secure,
            fast and intelligent healthcare management.
          </p>

          <p className="text-xs text-gray-500 mt-4">
            © 2026 Medico Forensic. All Rights Reserved.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">

            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/medicines" className="hover:text-blue-400 transition">
                Medicines
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Contact
          </h3>

          <div className="space-y-4 text-sm text-gray-400">

            <p className="flex items-center justify-center sm:justify-start gap-2">
              <Mail size={16} className="text-blue-400" />
              support@medico.com
            </p>

            <p className="flex items-center justify-center sm:justify-start gap-2">
              <Phone size={16} className="text-blue-400" />
              +91 98765 43210
            </p>

            <p className="flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck size={16} className="text-blue-400" />
              Secure Medical Platform
            </p>

            <p className="flex items-center justify-center sm:justify-start gap-2">
              <FileText size={16} className="text-blue-400" />
              Privacy & Terms Protected
            </p>

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        Built with ❤️ for Medical & Forensic Intelligence
      </div>

    </footer>
  );
}