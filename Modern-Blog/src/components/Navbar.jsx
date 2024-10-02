import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaSquareFacebook, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow fixed top-0 left-0 right-0">
      <nav className="container max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            Blog<span>SB</span>
          </Link>
        </div>
        <div className="md:flex gap-12 text-lg hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-orange-700 underline" : "text-gray-700"
              } hover:text-orange-700`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-orange-700 underline" : "text-gray-700"
              } hover:text-orange-700`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/sevices"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-orange-700 underline" : "text-gray-700"
              } hover:text-orange-700`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-orange-700 underline" : "text-gray-700"
              } hover:text-orange-700`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-orange-700 underline" : "text-gray-700"
              } hover:text-orange-700`
            }
          >
            Blogs
          </NavLink>
        </div>
        <div className="text-black lg:flex gap-4 items-center hidden">
          <Link className="text-xl" to="/">
            <FaSquareFacebook />
          </Link>
          <Link className="text-xl" to="/">
            <FaSquareFacebook />
          </Link>
          <Link className="text-xl" to="/">
            <FaSquareFacebook />
          </Link>

          <Link
            to="/"
            className="text-lg font-medium text-white bg-orange-700 px-4 py-2 rounded-lg hover:bg-orange-800 translate-all duration-200 ease-in "
          >
            Login
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer ">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/** Mennu items only for mobile divice */}

      <div>
        <div
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          } `}
        >
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-lg font-medium block ${
                isActive ? "text-orange-700" : "text-gray-700"
              } hover:text-orange-700`
            }
          >
            Home
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/about"
            className={({ isActive }) =>
              `text-lg font-medium block ${
                isActive ? "text-orange-700" : "text-gray-700"
              } hover:text-orange-700`
            }
          >
            About
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/contact"
            className={({ isActive }) =>
              `text-lg font-medium block ${
                isActive ? "text-orange-700" : "text-gray-700"
              } hover:text-orange-700`
            }
          >
            Contact
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/blogs"
            className={({ isActive }) =>
              `text-lg font-medium block ${
                isActive ? "text-orange-700" : "text-gray-700"
              } hover:text-orange-700`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/sevices"
            className={({ isActive }) =>
              `text-lg font-medium block ${
                isActive ? "text-orange-700" : "text-gray-700"
              } hover:text-orange-700`
            }
          >
            Services
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
