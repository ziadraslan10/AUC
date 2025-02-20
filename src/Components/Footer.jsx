/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaGlobe, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center sm:px-4 md:px-20">
        {/* Contact Section */}
        <div className="mb-4 md:mb-0 text-center sm:text-start ">
          <h3 className="font-semibold text-xl">Contact us</h3>
          <div className="flex gap-2 mt-2 justify-center sm:justify-start ">
            <button className="p-2 bg-blue-600 rounded-full">
              <FaGlobe />
            </button>
            <button className="p-2 bg-blue-600 rounded-full">
              <FaPhone />
            </button>
            <button className="p-2 bg-blue-600 rounded-full">
              <FaEnvelope />
            </button>
          </div>
                {/* Social Media Icons */}
      <div className="mt-6 text-center sm:text-start">
        <h3 className="font-semibold text-xl">Follow us</h3>
        <div className="flex justify-center gap-4 mt-2">
          <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
          <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
          <FaLinkedin className="text-blue-600 text-2xl cursor-pointer" />
          <FaYoutube className="text-red-600 text-2xl cursor-pointer" />
          <FaInstagram className="text-purple-600 text-2xl cursor-pointer" />
        </div>
      </div>
        </div>

        {/* Center Content */}
        <div className="text-center">
          <p className="mb-2">You are logged in as <strong>#####</strong> (<a href="#" className="hover:underline">Log out</a>)</p>
          <p><a href="" className="hover:underline">Get the mobile app</a></p>
          <p><a href="" className="hover:underline">Reset user tour on this page</a></p>
        </div>

        {/* Mobile App Links */}
        <div className="mb-4 md:mb-0">
          <h3 className="font-semibold text-lg">Get the mobile app</h3>
          <div className="mt-2 flex flex-col gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-40"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-40"
            />
          </div>
        </div>
      </div>


    </footer>
  );
}

export default Footer;
