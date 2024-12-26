"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";

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
      "I m always expanding my skills and staying up-to-date with the latest technologies.",
  },
  {
    icon: Rocket,
    title: "Performance Enthusiast",
    description:
      "I m passionate about optimizing applications for speed and efficiency.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b h-screen flex items-center from-background to-background/80"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-lg text-muted-foreground mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hi, I m {process.env.NEXT_PUBLIC_NAME || "a software engineer"}{" "}
            passionate about crafting elegant solutions to complex problems.
            With a strong foundation in{" "}
            {process.env.NEXT_PUBLIC_TITLE || "software engineering"}, I
            specialize in building robust and scalable applications that make a
            difference.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                className="bg-secondary/30 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <quality.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{quality.title}</h3>
                <p className="text-muted-foreground">{quality.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
