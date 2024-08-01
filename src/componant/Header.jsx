import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const [hoverItem, setHoverItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const navItems = [
    { path: "/", label: "About" },
    { path: "/project", label: "Projects" },
    { path: "/experiance", label: "Experience" },
    { path: "/skills", label: "Skills" },
    { path: "/contact-me", label: "Contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-purple-400"
        >
          <Link to={"/"}>Portfolio</Link>
        </motion.h1>
        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* Navigation Items */}
        <nav
          className={`lg:flex lg:space-x-6 absolute lg:relative top-full left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent lg:top-auto lg:left-auto transition-all duration-300 ${
            isMobile
              ? isMenuOpen
                ? "max-h-screen opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
              : "max-h-screen opacity-100 visible"
          } lg:max-h-screen lg:opacity-100 lg:visible overflow-hidden`}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative block lg:inline-block text-gray-300 hover:text-white transition-colors duration-300 py-2 px-4 group"
              onMouseEnter={() => setHoverItem(item.path)}
              onMouseLeave={() => setHoverItem(null)}
              onClick={() => isMobile && setIsMenuOpen(false)}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              {(location.pathname === item.path || hoverItem === item.path) && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-purple-400"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
