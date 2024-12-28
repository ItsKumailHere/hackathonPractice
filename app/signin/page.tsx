"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import NikeLogo from "@/public/Nikelogo.svg";
import { Input } from "@/components/ui/input";
import ProductCardGrid from "@/components/home-last-grid";

export default function Component() {
  return (
    <>
      <Card className="shadow-none outline-none border-none rounded-sm justify-self-center">
        <div className="flex justify-center max-w-full w-full">
          <Image src={NikeLogo} alt="" />
        </div>
        <CardHeader>
          <CardTitle className="items-center justify-center text-base w-full">
            <span className="flex justify-center">
              YOUR ACCOUNT FOR EVERYTHING
            </span>
            <span className="flex justify-center mt-1 font-bold text-2xl">
              NIKE
            </span>
          </CardTitle>
          {/* <CardDescription>
          The directory within your project, in which your plugins are located.
        </CardDescription> */}
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Email"
                className="outline-none focus:outline-none focus:border-b-gray-700 focus:border-none rounded-sm"
              />
              <Input
                placeholder="Password"
                className="outline-none focus:outline-none focus:border-b-gray-700 focus:border-none rounded-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="include" defaultChecked />
              <label
                htmlFor="include"
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-500"
              >
                Keep me signed in
              </label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <div className="flex w-full justify-center">
            <Button className="px-32 rounded-sm">Save</Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
