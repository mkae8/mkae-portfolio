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
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-b h-screen items-center flex from-background to-background/80"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tech Stacks
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
                className={`bg-opacity-10 rounded-lg p-6 flex flex-col items-center justify-center h-full transition-all duration-300 group-hover:bg-opacity-20 group-hover:shadow-lg`}
              >
                <span
                  className="text-4xl mb-2"
                  role="img"
                  aria-label={skill.name}
                >
                  {skill.icon}
                </span>
                <h3 className="text-lg font-normal text-center">
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
