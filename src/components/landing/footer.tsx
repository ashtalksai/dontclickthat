"use client";

import { Shield, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
      { label: "Careers", href: "/careers" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security", href: "/security" },
      { label: "GDPR", href: "/gdpr" },
    ],
    Support: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "System Status", href: "/status" },
    ],
  };

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Info */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <span className="text-xl font-bold">Don&apos;t Click That</span>
            </Link>
            <p className="text-[#94A3B8] mb-6 leading-relaxed">
              AI-powered scam protection for seniors. Keeping families safe, one 
              blocked scam at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:1-800-DONT-CLICK"
                className="flex items-center gap-3 text-[#94A3B8] hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>1-800-DONT-CLICK</span>
              </a>
              <a
                href="mailto:support@dontclickthat.app"
                className="flex items-center gap-3 text-[#94A3B8] hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>support@dontclickthat.app</span>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-lg mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#94A3B8] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#1E293B]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#64748B] text-center md:text-left">
              © {currentYear} Don&apos;t Click That. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[#64748B]">Made with ❤️ for families everywhere</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
