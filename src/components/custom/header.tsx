import Image from "next/image";
import coderyLogo from "/public/codery-logo.svg";
import Link from "next/link";
import {menuLinks} from "@/constants/data";
import {Button} from "@/components/ui/button";
import {Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger} from "@/components/ui/sheet";
import React from "react";
import {MenuIcon} from "lucide-react";

const Header = () => {
    return (
        <header>
            <div
                className="lg:flex justify-between bg-background-light py-5 px-[3%] mx-[7%] my-6 rounded-[24px] hidden">
                <Image
                    src={coderyLogo}
                    alt="Codery logo"
                    height={0}
                    width={0}
                    className="h-auto w-auto"
                />
                <div className="flex items-center space-x-8">
                    {menuLinks.map(menuLink => (
                        <ul key={menuLink.link}>
                            <li>
                                <Link href={menuLink.hash}>
                                    {menuLink.link}
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>

            <div
                className="flex justify-between bg-background-light py-5 px-[3%] mx-[7%] my-6 rounded-[24px] lg:hidden">
                <Image
                    src={coderyLogo}
                    alt="Codery logo"
                    height={0}
                    width={0}
                    className="h-auto w-auto"
                />

                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" className="bg-background rounded-[10px]">
                            <MenuIcon className="text-foreground"/>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right">
                        <SheetHeader className="text-left text-lg font-semibold">
                            Menu
                        </SheetHeader>

                        <div className="flex flex-col gap-y-4 mt-8">
                            {menuLinks.map(menuLink => (
                                <ul key={menuLink.link}>
                                    <li>
                                        <SheetClose>
                                            <Link href={menuLink.hash}
                                                  className=" flex gap-x-2"
                                            >
                                                {menuLink.icon}{menuLink.link}
                                            </Link>
                                        </SheetClose>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};
export default Header;
