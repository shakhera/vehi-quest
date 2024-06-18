// src/components/Footer/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About VehiQuest</h3>
            <p className="text-sm">
              VehiQuest is your go-to marketplace for buying and selling
              second-hand cars. Our mission is to provide a reliable platform
              for car enthusiasts and buyers.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/categories" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/advertise" className="hover:text-gray-300">
                  Advertise
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">123 VehiQuest St.</p>
            <p className="text-sm mb-2">Car City, AutoLand 45678</p>
            <p className="text-sm mb-2">Email: info@vehiquest.com</p>
            <p className="text-sm mb-2">Phone: (123) 456-7890</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} VehiQuest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
