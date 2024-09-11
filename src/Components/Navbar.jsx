import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { GoClock } from "react-icons/go";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //!false = true
  };

  console.log(isMenuOpen);

  const icons = [
    { img: <GoClock />, h3: "Mon - Sat 9.00 - 18.00", para: "Sunday Closed" },
    { img: <GoClock />, h3: "Email", para: "contact@logistics.com" },
    { img: <GoClock />, h3: "Call Us", para: "(00) 112 365 489" },
  ];

  return (
    <nav className=" bg-primaryB p-4 sm:px-8 md:px-16 xl:px-32 text-black">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">
            {""}
            <img src={logo} className=" w-40" />
          </Link>
        </div>

        <div className="vl:hidden">
          <button className=" text-white" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              className=" w-8 h-8"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className=" hidden vl:flex ">
          {icons.map((icon, index) => (
            <div
              key={index}
              className=" flex text-white items-center justify-center mr-4 mx-8"
            >
              <div className=" w-10 h-10 bg-secondaryB rounded-full border-2 border-borderColor flex items-center justify-center mr-2 ">
                <GoClock className=" text-primaryA" />
              </div>
              <div>
                <h3>{icon.h3}</h3>
                <p>{icon.para}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/pages" className="text-white">
              Pages
            </Link>
          </li>
          <li>
            <Link to="/project" className="text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul> */}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen ? (
        <ul className="flex-col vl:hidden ">
          <li className="py-1 text-center">
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li className="py-1 text-center">
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li className="py-1 text-center">
            <Link to="/pages" className="text-white">
              Pages
            </Link>
          </li>
          <li className="py-1 text-center">
            <Link to="/project" className="text-white">
              Projects
            </Link>
          </li>
          <li className="py-1 text-center">
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>

          <ul className=" flex items-center justify-center vl:hidden ">
            <li className=" mx-2 text-white">
              <Link>Instagam</Link>
            </li>
            <li className=" mx-2 text-white">
              <Link>Facebook</Link>
            </li>
            <li className=" mx-2 text-white">
              <Link>X</Link>
            </li>
            <li className=" mx-2 text-white">
              <Link>LinkedIn</Link>
            </li>
          </ul>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
