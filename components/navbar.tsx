"use client";

import React from "react";
import Link from "next/link";
import basketballimg from "../public/basketball.svg";
import NikeLogo from "../public/Nikelogo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, SearchIcon, Heart, ShoppingBasket } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

// const navLinks = ["New & Featured", "Men", "Women", "Kids", "Sales", "SNKRS"];
const navLinks = [
  {
    name: "New & Featured",
    href: "/shop",
  },
  {
    name: "Men",
    href: "/",
  },
  {
    name: "Women",
    href: "/",
  },
  {
    name: "Kids",
    href: "/",
  },
  {
    name: "Sales",
    href: "/shop",
  },
  {
    name: "SNKRS",
    href: "/shop",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-gray-200">
        <nav className="w-[85%] justify-self-center h-[1.5rem] flex  justify-center sm:justify-between items-center text-sm">
          <div className="logo hidden sm:block">
            <Image src={basketballimg} alt="" />
          </div>
          <ul className="flex text-xs gap-3 font-medium text-gray-900 ">
            <li>
              <Link href={"/"}>Find a Store </Link>
            </li>
            <span className=""> | </span>
            <li>
              <Link href={"/help"}>Help </Link>
            </li>
            <span className=""> | </span>
            <li>
              <Link href={"/joinus"}>Join Us </Link>
            </li>
            <span className=""> | </span>
            <li>
              <Link href={"/signin"}>Sign In </Link>
            </li>
          </ul>
        </nav>
      </nav>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="max-w-7xl w-full justify-self-center "
      >
        <section className="bg-white grid grid-cols-2 md:grid-cols-4 grid-rows-1 md:gap-3 h-[2.5rem] my-2 items-center justify-self-center max-w-7xl justify-around md:justify-between sm:gap-96 border md:border-none md:w-[90%] w-full">
          <div className="">
            <Image src={NikeLogo} alt="" />
          </div>
          <CollapsibleTrigger asChild>
            <Button
              onClick={() => {}}
              variant="ghost"
              size="icon"
              className="shadow-none col-span-1 justify-self-end md:hidden hover:bg-transparent"
            >
              <Menu className="h-10 w-10" />
            </Button>
          </CollapsibleTrigger>
          <ul className="hidden md:flex gap-4 text-md font-normal  items-center justify-center -ml-2 col-span-2">
            {navLinks?.map((i, _) => {
              return (
                <li key={_}>
                  <Link href={i.href} className="hover:font-medium">
                    {i.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="hidden md:flex gap-2 items-center ">
            <div className="flex rounded-full bg-gray-200 items-center justify-around  px-2 w-36">
              <SearchIcon />
              <Input
                placeholder="Search"
                className=" bg-gray-200 outline-none border-none focus-visible:ring-none rounded-full"
              />
            </div>
            <Heart className="text-gray-700" />
            <ShoppingBasket className="text-gray-700" />
          </div>
        </section>
        <CollapsibleContent className="space-y-2 bg-gray-200 lg:hidden ">
          <div className="flex flex-col gap-2 p-2">
            {navLinks?.map((i, _) => {
              return (
                <Link href={i.href} key={_} className="text-sm font-medium ">
                  {i.name}
                </Link>
              );
            })}
            <Separator className="my-1" />
            <div className="flex gap-3 items-center ">
              <div className="flex rounded-full bg-gray-300 items-center justify-around px-2 w-full">
                <SearchIcon />
                <Input
                  placeholder="Search"
                  className=" bg-gray-300 outline-none pr-6 border-none focus-visible:ring-none focus:outline-none rounded-full"
                />
              </div>
              <Heart className="text-gray-700" />
              <ShoppingBasket className="text-gray-700" />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};
