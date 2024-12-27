"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} className="text-xl font-bold">
          {"</>"}
        </motion.div>
        <ul className="flex space-x-4 gap-2 ">
          {["About", "Skills", "Projects", "Education"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500"
              >
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.1 }} className="flex items-center">
            <button
              onClick={() => setIsDark(!isDark)}
              className="focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};
