"use client";

import Image from "next/image";
import { ShootingStars } from "./ui/background-shooting-stars";
import { StarsBackground } from "./ui/background-stars";

type Props = {};
export const HeroSection = ({ }: Props) => {
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center antialiased overflow-hidden">

      <StarsBackground className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full" />
      <ShootingStars />
      <Image
        width={600}
        height={600}
        src={"/moon-v4.png"}
        alt="logo"
        className="w-80 lg:w-96 xl:scale-125 z-40"
      />

      <Image
        width={4000}
        height={500}
        src={"/jaffna-silhouette.png"}
        alt="University of Jafnna B&W"
        className="absolute left-0 bottom-0 translate-y-[40%] w-6xl h-auto filter grayscale z-40 md:scale-100 scale-125 "
      />
    </div>
  );
};


