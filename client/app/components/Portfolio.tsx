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
import { ChevronDown, ChevronUp, Briefcase, GraduationCap } from "lucide-react";

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  year: string;
  description: string;
  achievements: string[];
}

const experienceData: Experience[] = [
  {
    id: 1,
    company: "FedEx Taiwan ",
    position: "Part-time",
    period: "2020 - 2023",
    description: "Gained experience in logistics and customer service.",
    responsibilities: [
      "Optimized workflow processes, improved time management, and enhanced team communication.",
      "Oversaw and coordinated freight and delivery operations.",
    ],
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
      "Completed a Bachelor’s degree in Business Administration at Taiwan Kainan University from 2018 to 2023.",
    achievements: [
      "Successfully participated in the Mongolian Day event in Taiwan and won a trophy and medal.",
    ],
  },
  {
    id: 2,
    institution: "Pinecone",
    degree: "Software Engineer Certification",
    field: "Web Development",
    year: "2024 - 2025",
    description:
      "Learned fundamentals of web development including HTML, CSS, JavaScript, and learn MORN, full-stack developer",
    achievements: ["Team leader"],
  },
];

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full mb-4">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{experience.company}</span>
          <Badge variant="secondary">{experience.period}</Badge>
        </CardTitle>
        <CardDescription>{experience.position}</CardDescription>
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
        <CardTitle className="flex justify-between items-center">
          <span>{education.institution}</span>
          <Badge variant="secondary">{education.year}</Badge>
        </CardTitle>
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
    <section className="py-16 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl space-y-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <Briefcase className="mx-auto h-12 w-12 text-blue-500 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Work Experience
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
              <GraduationCap className="mx-auto h-12 w-12 text-blue-500 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Education
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
