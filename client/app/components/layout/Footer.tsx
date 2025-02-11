"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="relative py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center relative z-10">
          <p className="text-center text-muted-foreground">
            © {currentYear} Your ideas, our code, one vision.
          </p>
          <div className="mt-2 flex items-center text-muted-foreground">
            <Heart className="w-4 h-4 mx-1 text-red-500" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/10 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              filter: "blur(8px)",
            }}
          />
        ))}
      </div>
      <svg
        className="absolute bottom-0 left-0 right-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      ></svg>
    </footer>
  );
};
