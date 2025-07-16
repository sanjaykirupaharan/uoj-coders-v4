"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 w-fit mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem href="/#" setActive={setActive} active={active} item="Home" />
                <MenuItem href="/#about" setActive={setActive} active={active} item="About" />
                <MenuItem href="/#timeline" setActive={setActive} active={active} item="Timeline" />
                <MenuItem href="/#awards" setActive={setActive} active={active} item="Awards" />
                <MenuItem href="/#guidelines" setActive={setActive} active={active} item="Guidlines" />
                <MenuItem href="/#sponsors" setActive={setActive} active={active} item="Sponsors" />
                <MenuItem href="/#contact" setActive={setActive} active={active} item="Contacts" />
                <MenuItem href="javascript:void(0);" setActive={setActive} active={active} item="Previous">
                    <div className="  text-sm grid grid-cols-1 gap-10 p-4">
                        <ProductItem
                            title="UoJ Coders - v1.0"
                            href="https://society.jfn.ac.lk/compsoc/uojcoders/v1/"
                            src="https://society.jfn.ac.lk/compsoc/uojcoders/v1/img/logo_bg.png"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="UoJ Coders - v2.0"
                            href="https://society.jfn.ac.lk/compsoc/uojcoders/v2/"
                            src="https://society.jfn.ac.lk/compsoc/uojcoders/v2/img/logo-main.png"
                            description="Production ready Tailwind css components for your next project"
                        />
                        <ProductItem
                            title="UoJ Coders - v3.0"
                            href="https://society.jfn.ac.lk/compsoc/uojcoders/v3/"
                            src="https://society.jfn.ac.lk/compsoc/uojcoders/v3/UoJCodersV3.0_with_moon.png"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                    </div>
                </MenuItem>
                <MenuItem className="text-violet-500" href="/#guidelines" setActive={setActive} active={active} item="Register !" />

            </Menu>
        </div>
    );
}
