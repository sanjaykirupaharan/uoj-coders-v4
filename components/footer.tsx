"use client";

import { AtSign } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-zinc-900 pt-2">
      <img src="/Banners Coders Finale.png" alt="banner" className="my-5" />
      <div className="w-full h-20 lg:h-10 bg-zinc-800 text-zinc-200">
        <div className="mx-auto w-11/12 h-full flex flex-col items-center justify-center gap-y-2 lg:flex-row lg:gap-y-0 lg:justify-between font-extralight">
          <p className="text-sm 2xl:text-base text-center">
            &copy; 2024{" "}
            <Link
              href={"https://society.jfn.ac.lk/compsoc/"}
              target="_blank"
              className="underline tracking-wide">
              Computer Society
            </Link>
            , Department of Computer Science, UoJ. All Rights Reserved.
          </p>
          <p className="text-sm 2xl:text-base">
            Developed By{" "}
            <Link
              href={"https://www.linkedin.com/in/chamod-rashmika/"}
              target="_blank"
              className="underline tracking-wide">
              Chamod Rashmika
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
