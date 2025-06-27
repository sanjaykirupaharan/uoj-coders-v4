"use client";

import Image from "next/image";
import { Vortex } from "./ui/background-vortex";

type Props = {};
export const HeroSection = ({ }: Props) => {
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center antialiased overflow-hidden">

      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <Image
          width={600}
          height={600}
          src={"/moon-01.png"}
          alt="logo"
          className="w-80 lg:w-96 z-40"
        />
      </Vortex>

      <Image
        width={4000}
        height={500}
        src={"/download.png"}
        alt="University of Jafnna B&W"
        className="absolute left-0 bottom-0 translate-y-[40%] w-6xl h-auto filter grayscale z-40 "
      />
    </div>
  );
};


