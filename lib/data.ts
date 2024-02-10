import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated ORT Technical High School",
    location: "Buenos Aires, Argentina",
    description:
      "I graduated with a specialization in Information Technology and Communications.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },  
  {
    title: "Bachelor's Degree in Computer Science",
    location: "Buenos Aires, Argentina",
    description:
      "I completed my Bachelor's degree in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Full Stack Developer at Koibanx",
    location: "Buenos Aires, Argentina",
    description:
      "Currently, I hold a position as a semi-senior developer at Koibanx, a company specializing in integrating blockchain and Web3 technologies into the financial sector",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - present",
  }
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Jest",
  "Docker",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "C",
  "C++",
  "Java",
  "R",
  "Haskell",
  "Smalltalk",
  "Prolog"
] as const;
