"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Github, Instagram, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "../utils/ContactForm";
import ShinyText from "../ui/ShinyText";

const ContactLink = ({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: typeof Mail;
  children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-primary hover:text-primary-focus transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="mr-2" size={20} />
    {children}
  </motion.a>
);

const MotionImage = motion(Image);

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleDownloadCV = () => {
    const cvUrl =
      "https://pinebaatars.s3.us-west-2.amazonaws.com/cv-resumes/temuujin-gQrjcU.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-12 sm:py-16 bg-gradient-to-b from-background to-secondary/20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center justify-center">
          <motion.div
            className="w-full lg:w-1/2 max-w-md"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MotionImage
              src="/pic.jpg"
              alt="Temuujin Batjargal"
              width={300}
              height={300}
              className="rounded-full shadow-2xl object-contain mx-auto lg:mx-0"
              initial={{ filter: "grayscale(100%)" }}
              animate={isInView ? { filter: "grayscale(0%)" } : {}}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ShinyText
                text="Temuujin Batjargal"
                disabled={false}
                speed={2}
                className=" bg-black text-2xl sm:text-3xl font-semibold"
              />
              <h2 className="text-2xl sm:text-3xl font-semibold"></h2>
              <ContactLink href="mailto:mkae.dev@gmail.com" icon={Mail}>
                mkae.dev@gmail.com
              </ContactLink>
              <ContactLink href="tel:+97699484778" icon={Phone}>
                +(976) 99484778
              </ContactLink>
              <ContactLink href="https://github.com/mkae8" icon={Github}>
                GitHub
              </ContactLink>
              <ContactLink
                href="https://www.instagram.com/mkae8/"
                icon={Instagram}
              >
                Instagram
              </ContactLink>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 max-w-md"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card  p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
                📬 Contact me
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                I&apos;m a passionate developer with a keen interest in creating
                beautiful and functional web applications. Whether you&apos;re
                looking to build a new project or improve an existing one,
                I&apos;m excited to collaborate and bring your ideas to life.
                Let&apos;s work together to create something amazing!
              </p>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button onClick={handleDownloadCV} className="w-full">
                  <FileDown className="mr-2" /> Download CV
                </Button>
              </motion.div>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
