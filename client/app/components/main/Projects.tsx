"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import DecryptedText from "../ui/DecryptedText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TechBackground } from "../TechBackground";

type ProjectCategory =
  | "all"
  | "landing page"
  | "website"
  | "mobile app"
  | "seo";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Pet Adoption",
    category: "website",
    image: "/pet.png",
    description:
      "The Pet Adoption website provides users with comprehensive features for pet adoption management, including posting pets, viewing details, and submitting adoption requests.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwindcss",
      "Shadcnui",
      "Typescript",
      "Cloudflare",
      "Clerk",
    ],
    liveUrl: "https://pet-adopt-nu.vercel.app/",
    githubUrl: "https://github.com/mkae8/Pet-Adopt",
  },
  {
    id: 2,
    title: "E-commerce",
    category: "website",
    image: "/ecom.png",
    description:
      "An e-commerce platform built with React and API integration, featuring product management and cart functionality.",
    tags: ["React", "API Integration"],
    liveUrl: "https://commerce-topaz-eta-93.vercel.app/",
    githubUrl: "https://github.com/mkae8/E-commerce",
  },
  {
    id: 3,
    title: "Food Delivery",
    category: "website",
    image: "/food.png",
    description:
      "A food delivery platform with user authentication, search functionality, and admin panel for restaurant management.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Express.js",
      "Node.js",
      "MongoDb",
      "Mui",
    ],
    liveUrl: "https://food-delivery-mkae.vercel.app/",
    githubUrl: "https://github.com/mkae8/Food-delivery",
  },
  {
    id: 4,
    title: "Blog",
    category: "website",
    image: "/blog.png",
    description:
      "A blog website that fetches and displays articles from dev.to API, built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "React", "Tailwindcss"],
    liveUrl: "https://blog-mkae.vercel.app/",
    githubUrl: "https://github.com/mkae8/blog",
  },
];

export const Projects = () => {
  return (
    <section
      className="relative min-h-screen py-20 bg-white dark:bg-black"
      id="projects"
    >
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-50">
        <TechBackground />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 text-6xl">
          <h2 className="flex flex-col items-center justify-center gap-2">
            <span className="text-4xl font-sedgwick text-black dark:text-purple-400 font-mono">
              HERE IS MY
            </span>
            <DecryptedText
              text="PROJECTS"
              animateOn="view"
              speed={110}
              maxIterations={30}
              revealDirection="start"
              characters="爱缘恒悟破晓"
              sequential={true}
              className="text-6xl font-sedgwick text-black dark:text-[#98ff01]"
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatePresence mode="wait">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className="relative h-[600px] w-full perspective-1000">
                  <div className="absolute inset-0 transform group-hover:-rotate-x-12 transition-transform duration-500">
                    <div className="relative h-full w-full bg-gray-100 dark:bg-zinc-900 rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-zinc-800">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white to-transparent dark:from-black/90 dark:via-black/50 dark:to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-3xl font-bold text-black dark:text-white mb-1">
                              {project.title}
                            </h3>
                          </div>

                          <p className="text-black dark:text-zinc-300 line-clamp-2">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="bg-gray-200 text-black hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-4 pt-4">
                            <Button
                              asChild
                              variant="default"
                              className="bg-black text-white hover:bg-black/90 dark:bg-[#98ff01] dark:text-black dark:hover:bg-[#98ff01]/90"
                            >
                              <Link href={project.liveUrl} target="_blank">
                                <Globe className="w-4 h-4 mr-2" />
                                Live Demo
                              </Link>
                            </Button>
                            <Button
                              asChild
                              variant="outline"
                              className="border-gray-300 text-black hover:bg-gray-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
                            >
                              <Link href={project.githubUrl} target="_blank">
                                <Github className="w-4 h-4 mr-2" />
                                Source Code
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
