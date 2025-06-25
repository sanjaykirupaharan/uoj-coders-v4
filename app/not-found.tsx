"use client";

import { CircleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-zinc-950 text-white text-sm lg:text-base 2xl:text-lg tracking-wider h-screen w-screen flex flex-col gap-y-2 items-center justify-center">
      <CircleAlert size={40} className="mb-2" />
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}
