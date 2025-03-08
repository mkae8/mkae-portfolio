"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Brain,
  Terminal,
  GraduationCap,
  Plane,
  FileDown,
} from "lucide-react";
import ShinyText from "../ui/ShinyText";
import DecryptedText from "../ui/DecryptedText";
import { Button } from "@/components/ui/button";

const timelineItems = [
  {
    year: "2018 - 2023",
    icon: GraduationCap,
    title: "Kainan University",
    description:
      "Completed a Bachelor's degree in Business Administration at Taiwan Kainan University from 2018 to 2023.",
  },
  {
    year: "2020 - 2023",
    icon: Plane,
    title: "FedEx Taiwan",
    description:
      "Optimized workflow processes, improved time management, and enhanced team communication, Gained experience in logistics and warehouse associate.",
  },
  {
    year: "2024 - 2025",
    icon: GraduationCap,
    title: "Pinecone Academy",
    description:
      "Learned fundamentals of web development including HTML, CSS, JavaScript, and learn MERN, full-stack developer",
  },
  {
    year: "2024",
    icon: Terminal,
    title: "Started Programming",
    description: "I started learning HTML, CSS, and JavaScript fundamentals",
    color: "purple-500",
  },
  {
    year: "2025",
    icon: Code2,
    title: "Full Stack Development",
    description: "React, Node.js, and modern web development",
    color: "purple-500",
  },
  {
    year: "2025",
    icon: Brain,
    title: "Advanced Technologies",
    description: "Learned TypeScript, Next.js, and cloud platforms +",
    color: "purple-500",
  },
];

const stats = [
  {
    number: "85%",
    label: "CREATIVITY",
  },
  {
    number: "95%",
    label: "PERSISTENCE",
  },
  {
    number: "90%",
    label: "TEAMWORK",
  },
  {
    number: "80%",
    label: "SELF-DISCIPLINE",
  },
  {
    number: "97%",
    label: "GROWTH",
  },
  {
    number: "92%",
    label: "PRODUCTIVITY",
  },
];

export const About = () => {
  const handleDownloadCV = () => {
    const cvUrl =
      "https://pinebaatars.s3.us-west-2.amazonaws.com/cv-resumes/temuujin-gQrjcU.pdf";
    window.open(cvUrl, "_blank");
  };
  return (
    <section
      className="min-h-screen py-20 relative overflow-hidden bg-white dark:bg-black text-black dark:text-white"
      id="about"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-center mb-16 text-6xl text-gray-300">
            <h2 className="flex flex-col items-center justify-center gap-2">
              <span className="font-sedgwick text-4xl  text-black dark:text-purple-400">
                SOMETHING
              </span>
              <DecryptedText
                text="ABOUT ME"
                animateOn="view"
                speed={120}
                maxIterations={30}
                revealDirection="start"
                characters="#$%!@%^&*"
                sequential={true}
                className="text-6xl font-sedgwick font-bold text-black dark:text-[#98ff01]"
              />
            </h2>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-20 md:ml-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <div className="grid grid-cols-3 gap-8 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-black dark:text-[#98ff01] text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-black text-justify dark:text-gray-300 text-xl ">
              Hello, my name is Batjargal Temuujin. I have a bachelor&apos;s
              degree in{" "}
              <ShinyText
                text="Business Administration"
                disabled={false}
                speed={2}
                className="custom-class bg-black"
              />{" "}
              from Kainan University in Taiwan. After returning to Mongolia, I
              joined the Software Engineering program at{" "}
              <ShinyText
                text="Pinecone Academy"
                disabled={false}
                speed={2}
                className="custom-class bg-black"
              />{" "}
              , where I gained experience in developing various types of
              websites. Currently, I am interested in using my Full Stack
              development knowledge to create user-friendly and effective web
              solutions.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden w-[300px] h-[350px]">
              <Image
                src="/Temuujin.jpg"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300"
              />
            </div>
            <h3 className="text-3xl md:text-3xl mt-2 text-center">
              <ShinyText
                text="Temuujin Batjargal"
                disabled={false}
                speed={2}
                className="text-3xl font-bold bg-black"
              />
            </h3>
            <Button
              onClick={handleDownloadCV}
              className="w-full bg-black text-white hover:bg-purple-500"
            >
              <FileDown className="mr-2" /> Download CV
            </Button>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-black/20 dark:bg-[#98ff01]/20" />

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-16 mb-12 last:mb-0"
            >
              <div className="absolute left-6 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-black dark:border-[#98ff01] transform -translate-x-1/2" />
              <div className="p-6 rounded-lg border-2 border-dashed border-black/20 dark:border-[#98ff01]/20 bg-white dark:bg-black/50 backdrop-blur-sm">
                <div className="flex items-center mb-2">
                  <item.icon
                    className={`w-6 h-6 mr-3 ${
                      item.color
                        ? `text-${item.color}`
                        : "text-black dark:text-[#98ff01]"
                    }`}
                  />
                  <span
                    className={`font-bold ${
                      item.color
                        ? `text-${item.color}`
                        : "text-black dark:text-white"
                    }`}
                  >
                    {item.year}
                  </span>
                </div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    item.color
                      ? `text-${item.color}`
                      : "text-black dark:text-[#98ff01]"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-black dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
