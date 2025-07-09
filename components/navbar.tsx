"use client";

import Link from "next/link";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
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

  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name);
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
    {
      name: "Previous",
      link: "#", // Placeholder (will be overridden by onClick)
      subItems: [
        {
          name: "UoJ Coders-v1.0",
          link: "https://society.jfn.ac.lk/compsoc/uojcoders/v1/",
        },
        {
          name: "UoJ Coders-v2.0",
          link: "https://society.jfn.ac.lk/compsoc/uojcoders/v2/",
        },
        {
          name: "UoJ Coders-v3.0",
          link: "https://society.jfn.ac.lk/compsoc/uojcoders/v3/",
        },
      ],
    },
    {
      name: "Register !",
      link: "/#guidelines",
      className: "text-violet-500",
    },
  ];

  return (
    <div className="relative w-screen px-5">
      <div
        className={`w-fit fixed top-4 inset-x-0 mx-5 ml-auto md:mx-auto md:mt-3 border rounded-2xl md:rounded-full border-white/[0.2] bg-gray-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-50 px-2 md:px-10 py-3 md:py-4 space-x-4`}>

        <div className="w-full flex items-center justify-center bg-red">
          {/* <Link href={"/"}>
            <Image  
            src="/UoJCodersV3.png"
            width={600}
            height={100}
            alt="logo"
            className="w-24 lg:w-28 2xl:w-36 h-auto"
            />
            </Link> */}
          {/* <div className="hidden md:flex w-3/4 md:items-center md:justify-center gap-x-6 2xl:gap-x-10">
            {navItems &&
              navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={"text-neutral-50 hover:text-neutral-300"}>
                  <span className="hidden sm:block text-sm lg:text-lg">
                    {navItem.name}
                  </span>
                </Link>
              ))}
          </div> */}

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="flex items-right justify-right">
                <Menu size={30} color="white" className="mx-1.5" />
              </SheetTrigger>
              <SheetContent side={"right"} className="bg-[#101221]">
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-center gap-y-5 w-11/12 mx-auto mt-8 mb-5">
                  {navItems.map((navItem, idx) => (
                    <div key={`link=${idx}`} className="w-full">
                      <div className="w-full h-10 flex items-center justify-between">
                        <Link
                          href={navItem.subItems ? "#" : navItem.link} // Prevent navigation if subItems exist
                          onClick={(e) => {
                            if (navItem.subItems) {
                              e.preventDefault();
                              toggleExpand(navItem.name);
                            }
                          }}
                          className="text-neutral-50 hover:text-neutral-300 text-base flex-1"
                        >
                          {navItem.name}
                        </Link>
                        {navItem.subItems && (
                          <button
                            onClick={() => toggleExpand(navItem.name)}
                            className="text-neutral-400 hover:text-neutral-200"
                          >
                            {expandedItem === navItem.name ? (
                              <ChevronUp size={20} />
                            ) : (
                              <ChevronDown size={20} />
                            )}
                          </button>
                        )}
                      </div>
                      {navItem.subItems && expandedItem === navItem.name && (
                        <div className="pl-4 mt-2 space-y-3">
                          {navItem.subItems.map((subItem, subIdx) => (
                            <div key={`sub-link-${subIdx}`}>
                              <Link
                                href={subItem.link}
                                target="_blank"
                                className="text-neutral-400 hover:text-neutral-200 text-sm block py-1"
                              >
                                {subItem.name}
                              </Link>
                              {subIdx !== navItem.subItems!.length - 1 && (
                                <Separator className="bg-zinc-700" />
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      {idx !== navItems.length - 1 && (
                        <Separator className="bg-zinc-700" />
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};
