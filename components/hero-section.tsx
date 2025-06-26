"use client";

import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { BoxesCore } from "./ui/background-lines";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { Vortex } from "./ui/background-vortex";

type Props = {};
export const HeroSection = ({ }: Props) => {
  return (
    <div className="h-[30rem] lg:h-screen w-full bg-black relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <Image
        width={600}
        height={600}
        src={"/uoj-coders-v4-with-moon-bg-rem.png"}
        alt="logo"
        className="w-80 lg:w-96 z-40"
        />
      {/* <BackgroundGradientAnimation className="z-10" /> */}
      {/* <Vortex className="z-10" /> */}
      {/* <BoxesCore className="z-10" /> */}
      {/* <BackgroundBeams /> */}
      <Image
        width={1600}
        height={400}
        src={"/download.png"}
        alt="University of Jafnna B&W"
        className="absolute left-0 bottom-0 translate-y-[40%] w-screen h-auto filter grayscale z-40"
      />
    </div>
  );
};


