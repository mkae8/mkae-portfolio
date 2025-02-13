"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  FolderIcon as FolderCode,
  Presentation,
  CircleUserRound,
  Menu,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const navItems = [
  { name: "About", icon: User },
  { name: "Skills", icon: FolderCode },
  { name: "Projects", icon: Presentation },
  { name: "Contact", icon: CircleUserRound },
];

const getInitialTheme = () => {
  if (typeof window === "undefined") return true;
  return (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
};

export const Header = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/50 dark:bg-black/50 backdrop-blur-md dark:border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="text-sm text-black/80 dark:text-white/80">
              Hello World!
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 bg-black/5 dark:bg-white/5 rounded-full px-2 py-1">
              <motion.a
                href="/"
                className="p-2 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Home className="w-4 h-4" />
                <span className="sr-only">Home</span>
              </motion.a>
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className="flex items-center space-x-2 px-3 py-1.5 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white rounded-full transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </motion.a>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark((prev) => !prev)}
                className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark((prev) => !prev)}
                className="text-black/80 dark:text-white/80"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-black/80 dark:text-white/80"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <Link
                      href="/"
                      className="text-lg hover:text-primary flex items-center space-x-2"
                    >
                      <Home className="w-4 h-4" />
                      <span>Home</span>
                    </Link>
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={`#${item.name.toLowerCase()}`}
                        className="text-lg hover:text-primary flex items-center space-x-2"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            <div className="text-sm text-black/80 dark:text-white/80">
              {currentTime}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
