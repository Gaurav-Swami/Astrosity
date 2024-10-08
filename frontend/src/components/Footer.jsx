import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-96 bg-black dark:bg-secondaryBg mt-5 md:mt-20 text-white px-4 py-7 sm:p-10  ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">Astrosity</h2>
          <p className="mt-4">
            This is a platform for space nerds and freaks to express their
            thoughts and ideas in form of blogs so start exploring the cosmos!
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4">
            <li>
              <Link to="/aboutus" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="pb-7 sm:pb-10">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-4 flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} className="hover:text-gray-400" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} className="hover:text-gray-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} className="hover:text-gray-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
