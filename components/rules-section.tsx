"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const RulesSection = () => {
  return (
    <div
      className="bg-neutral-950 w-full relative py-12 overflow-hidden items-center justify-center mx-auto "
      id="guidelines">
      <h1 className="font-varino text-xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest">
        Guidelines
      </h1>
      <ul className="pt-10 w-10/12 lg:w-8/12 h-auto mx-auto 2xl:text-lg flex flex-col gap-y-5 text-white list-disc text-justify font-light">
        <li>A team can have up to 3 members.</li>
        <Separator className="bg-zinc-600" />
        <li>
          The elimination round will be held online on July 30th, 2025,
          with an introduction from 6:30 PM to 7:00 PM and the competition from
          7:00 PM to 8:00 PM.
        </li>
        <Separator className="bg-zinc-600" />
        <li>
          The selection of teams for the final round will be purely based on the
          scores obtained in the elimination round.
        </li>
        <Separator className="bg-zinc-600" />
        <li>Minimum 20 teams will be selected for the final round.</li>
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

      <CardContainer className="inter-var">
        <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-fit h-fit rounded-full px-10 py-4 border">
          <CardItem
            translateZ="100"
            className="text-lg bg-transparent font-bold text-neutral-600 dark:text-violet-500"
          >
            <Link href="https://forms.gle/oceN1bu6jMFRddpN8" target="_blank" rel="noopener noreferrer">
              Register Now
            </Link>
          </CardItem>
        </CardBody>
      </CardContainer>
      {/* <Button
        borderRadius="1.75rem"
        className="bg-transparent"
      >
        Register
      </Button> */}

    </div >
  );
};

export default RulesSection;
