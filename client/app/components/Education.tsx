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
import { ChevronDown, ChevronUp, GraduationCap } from "lucide-react";

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  year: string;
  description: string;
  achievements: string[];
}

const educationData: Education[] = [
  {
    id: 1,
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    year: "2018 - 2022",
    description:
      "Focused on software engineering, data structures, and algorithms. Participated in various hackathons and coding competitions.",
    achievements: ["Dean's List 2020-2022", "Best Capstone Project Award"],
  },
  {
    id: 2,
    institution: "Tech Institute",
    degree: "Associate Degree",
    field: "Web Development",
    year: "2016 - 2018",
    description:
      "Learned fundamentals of web development including HTML, CSS, JavaScript, and basic backend technologies.",
    achievements: ["Perfect Attendance Award", "Top of Class in Web Design"],
  },
  {
    id: 3,
    institution: "Online Learning Platform",
    degree: "Professional Certificate",
    field: "Machine Learning",
    year: "2023",
    description:
      "Completed an intensive online course in machine learning, covering topics such as neural networks, deep learning, and data analysis.",
    achievements: ["Completed with Distinction"],
  },
];

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
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-1 h-4 w-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="mr-1 h-4 w-4" />
              Show More
            </>
          )}
        </button>
      </CardContent>
    </Card>
  );
};

export const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <GraduationCap className="mx-auto h-12 w-12 text-blue-500 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            My academic journey and achievements
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
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
    </section>
  );
};
