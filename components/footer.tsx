"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-zinc-900 pt-2">
      <div className="w-full h-20 lg:h-10 bg-zinc-800 text-zinc-200">
        <div className="mx-auto w-11/12 h-full flex items-center justify-center gap-y-2 lg:gap-y-0 lg:justify-center font-extralight">
          <p className="text-sm 2xl:text-base text-center">
            &copy; 2025{" "}
            <Link
              href={"https://society.jfn.ac.lk/compsoc/"}
              target="_blank"
              className="underline tracking-wide">
              Computer Society
            </Link>
            , Department of Computer Science, UoJ. All Rights Reserved.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
