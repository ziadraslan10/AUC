/* eslint-disable no-unused-vars */
import React, {  useState } from "react";
import {
  FaYoutube,
  FaInstagram,
  FaSignInAlt,
  FaFacebook,
  FaBars,
  FaTimes,
  FaTiktok,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/auc_wordmark_blue2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className="fixed top-0 left-0 right-0 bg-white py-3 px-5 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <Link to="/">
            <img src={logo} alt="Logo" width={170} />
          </Link>
        
        
          <div className="hidden md:flex space-x-2 ">
            <NavLink to="/home" className=" p-2 ">
              Home{" "}
            </NavLink>
            <NavLink to="/dashboard" className=" p-2 ">
              Dashboard{" "}
            </NavLink>
            <NavLink to="/my-courses" className=" p-2 ">
              My courses{" "}
            </NavLink>
          </div></div>
        
        <div className="hidden md:flex space-x-2 text-white">
          <div className="flex text-lg items-center text-black ">
            

          </div>

          <div className="flex justify-center items-center">
            <div className=" text-lg  cursor-pointer text-blue-500">
              <FaFacebook />
            </div>
            <div className="pl-3 text-lg  cursor-pointer text-black">
              <FaTiktok />
            </div>
            <div className="pl-3 text-lg  cursor-pointer text-red-500">
              <FaYoutube />
            </div>
            <div className="pl-3 text-lg  cursor-pointer text-black ">
              <FaSquareXTwitter />
            </div>
            <div className="pl-3 text-lg  cursor-pointer text-pink-600">
              <FaInstagram />
            </div>
          </div>

          
            <div
              className="flex text-black items-center  p-2 cursor-pointer "
            >
              <a className="">Sign Out</a>
              <div className="flex px-2 justify-center items-center font-light">
                {" "}
                <FaSignInAlt />
              </div>
            </div>
          
        </div>
        <div className="md:hidden">
          <button className="text-xl" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 py-4 ">
          <div className="px-4 space-y-4">
            
              <div>
                <NavLink
                  onClick={() => toggleMenu()}
                  to="/home"
                  className="bg-slate-200  mb-5 rounded-md block text-center py-2 "
                >
                  Home{" "}
                </NavLink>
                <NavLink
                  onClick={() => toggleMenu()}
                  to="/dashboard"
                  className="block rounded-md mb-5  bg-slate-200 text-center py-2 "
                >
                  Dashboard{" "}
                </NavLink>
                <NavLink
                  onClick={() => toggleMenu()}
                  to="/my-courses"
                  className=" block rounded-md mb-5  bg-slate-200 text-center py-2 "
                >
                  My courses{" "}
                </NavLink>
              </div>
            
            <div className="flex justify-center items-center bg-slate-200 py-2 rounded-md">
              <div className="p-1 text-lg  cursor-pointer text-blue-700">
                <FaFacebook />
              </div>
              <div className="p-1 text-lg  cursor-pointer">
                <FaTiktok />
              </div>
              <div className="p-1 text-lg  cursor-pointer text-red-600">
                <FaYoutube />
              </div>
              <div className="p-1 text-lg  cursor-pointer text-red-400">
                <FaInstagram />
              </div>
              <div className="p-1 text-lg text-black  cursor-pointer">
                <FaSquareXTwitter />
              </div>
            </div>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
