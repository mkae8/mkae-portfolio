"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";
import DecryptedText from "../ui/DecryptedText";

const qualities = [
  {
    icon: Code,
    title: "Clean Coder",
    description: "I write elegant, efficient, and maintainable code.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I thrive on tackling complex challenges and finding innovative solutions.",
  },
  {
    icon: Coffee,
    title: "Continuous Learner",
    description:
      "I'm always expanding my skills and staying up-to-date with the latest technologies.",
  },
  {
    icon: Rocket,
    title: "Performance Enthusiast",
    description:
      "I'm passionate about optimizing applications for speed and efficiency.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-background to-background/80 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          🚀
          <DecryptedText
            text=" About me"
            animateOn="view"
            speed={120}
            maxIterations={30}
            revealDirection="end"
            characters="#$%!@%^&*"
            sequential={true}
            className="text-5xl sm:text-3xl md:text-3xl font-bold bg-clip-text "
          />
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 text-center px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I am Temuujin Batjargal, a software engineer with a background in
            business administration. With experience working and studying in an
            international environment in Taiwan, I aim to combine my business
            and technology knowledge to develop effective and innovative
            solutions.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                className="bg-secondary/30 backdrop-blur-sm rounded-lg p-4 md:p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <quality.icon className="w-8 h-8 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {quality.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {quality.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
