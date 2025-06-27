"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const SponsorsSection = () => {
  const words = [
    {
      text: "Announcing",
    },
    {
      text: "soon",
    },
    {
      text: "....",
    }
  ];

  return (
    <div className="bg-neutral-900 w-full overflow-hidden" id="sponsors">
      <div className="h-[40rem] md:h-screen relative w-full bg-black flex flex-col items-center justify-center gap-y-20 overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 ">
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="font-varino underline text-2xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest mb-10"
            >
              Sponsors
              {/* <Highlight className="text-black dark:text-white">
                copy, of a copy, of a copy.
                </Highlight> */}
            </motion.h1>
            <TypewriterEffect className="font-varino text-2xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest" words={words} />
          </HeroHighlight>
        </div>


        {/* <div className="w-full mx-auto">
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#dfdedc] via-[#ecece9] to-[#d3d3d2] text-3xl font-bold tracking-wide">
              Platinum Sponsor
            </h2>
            <div className="flex flex-wrap justify-center gap-x-4">
              <Link
                href={"https://www.oyslans.com/about-us"}
                target="_blank"
                className="cursor-pointer z-30">
                <img
                  src="/sponsors/Oyslans-white-letters.png"
                  alt="Oyslans"
                  className="mt-5 w-72 lg:w-96 h-auto"
                />
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-y-5 mt-16">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-3xl font-bold tracking-wide">
              Golden Sponsor
            </h2>
            <div className="flex flex-wrap justify-center gap-x-4">
              <Link href={""} target="_blank" className="cursor-pointer z-30">
                <img
                  src="/sponsors/TF bold.png"
                  alt="Oyslans"
                  className="mt-5 w-72 lg:w-96 h-auto"
                />
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-y-5 mt-16">
            <h2 className="text-3xl font-bold tracking-wide">Event Partners</h2>
            <div className="flex flex-col items-center justify-center gap-y-6">
              <div className="flex flex-col lg:flex-row items-center gap-y-6 lg:gap-x-20 lg:justify-around">
                <Link
                  href={"https://www.senzmate.com/"}
                  target="_blank"
                  className="cursor-pointer z-30">
                  <img
                    src="/sponsors/senzmate.png"
                    alt="Oyslans"
                    className="mt-5 w-72 lg:w-96 h-auto"
                  />
                </Link>
                <Link
                  href={"https://unicomsd.com/"}
                  target="_blank"
                  className="cursor-pointer z-30">
                  <img
                    src="/sponsors/Uncom-Logo-1.png"
                    alt="Oyslans"
                    className="mt-5 w-72 lg:w-96 h-auto"
                  />
                </Link>
              </div>
              <Link href={""} target="_blank" className="cursor-pointer z-30">
                <img
                  src="/sponsors/logo_english2.png"
                  alt="Oyslans"
                  className="mt-5 w-72 lg:w-96 h-auto"
                />
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SponsorsSection;
