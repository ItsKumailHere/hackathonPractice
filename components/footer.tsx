"use client";

import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-10">
      <div className="max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column */}
          <div className="space-y-4">
            <Link
              href="/stores"
              className="block text-sm hover:opacity-50 transition-opacity"
            >
              FIND A STORE
            </Link>
            <Link
              href="/member"
              className="block text-sm hover:opacity-50 transition-opacity"
            >
              BECOME A MEMBER
            </Link>
            <Link
              href="/signup"
              className="block text-sm hover:opacity-50 transition-opacity"
            >
              SIGN UP FOR EMAIL
            </Link>
            <Link
              href="/feedback"
              className="block text-sm hover:opacity-50 transition-opacity"
            >
              Send Us Feedback
            </Link>
            <Link
              href="/student"
              className="block text-sm hover:opacity-50 transition-opacity"
            >
              STUDENT DISCOUNTS
            </Link>
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-4">GET HELP</h3>
            <Link
              href="/order-status"
              className="block text-xs text-gray-400 hover:text-white transition-colors"
            >
              Order Status
            </Link>
            <Link
              href="/delivery"
              className="block text-xs text-gray-400 hover:text-white transition-colors"
            >
              Delivery
            </Link>
            <Link
              href="/returns"
              className="block text-xs text-gray-400 hover:text-white transition-colors"
            >
              Returns
            </Link>
            <Link
              href="/payment"
              className="block text-xs text-gray-400 hover:text-white transition-colors"
            >
              Payment Options
            </Link>
            <Link
              href="/contact"
              className="block text-xs text-gray-400 hover:text-white transition-colors"
            >
              Contact Us On Nike.com Inquiries
            </Link>
            <Link
              href="/contact-other"
              className="block text-xs text-gray-400 hover:text-white transition-colors"
            >
              Contact Us On All Other Inquiries
            </Link>
          </div>

          {/* Third Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-4">ABOUT NIKE</h3>
            <Link
              href="/news"
              className="block text-xs text-gray-400 hover:text-white transition-colors"
            >
              News
            </Link>
            <Link
              href="/careers"
              className="block text-xs text-gray-400 hover:text-white transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/investors"
              className="block text-xs text-gray-400 hover:text-white transition-colors"
            >
              Investors
            </Link>
            <Link
              href="/sustainability"
              className="block text-xs text-gray-400 hover:text-white transition-colors"
            >
              Sustainability
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-start md:justify-end gap-4">
            <Link
              href="/twitter"
              className="p-2 rounded-full transition-colors"
            >
              <Twitter className="w-6 h-6 hover:text-blue-400" />
            </Link>
            <Link
              href="/facebook"
              className="p-2 rounded-full transition-colors"
            >
              <Facebook className="w-6 h-6 hover:text-cyan-400" />
            </Link>
            <Link
              href="/youtube"
              className="p-2 rounded-full transition-colors"
            >
              <Youtube className="w-6 h-6 hover:text-red-500" />
            </Link>
            <Link
              href="/instagram"
              className="p-2 rounded-full transition-colors"
            >
              <Instagram className="w-6 h-6 hover:text-pink-500" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>India</span>
            <span className="ml-4">© 2023 Nike, Inc. All Rights Reserved</span>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <Link href="/guides" className="hover:text-white transition-colors">
              Guides
            </Link>
            <Link
              href="/terms-of-sale"
              className="hover:text-white transition-colors"
            >
              Terms of Sale
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Nike Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
