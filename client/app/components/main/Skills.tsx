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
  SiPostgresql,
  SiPython,
  SiCypress,
  SiJest,
} from "react-icons/si";
import DecryptedText from "../ui/DecryptedText";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-[#E34F26]" />,
    percentage: 95,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-[#1572B6]" />,
    percentage: 90,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-[#38B2AC]" />,
    percentage: 90,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptFill className="text-[#F7DF1E]" />,
    percentage: 80,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" />,
    percentage: 75,
  },
  {
    name: "Python",
    icon: <SiPython className="text-blue-400" />,
    percentage: 10,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#339933]" />,
    percentage: 80,
  },
  { name: "Express", icon: <SiExpress />, percentage: 85 },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248]" />,
    percentage: 85,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#61DAFB]" />,
    percentage: 30,
  },
  {
    name: "React",
    icon: <FaReact className="text-[#61DAFB]" />,
    percentage: 70,
  },
  { name: "Next.js", icon: <SiNextdotjs />, percentage: 75 },

  {
    name: "Clerk",
    icon: <SiClerk className="text-[orange]" />,
    percentage: 70,
  },
  {
    name: "Cloudflare",
    icon: <FaCloudflare className="text-[#F38020]" />,
    percentage: 80,
  },
  {
    name: "Cloudinary",
    icon: <SiCloudinary className="text-[#3448C5]" />,
    percentage: 70,
  },
  { name: "Vercel", icon: <SiVercel />, percentage: 80 },
  { name: "Render", icon: <SiRender />, percentage: 80 },

  {
    name: "Cypress",
    icon: <SiCypress className="text-green-300" />,
    percentage: 20,
  },
  { name: "Jest", icon: <SiJest className="text-red-300" />, percentage: 20 },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 md:py-16 relative bg-white dark:bg-black overflow-hidden min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16 text-5xl">
            <h2 className="flex flex-col items-center justify-center gap-2">
              <span className="font-sedgwick  font-extralight text-4xl text-black dark:text-purple-400 ">
                ALWAYS LEARNING
              </span>
              <DecryptedText
                text="TECH STACKS"
                animateOn="view"
                speed={110}
                maxIterations={30}
                revealDirection="start"
                characters="爱缘恒悟破晓"
                sequential={true}
                className="text-6xl font-sedgwick font-bold text-black dark:text-[#98ff01]"
              />
            </h2>
          </div>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-6 rounded-lg border-2 border-dashed border-black/20 dark:border-[#98ff01]/10 bg-white dark:bg-black/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span
                    className={`font-bold text-xl ${
                      skill.percentage >= 50
                        ? "text-green-500"
                        : "text-purple-500"
                    }`}
                  >
                    {skill.percentage}%
                  </span>
                </div>

                <div className="relative h-2 bg-gray-200 dark:bg-[#98ff01]/10 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-black/80 dark:bg-white"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>

                <div className="mt-4">
                  <div className="h-1 w-full bg-gray-200 dark:bg-[#98ff01]/10 rounded-full overflow-hidden">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className={`inline-block h-full w-[10%] ${
                          i < skill.percentage / 10
                            ? "bg-gradient-to-r from-purple-500 to-black dark:to-[#98ff01]"
                            : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
