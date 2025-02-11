/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  logo: string;
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  year: string;
  description: string;
  achievements: string[];
  logo: string;
}

const experienceData: Experience[] = [
  {
    id: 1,
    company: "FedEx Taiwan",
    position: "Part-time",
    period: "2020 - 2023",
    description: "Gained experience in logistics and warehouse associate.",
    responsibilities: [
      "Optimized workflow processes, improved time management, and enhanced team communication.",
      "Oversaw and coordinated freight and delivery operations.",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6WP6mrbgf7EdFzx4LQhRJi7fmR0zFfrh8A&s",
  },
];

const educationData: Education[] = [
  {
    id: 1,
    institution: "Kainan University",
    degree: "Bachelor of Business Administration",
    field: "Taiwan ",
    year: "2018 - 2023",
    description:
      "Completed a Bachelor's degree in Business Administration at Taiwan Kainan University from 2018 to 2023.",
    achievements: [
      "Successfully participated in the Mongolian Day event in Taiwan and won a trophy and medal.",
    ],
    logo: "https://www.edarabia.com/wp-content/uploads/2018/05/kainan-university-taoyuan-taiwan.jpg",
  },
  {
    id: 2,
    institution: "Pinecone Academy",
    degree: "Software Engineer Certification",
    field: "Web Development",
    year: "2024 - 2025",
    description:
      "Learned fundamentals of web development including HTML, CSS, JavaScript, and learn MERN, full-stack developer",
    achievements: ["Team leader"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CiTFpFgtgX6gfMv1ILNcPgDic__3g2ukVw&s",
  },
];

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full mb-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={experience.logo || "/placeholder.svg"}
              alt={`${experience.company} logo`}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <CardTitle>{experience.company}</CardTitle>
              <CardDescription>{experience.position}</CardDescription>
            </div>
          </div>
          <Badge variant="secondary">{experience.period}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-2">{experience.description}</p>
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <h4 className="font-semibold mt-2 mb-1">Key Responsibilities:</h4>
          <ul className="list-disc pl-5">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </motion.div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 flex items-center text-sm text-blue-500 hover:text-blue-700 transition-colors duration-200"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-1 h-4 w-4" />
              <span className="sr-only">Hide</span> Show Less
            </>
          ) : (
            <>
              <ChevronDown className="mr-1 h-4 w-4" />
              <span className="sr-only">Show</span> Show More
            </>
          )}
        </button>
      </CardContent>
    </Card>
  );
};

const EducationCard = ({ education }: { education: Education }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full mb-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={education.logo || "/placeholder.svg"}
              alt={`${education.institution} logo`}
              width={64}
              height={64}
              className="rounded-full"
            />
            <CardTitle>{education.institution}</CardTitle>
          </div>
          <Badge variant="secondary">{education.year}</Badge>
        </div>
        <CardDescription>
          {education.degree} in {education.field}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-2">{education.description}</p>
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <h4 className="font-semibold mt-2 mb-1">Achievements:</h4>
          <ul className="list-disc pl-5">
            {education.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </motion.div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 flex items-center text-sm text-blue-500 hover:text-blue-700 transition-colors duration-200"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-1 h-4 w-4" />
              <span className="sr-only">Hide</span> Show Less
            </>
          ) : (
            <>
              <ChevronDown className="mr-1 h-4 w-4" />
              <span className="sr-only">Show</span> Show More
            </>
          )}
        </button>
      </CardContent>
    </Card>
  );
};

export const Portfolio = () => {
  return (
    <section
      className="py-16 bg-gray-100 dark:bg-black min-h-screen"
      id="education"
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl space-y-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                💼 Work Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                My professional journey and accomplishments
              </p>
            </motion.div>
            <AnimatePresence>
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ExperienceCard experience={exp} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                🎓 Education
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                My academic journey and achievements
              </p>
            </motion.div>
            <AnimatePresence>
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <EducationCard education={edu} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
