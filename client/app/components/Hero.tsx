"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CodeLine = ({ delay }: { delay: number }) => (
  <motion.div
    className="h-[3px] w-full bg-primary/30"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 2, delay, repeat: Infinity, repeatType: "reverse" }}
  />
);

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const name = "Temuujin";
  const title = "Software Engineer";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background/90 to-primary/5">
      <div className="absolute inset-0 top-[100px] sm:top-[200px] left-[100px] sm:left-[200px]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/20 rounded-full"
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
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              width: Math.random() * 50 + 25,
              height: Math.random() * 50 + 25,
              filter: "blur(20px)",
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center space-y-4 sm:space-y-6 p-4 sm:p-6 backdrop-blur-sm bg-background/30 rounded-xl shadow-lg max-w-[90%] sm:max-w-md"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          {name}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
          {title}
        </p>
        <div className="relative mx-auto overflow-hidden rounded-lg">
          <div className="bg-secondary/30 p-3 sm:p-4 text-left">
            <pre className="text-xs sm:text-sm md:text-base overflow-x-auto">
              <code className="text-primary/80">
                {`function createInnovation() {
  const skills = [
    'Problem Solving',
    'Clean Code',
    'Scalability'
  ];
  
  return skills.reduce((acc, skill) => {
    return acc * implement(skill);
  }, 1);
}`}
              </code>
            </pre>
          </div>
          <CodeLine delay={1} />
        </div>
        {["<", "/>", "{}"].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute hidden sm:block text-xl md:text-2xl text-primary/40 font-mono"
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            style={{
              left: `${5 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
