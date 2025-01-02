"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaCloudflare,
} from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiClerk,
  SiCloudinary,
  SiVercel,
  SiRender,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "JavaScript", icon: <RiJavascriptFill /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Clerk", icon: <SiClerk /> },
  { name: "Cloudflare", icon: <FaCloudflare /> },
  { name: "Cloudinary", icon: <SiCloudinary /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Render", icon: <SiRender /> },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 md:py-16 bg-gradient-to-b from-background to-background/80 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tech Stacks
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`bg-secondary/10 rounded-lg p-3 md:p-4 lg:p-6 flex flex-col items-center justify-center h-full transition-all duration-300 group-hover:bg-secondary/20 group-hover:shadow-lg`}
              >
                <span
                  className="text-2xl md:text-3xl lg:text-4xl mb-2"
                  role="img"
                  aria-label={skill.name}
                >
                  {skill.icon}
                </span>
                <h3 className="text-sm md:text-base lg:text-lg font-normal text-center">
                  {skill.name}
                </h3>
              </div>
              <motion.div
                className="absolute inset-0 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
