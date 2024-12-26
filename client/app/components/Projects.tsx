/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Pet Adoption",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "./pet.png",
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
    description: "Real-time weather forecasting using OpenWeatherMap API",
    image: "./blog.png",
    tags: ["React", "API Integration"],
    liveUrl: "https://commerce-topaz-eta-93.vercel.app/",
    githubUrl: "https://github.com/mkae8/E-commerce",
  },
  {
    id: 3,
    title: "Food Delivery",
    description:
      "The Food Delivery project is an online platform that allows users to order food from a variety of restaurants. Users can search for specific dishes and use filters to find their desired food. Each user can register and log in. They also have the option to recover their password. The admin panel allows the addition of new dishes.",
    image: "./food.png",
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
    description:
      "This project is a blog website developed using Next.js, React.js, and Tailwind CSS. The website uses the fetch function to fetch and display articles from dev.to. The link used to fetch data from the API is https://dev.to/api/articles.",
    image: "blog.png",
    tags: ["Next.js", "React", "Tailwindcss"],
    liveUrl: "https://blog-mkae.vercel.app/",
    githubUrl: "https://github.com/mkae8/blog",
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="flex h-screen items-center">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-black text-center p-4">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="mb-4">{project.description}</p>
                      <div className="flex justify-center space-x-2">
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" /> GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="overflow-scroll"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
