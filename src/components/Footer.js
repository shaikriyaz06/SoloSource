import React from "react";
import { Link } from "react-router-dom";
import Main_Logo from "../assets/Hero-logo1.png";

export default function Footer() {

  return (
    <div>
      <hr />
      <footer className="bg-gray-900 text-gray-300 p-10" data-aos="fade-up">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                <img src={Main_Logo} alt="Logo" className="h-14 w-28" />
              </h3>
              <p className="mb-4">
                We are dedicated to providing innovative software solutions and
                exceptional development services to businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/now-recruiting/"
                  className="hover:text-white transition-colors duration-300"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Our Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/web-development"
                    className="hover:text-white transition-colors duration-300"
                  >
                    IT Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mobile-development"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Business Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cloud-solutions"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Tailored Talent
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Contact Info
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    className="h-16 w-16 mr-2" 
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Unit 12, Building B0051, Road 0402, AL Qaryah 0604, Capital
                  Governorate, Kingdom of Bahrain.
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact@SoloSource.com
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +966 55 030 0850
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm">
                © {new Date().getFullYear()} Solo Source. All rights
                reserved.
              </div>
              {/* <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  to="/privacy"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
