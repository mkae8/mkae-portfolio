"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Instagram, FileDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleDownloadCV = () => {
    const cvUrl =
      "https://pinebaatars.s3.us-west-2.amazonaws.com/cv-resumes/temuujin-p8SACY.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download =
      "https://pinebaatars.s3.us-west-2.amazonaws.com/cv-resumes/temuujin-p8SACY.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/pic.jpg"
              alt="Temuujin Batjargal"
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-contain"
            />
            <div className="mt-6 space-y-4">
              <a
                href="mailto:mkae.dev@gmail.com"
                className="flex items-center text-primary hover:underline"
              >
                <Mail className="mr-2" /> mkae.dev@gmail.com
              </a>
              <a
                href="tel:+97699484778"
                className="flex items-center text-primary hover:underline"
              >
                <Phone className="mr-2" /> +(976) 99484778
              </a>
              <a
                href="https://github.com/mkae8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <Github className="mr-2" /> GitHub
              </a>
              <a
                href="https://www.instagram.com/mkae8/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <Instagram className="mr-2" /> Instagram
              </a>
            </div>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button onClick={handleDownloadCV} className="w-[300px]">
                <FileDown className="mr-2" /> CV
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
