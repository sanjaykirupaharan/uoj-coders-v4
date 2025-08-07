"use client";

// import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import { Vortex } from "./ui/background-vortex";
// import { TypewriterEffect } from "./ui/typewriter-effect";
// import { motion } from "framer-motion";
// import { HeroHighlight, Highlight } from "./ui/hero-highlight";

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
          {/* <HeroHighlight>
              <h1 className="font-varino underline text-2xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest">
                Sponsors
              </h1>
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
                className="font-varino underline text-2xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest mb-10 border-2px"
              >
                Sponsors
              </motion.h1>
              <TypewriterEffect className="font-varino text-2xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest" words={words} />
            </HeroHighlight> */}
          <Vortex
            backgroundColor="black"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full -z-10"
          />

          {/* </Vortex> */}
        </div>

        <h1 className="font-varino underline text-2xl lg:text-4xl text-center font-bold bg-gradient-to-b from-[#18ccfc] via-[#6344f5] to-[#ae48ff] bg-clip-text text-transparent uppercase tracking-widest z-10">
          Sponsors
        </h1>
        <div className="w-full mx-auto z-10">
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#e8e6e3] via-[#f5f5f5] to-[#d3d1ce] 
            shadow-[inset_0_0_15px_rgba(0,10,100,0.3)] text-3xl font-bold tracking-wide">
              Platinum Sponsor
            </h2>
            <div className="flex flex-wrap justify-center gap-x-2">
              <Link href={"https://apptimustech.com/about"} target="_blank" className="cursor-pointer z-30">
                <img
                  src="/sponsors/appt-bg-rem.png"
                  alt="Apptimus"
                  className="w-72 lg:w-96 h-auto"
                />
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-y-5 mt-16">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b bg-gradient-to-b from-[#c9c9c9] via-[#e5e5e5] to-[#8a8a8a] 
            shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] text-3xl font-bold tracking-wide">
              Silver Sponsor
            </h2>
            <div className="flex flex-wrap justify-center gap-x-4">
              <Link href={"https://unicomsd.com/about-us/"} target="_blank" className="cursor-pointer z-30">
                <img
                  src="/sponsors/unicom-sd.png"
                  alt="Unicom SD"
                  className="mt-5 w-72 lg:w-96 h-auto"
                />
              </Link>
            </div>
          </div>
          {/* <div className="w-full flex flex-col justify-center items-center gap-y-5 mt-16">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
