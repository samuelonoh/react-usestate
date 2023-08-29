import logo from "../images/white-logo.png";
import { NavLink } from "react-router-dom";
import "../Styles/Header.css";
import { useState, useEffect } from "react";

function Header() {
  const [menu, setMenu] = useState(true);
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
  }, []);

  const stickyHeader = () => {
    const winScroll = window.scrollY;
    const stickHeader =
      winScroll >= 250
        ? "fixed bg-[black] w-full"
        : "w-full absolute bg-transparent";
    setSticky(stickHeader);
  };

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <div
      className={`header flex justify-center items-center h-[10vh] z-10 w-screen bg-transparent text-white ${sticky}`}
    >
      <div className="w-[90vw] flex justify-between items-center">
        <img src={logo} alt="" className="w-24 h-10" />

        <nav
          className={
            menu === false
              ? "h-[0vh] md:h-[50vh]"
              : `rounded-[15px] md:rounded-none absolute w-[90vw] bg-[#212529] md:bg-transparent grid justify-items-center md:top-0 top-[10vh] md:relative md:h-[10vh] md:w-[60vw] md:flex md:items-center`
          }
        >
          <NavLink
            to="/"
            className=" grid content-center w-[90%] md:w-[20%] border-b-[1px] border-gray-700 md:border-none text-center h-[10vh] hover:text-[#ff565b] transition duration-500  ease-in"
          >
            HomePage
          </NavLink>
          <NavLink
            to="/about"
            className="grid content-center w-[90%] md:w-[20%] border-b-[1px] border-gray-700 md:border-none text-center h-[10vh] hover:text-[#ff565b] transition duration-500  ease-in"
          >
            About Us
          </NavLink>
          <NavLink
            to="/explore"
            className="grid content-center w-[90%] md:w-[20%] border-b-[1px] border-gray-700 md:border-none text-center h-[10vh] hover:text-[#ff565b] transition duration-500  ease-in"
          >
            Explore Work
          </NavLink>
          <NavLink
            to="/trending"
            className="grid content-center w-[90%] md:w-[20%] border-b-[1px] border-gray-700 md:border-none text-center h-[10vh] hover:text-[#ff565b] transition duration-500  ease-in"
          >
            Trending
          </NavLink>
          <NavLink
            to="/contact"
            className="grid content-center w-[90%] md:w-[20%] md:border-none text-center h-[10vh] hover:text-[#ff565b] transition duration-500  ease-in"
          >
            Contact Us
          </NavLink>
        </nav>

        <div
          className="bg-white py-2 px-4 rounded-md md:hidden"
          onClick={openMenu}
        >
          <p className="text-gray-600 text-2xl">&#9776;</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
