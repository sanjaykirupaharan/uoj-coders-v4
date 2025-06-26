"use client";

import Image from "next/image";
import { FloatingNav } from "./ui/floating-navbar";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {};
export const Navbar = ({ }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openBurger = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/#about",
    },

    {
      name: "Timeline",
      link: "/#timeline",
    },
    {
      name: "Guidelines",
      link: "/#guidelines",
    },
    {
      name: "Sponsors",
      link: "/#sponsors",
    },
    // {
    //   name: "Committee",
    //   link: "/committee",
    // },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  return (
    <div className="relative w-full">
      <div
        className={`w-9/12 fixed top-4 inset-x-0 mx-auto border rounded-full border-white/[0.2] bg-zinc-900 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-50 px-2 lg:px-8 py-2 space-x-4`}>
        <div className="w-full flex items-center justify-between">
          {/* <Link href={"/"}>
            <Image
              src="/UoJCodersV3.png"
              width={600}
              height={100}
              alt="logo"
              className="w-24 lg:w-28 2xl:w-36 h-auto"
            />
          </Link> */}
          <div className="hidden lg:flex w-3/4 items-center justify-end gap-x-6 2xl:gap-x-10">
            {navItems &&
              navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={"text-neutral-50 hover:text-neutral-300"}>
                  <span className="hidden sm:block text-sm 2xl:text-lg">
                    {navItem.name}
                  </span>
                </Link>
              ))}
          </div>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger className="flex items-center justify-center">
                <Menu size={28} color="white" className="mr-5" />
              </SheetTrigger>
              <SheetContent side={"right"}>
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <div
                  className={
                    "flex flex-col items-center gap-y-5 w-11/12 mx-auto mt-8 mb-5"
                  }>
                  {navItems &&
                    navItems.map((navItem: any, idx: number) => (
                      <div
                        key={`link=${idx}`}
                        className="w-full h-10 flex flex-col items-center justify-center gap-y-5">
                        <Link
                          href={navItem.link}
                          className={
                            "text-neutral-50 hover:text-neutral-300 text-base"
                          }>
                          {navItem.name}
                        </Link>
                        {idx !== navItems.length - 1 && (
                          <Separator className="bg-zinc-700" />
                        )}
                      </div>
                    ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* <Link href={"https://forms.gle/ivcyuZTn3ghSQ3iV8"} target="_blank">
            <Button
              className="bg-neutral-950 text-white rounded-full 2xl:text-lg"
              containerClassName="h-10 w-28 2xl:h-14 2xl:w-36">
              Register
            </Button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};
