"use client";

import { Separator } from "./ui/separator";

const RulesSection = () => {
  return (
    <div
      className="bg-neutral-950 w-full relative py-12 overflow-hidden"
      id="guidelines">
      <h1 className="font-varino text-xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest">
        Guidelines
      </h1>
      <ul className="pt-10 w-10/12 lg:w-8/12 h-auto mx-auto 2xl:text-lg flex flex-col gap-y-5 text-white list-disc text-justify font-light">
        <li>A team can have up to 3 members.</li>
        <Separator className="bg-zinc-600" />
        <li>
          The elimination round will be held online on September 26th, 2024,
          with an introduction from 6:30 PM to 7:00 PM and the competition from
          7:00 PM to 8:00 PM.
        </li>
        <Separator className="bg-zinc-600" />
        <li>
          The selection of teams for the final round will be purely based on the
          scores obtained in the elimination round.
        </li>
        <Separator className="bg-zinc-600" />
        <li>Only 20 teams will be selected for the final round.</li>
        <Separator className="bg-zinc-600" />
        <li>
          Team members must solve the problems without any assistance from other
          people, pre-written code, or AI tools. Plagiarized teams will be
          disqualified.
        </li>
        <Separator className="bg-zinc-600" />
        <li>
          All final decisions will be made by the Computer Society (CompSoc),
          Department of Computer Science, University of Jaffna.
        </li>
      </ul>
    </div>
  );
};

export default RulesSection;
