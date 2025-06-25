"use client";

import React from "react";
import {
  UserPen,
  UserRoundX,
  UserRoundMinus,
  Rocket,
  Trophy,
} from "lucide-react";
import { Timeline } from "./ui/timeline";

export function TimelineSection() {
  return (
    <div className="bg-neutral-950 w-full py-10" id="timeline">
      <h1 className="font-varino text-xl lg:text-4xl text-center font-bold text-white mb-16 uppercase tracking-widest">
        Timeline
      </h1>
      <div className="w-11/12 lg:w-3/4 mx-auto">
        <Timeline data={timelineSteps} />
      </div>
    </div>
  );
}

const timelineSteps = [
  {
    title: "September 09, 2024",
    content: (
      <div className="w-64 lg:w-96 my-2 flex flex-col gap-y-1 items-start justify-start pb-20">
        <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
          Registration Opens
        </h2>
        <p className="text-base lg:text-lg text-slate-200">
          The registration will be open for all participants.
        </p>
      </div>
    ),
  },
  {
    title: "September 23, 2024",
    content: (
      <div className="w-64 lg:w-96 my-2 flex flex-col gap-y-1 items-start justify-start pb-20">
        <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
          Registration Closes
        </h2>
        <p className="text-base lg:text-lg text-slate-200">
          This is the last day to register for the competition.
        </p>
      </div>
    ),
  },
  {
    title: "September 26, 2024",
    content: (
      <div className="w-64 lg:w-96 my-2 flex flex-col gap-y-1 items-start justify-start pb-20">
        <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
          Elimination Round
        </h2>
        <p className="text-base lg:text-lg text-slate-200">
          This round will be conducted online
        </p>
      </div>
    ),
  },
  {
    title: "October 12, 2024",
    content: (
      <div className="w-64 lg:w-96 my-2 flex flex-col gap-y-1 items-start justify-start pb-20">
        <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
          Final Round
        </h2>
        <p className="text-base lg:text-lg text-slate-200">
          Participants are expected to be present at the competition venue.
        </p>
      </div>
    ),
  },
  {
    title: "October 13, 2024",
    content: (
      <div className="w-64 lg:w-96 my-2 flex flex-col gap-y-1 items-start justify-start pb-20">
        <h2 className="text-white text-lg lg:text-xl font-semibold w-fit tracking-wider">
          Awarding Ceremony
        </h2>
        <p className="text-base lg:text-lg text-slate-200">
          The winners will be awarded, and certificates will be provided to
          all participants.
        </p>
      </div>
    ),
  },
];
