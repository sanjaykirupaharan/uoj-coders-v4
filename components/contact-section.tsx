"use client";

import { Link2, Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Hash } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div
      className="bg-neutral-950 w-full relative py-12 overflow-hidden"
      id="contact">
      <h1 className="mt-5 font-varino text-2xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest">
        Contact Us
      </h1>

      <div className="w-11/12 lg:w-1/4 mx-auto mt-10 flex flex-col items-center justify-center gap-y-10">
        <div className="flex flex-col items-center justify-center gap-y-2 text-white">
          <p className="font-semibold tracking-wide text-lg 2xl:text-xl">
            R. N. Viththagan
          </p>
          <p className="text-sm 2xl:text-base text-zinc-400 font-medium">
            President (CompSoc)
          </p>
          <p>+94 77 448 0178</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 text-white">
          <p className="font-semibold tracking-wide text-lg 2xl:text-xl">
            V. Sayanishan
          </p>
          <p className="text-sm 2xl:text-base text-zinc-400 font-medium">
            Secretary (CompSoc)
          </p>
          <p>+94 77 889 2505</p>
        </div>
      </div>
      <div className="flex justify-center gap-x-8 pt-10">
        <Link
          href="https://www.linkedin.com/company/compsoc-uoj/"
          target="_blank"
          className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-full bg-zinc-500 text-white flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all">
          <Linkedin size={20} />
        </Link>
        <Link
          href="https://www.facebook.com/uojcompsoc"
          target="_blank"
          className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-full bg-zinc-500 text-white flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all">
          <Facebook size={20} />
        </Link>
        <Link
          href="https://www.youtube.com/@CompSocUoJ"
          target="_blank"
          className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-full bg-zinc-500 text-white flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all">
          <Youtube size={20} />
        </Link>
        <Link
          href="https://society.jfn.ac.lk/compsoc/"
          target="_blank"
          className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-full bg-zinc-500 text-white flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all">
          <Link2 size={20} />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-4 pt-10 2xl:text-lg">
        <p className="text-white">Email: </p>
        <p className="text-white underline">compsoc@univ.jfn.ac.lk</p>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center gap-y-2 text-white 2xl:text-lg">
        <p>Computer Society (CompSoc),</p>
        <p>Department of Computer Science,</p>
        <p>University of Jaffna.</p>
      </div>
    </div>
  );
};

export default ContactSection;
