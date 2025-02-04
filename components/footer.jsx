import React from "react";
import Link from "next/link";
import { Github, Youtube, IndianRupee, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <IndianRupee size={24} className="text-blue-400" />
              <h2 className="text-xl font-bold text-white">Budget Buddy</h2>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Your personal finance companion for better money management and
              financial freedom.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/transaction/create"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Add Transaction
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white text-center md:text-left">
              Resources
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white text-center md:text-left">
              Connect
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/javeedm07"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com/javeed_m07"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Made by
            <a
              href="https://javeed-dev.vercel.app/"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Javeed{" "}
            </a>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {currentYear} Budget Buddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
