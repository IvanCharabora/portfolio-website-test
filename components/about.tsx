"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {/* After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
        <span className="font-medium">After graduating from ORT Technical High School with a specialization in Information Technology and Communications in 2018, where I gained foundational knowledge in programming, hardware, networks, design, and project development, I pursued a Bachelor's degree in Computer Science at the University of Buenos Aires (UBA) from 2019 to 2024. {" "}
        </span>
        </p>
        <p>
        <span className="font-medium">During my time at UBA, I acquired solid knowledge in algorithms, data structures, computer organization, operating systems, mathematical fundamentals, artificial intelligence, and communication theory. During my undergraduate thesis, I had the opportunity to apply my skills to a directed research project, solidifying my understanding and ability to tackle challenges in computing. {" "}
        </span>
        </p>
        <p>
        <span className="font-medium">In addition to my academic background, I began working at a startup called Koibanx while attending university, where I am currently employed. The Koibanx platform integrates blockchain and Web3 into the financial system, enabling TradFI to connect with the financial technology of the future. Here, I had the opportunity to apply my theoretical knowledge in a practical setting, developing programming skills while working on real-world projects. {" "}
        </span>
      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
