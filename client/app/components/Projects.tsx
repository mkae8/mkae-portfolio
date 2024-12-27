"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { TechBackground } from "./TechBackground";
import { Modal } from "./Modal";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Pet Adoption",
    description:
      "The Pet Adoption website provides the following features: Users can post information about pets they want to put up for adoption. Users can view detailed information about a pet by clicking on its listing. Users can search and filter pets by type (e.g., cats, dogs, etc.). Users can add, edit, or delete pet listings. After registering on the PetAdopt website, users interested in adopting a pet can submit an adoption request form for their chosen pet.",
    images: [
      "/pet.png",
      "/pet2.png",
      "/pet3.png",
      "/pet4.png",
      "/create.png",
      "/petemail.png",
      "/information.png",
      "/user.png",
      "/delete.png",
      "/change.png",
      "/don.png",
      "/don2.png",
      "/don3.png",
    ],
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
    description:
      "This E-commerce website is built using React and API integration, offering the following key features Users can view product details such as name, image, price, and description fetched from the API. Users can add selected products to their cart, adjust quantities, and remove items as needed.",
    images: ["/ecom.png", "/ecom1.png", "/ecom2.png", "/ecom3.png"],
    tags: ["React", "API Integration"],
    liveUrl: "https://commerce-topaz-eta-93.vercel.app/",
    githubUrl: "https://github.com/mkae8/E-commerce",
  },
  {
    id: 3,
    title: "Food Delivery",
    description:
      "The Food Delivery project is an online platform that allows users to order food from a variety of restaurants. Users can search for specific dishes and use filters to find their desired food. Each user can register and log in. They also have the option to recover their password. The admin panel allows the addition of new dishes.",
    images: [
      "/food.png",
      "/food2.png",
      "/food3.png",
      "/pass1.png",
      "/pass2.png",
      "/pass3.png",
      "/pass 4.png",
    ],
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
    images: ["/blog.png", "/blog1.png", "/blog2.png", "/blog3.png"],
    tags: ["Next.js", "React", "Tailwindcss"],
    liveUrl: "https://blog-mkae.vercel.app/",
    githubUrl: "https://github.com/mkae8/blog",
  },
];

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => {
  return (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      onClick={onClick}
    >
      <div className="relative h-64">
        <Image
          src={project.images[0]}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              variant="secondary"
              className="text-xs px-2 py-1"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      className="relative min-h-screen py-20 overflow-hidden"
      id="projects"
    >
      <div className="absolute inset-0 z-0">
        <TechBackground />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <Modal
        project={selectedProject!}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
