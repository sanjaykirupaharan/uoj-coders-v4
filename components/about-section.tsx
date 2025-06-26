"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";
import { Button } from "./ui/button";

interface LinkButtonProps {
  link: string;
  title: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, title }) => {
  return (
    <Button
      variant="link"
      className="text-blue-300 py-4 text-sm lg:text-lg 2xl:text-xl font-extralight lg:font-light"
      asChild
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </Link>
    </Button>
  );
};

export function AboutSection() {
  return (
    <div id="about">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mb-5 bg-gradient-to-br from-slate-100 to-slate-400 py-4 bg-clip-text font-varino text-center text-2xl lg:text-5xl font-medium text-transparent">
          UOJ CODERS
        </motion.h1>
        <div className="w-11/12 md:w-3/4 flex flex-col gap-y-1">
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="py-4 text-white text-sm lg:text-lg 2xl:text-xl text-justify font-extralight lg:font-light">
            UoJCoders v4.0 is a 12-hour coding inter-university  competition. It's organized by the Computer Society and the Department of Computer Science at the University of Jaffna. The goal is to help students improve their coding and problem-solving skills, especially those studying computing. The event, inspired by IEEEXtreme, is open to all undergraduate students in Sri Lanka.
          </motion.p>
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-white py-4 text-sm lg:text-lg 2xl:text-xl text-justify font-extralight lg:font-light">
            The UoJCoders v4.0 competition is planned to be held on on August 23th and 24th, 2025, at the
            Department of Computer Science, University of Jaffna. It’s a 12-hour online coding challenge run
            through the <LinkButton link={"http://moodle.org/"} title={"Moodle"} /> , which uses a special tool called   <LinkButton link={"https://vpl.dis.ulpgc.es/"} title={"Virtual Programming Lab (VPL) plug-in"} /> plug-in
            along with a <LinkButton link={"https://vpl.dis.ulpgc.es/documentation/vpl-jail-system-3.0.1/"} title={"a separate Jail system"} />.  This setup makes sure each participant works in a safe and private coding space. Even though the contest is online, participants must be physically present at the venue.
            The problems will focus on real-life situations, and students are encouraged to use the right data
            structures and algorithms to solve them. 
          </motion.p>
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-white py-4 text-sm lg:text-lg 2xl:text-xl text-justify font-extralight lg:font-light">
            UoJCoders v1.0 was held on March 16th and 17th, 2019. Over 200 teams joined the elimination round,
            and 25 teams made it to the finals.
          </motion.p>
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-white py-4 text-sm lg:text-lg 2xl:text-xl text-justify font-extralight lg:font-light">
            UoJCoders v2.0 was planned for April 4th and 5th, 2020, but it was canceled because of the COVID-19
            pandemic.
          </motion.p>
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-white py-4 text-sm lg:text-lg 2xl:text-xl text-justify font-extralight lg:font-light">
            UoJCoders v3.0 took place on October 12th and 13th, 2025. More than 100 teams joined the
            elimination round, and 22 teams were selected for the finals. 
          </motion.p>
        </div>
      </LampContainer>
    </div>
  );
}
