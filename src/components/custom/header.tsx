"use client"

import Image from "next/image";
import coderyLogo from "/public/images/codery-logo.svg";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger} from "@/components/ui/sheet";
import React from "react";
import {MenuIcon} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {cta, emailContact, menuLinks} from "@/constants/deData";

const Header = () => {
    return (
        <header className="sticky top-5 z-10">
            <div
                className="lg:flex justify-between bg-background-light py-5 px-[3%] mx-[7%] my-6 rounded-[24px] hidden">
                <Image
                    src={coderyLogo}
                    alt="Codery logo"
                />

                <ul className="flex items-center space-x-8">
                    {menuLinks.map(menuLink => (
                        <li
                            key={menuLink.link}
                            className="hover:text-primary"
                        >
                            <Link href={menuLink.hash}>
                                {menuLink.link}
                            </Link>
                        </li>
                    ))}
                    <li className="hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar className="w-[35px] h-auto">
                                    <AvatarImage
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Switzerland_2-3.svg"/>
                                    <AvatarFallback>EN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <Link href="">
                                    <DropdownMenuItem className="gap-3">
                                        <Avatar className="w-[35px] h-auto">
                                            <AvatarImage
                                                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg"/>
                                            <AvatarFallback>EN</AvatarFallback>
                                        </Avatar>
                                        English
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    <li>
                        <Button>
                            <a href={`mailto:fabrice.manhart@codery.ch?subject=${emailContact.subject}&body=${emailContact.text}`}>
                                {cta}
                            </a>
                        </Button>
                    </li>
                </ul>
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

                        <ul className="flex flex-col gap-y-4 mt-8">
                            {menuLinks.map(menuLink => (
                                <li key={menuLink.link}>
                                    <SheetClose asChild>
                                        <Link href={menuLink.hash}
                                              className=" flex gap-x-2"
                                        >
                                            {menuLink.icon}{menuLink.link}
                                        </Link>
                                    </SheetClose>
                                </li>
                            ))}
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Header;


