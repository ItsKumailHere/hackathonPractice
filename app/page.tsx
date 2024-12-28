import BottomNavigationMenu from "@/components/bottom-navigation";
import Card from "@/components/card";
import Hero from "@/components/hero";
import Himg from "@/public/Himg.png";
import Himg2 from "@/public/Himg2.png";
import { Button } from "@/components/ui/button";
import heroImg from "@/public/heroImg.png";
import Image from "next/image";
import { data } from "./data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCardGrid from "@/components/home-last-grid";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-center items-center flex-col">
        <div className="hidden md:flex flex-col justify-center items-center text-base w-full bg-gray-200 font-medium">
          Hello Nike App <br />
          <span className="font-normal text-sm">
            Download the app to access everything Nike.
            <span className="underline font-normal">
              <span className="w-0.5 no-underline"> </span>Get Your Great
            </span>
          </span>
        </div>
        <div className="relative max-w-[81rem] mx- w-full">
          <Image
            src={heroImg}
            alt="heroImg"
            className="md:h-[43.75rem] w-full object-cover"
          />
          <div className="md:hidden absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
          <div className="md:hidden absolute inset-0 flex items-center flex-col justify-center">
            <h2 className="flex md:hidden flex-col text-white text-3xl font-medium mb-2 sm:mb-1 justify-self-center items-center">
              Order Your SNKRS <br />
              <span className="hidden sm:flex w-full text-center justify-self-center justify-center">
                Now
              </span>
            </h2>
            <Button variant={"default"} className="rounded-full">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      <Hero />
      <div className="flex flex-col justify-center mt-16">
        <div className="flex w-full justify-center">
          <h3 className="w-[88%] flex justify-start justify-self-center font-medium text-2xl -mb-2">
            Best of Air Max
          </h3>
        </div>
        <div className="flex justify-center">
          <Carousel className="w-[90%]">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="p-1">
                    <Card src={data[index]} />
                  </div>
                </CarouselItem> 
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex w-screen justify-center mt-14">
        <h3 className="w-[95%] flex justify-start justify-self-center font-medium text-2xl mb-2">
          Featured
        </h3>
      </div>
      <div className="relative max-w-[81rem] mx w-screen justify-self-center">
        <Image
          src={Himg}
          alt="heroImg"
          className="md:h-[43.75rem] w-screen object-cover"
        />
        <div className="md:hidden absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="md:hidden absolute inset-0 flex items-center flex-col justify-center">
          <h2 className="flex md:hidden flex-col text-white text-2xl sm:text-3xl font-medium mb-3 sm:mb-1 justify-self-center items-center">
            STEP INTO WHAT FEELS GOOD
            <br />
            {/* <span className="hidden sm:flex w-full text-center justify-self-center justify-center">
              Now
            </span> */}
          </h2>
          <Button
            variant={"default"}
            className="rounded-full opacity-100 bg-black"
          >
            Find Your Shoe
          </Button>
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-5 justify-center w-screen mt-14 items-center">
        <h3 className="hidden md:flex text-5xl font-medium">
          STEP INTO WHAT FEELS GOOD
        </h3>
        <p className="hidden md:flex text-sm">
          Cause everyone should know the feeling of running in that perfect pair
        </p>
        <Button
          variant={"default"}
          className="rounded-full opacity-100 hover:bg-gray-200 hover:font-medium hover:text-black "
        >
          Find Your Shoe
        </Button>
      </div>
      <div className="flex w-screen justify-center mt-14">
        <h3 className="w-[95%] flex justify-start justify-self-center font-medium text-2xl mb-2">
          Don&apos;t Miss
        </h3>
      </div>
      <div className="relative max-w-[81rem] mx w-full justify-self-center">
        <Image
          src={Himg2}
          alt="heroImg"
          className="md:h-[43.75rem] w-full object-cover"
        />
        <div className="md:hidden absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="md:hidden absolute inset-0 flex items-center flex-col justify-center">
          <h2 className="flex md:hidden flex-col text-white text-2xl sm:text-3xl font-medium mb-3 sm:mb-1 justify-self-center items-center">
            FLIGHT ESSENTIALS
            <br />
            {/* <span className="hidden sm:flex w-full text-center justify-self-center justify-center">
              Now
            </span> */}
          </h2>
          <Button
            variant={"default"}
            className="rounded-full opacity-100 hover:bg-gray-200 hover:font-medium hover:text-black bg-black"
          >
            Shop
          </Button>
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-5 justify-center w-full mt-14 items-center">
        <h3 className="hidden md:flex text-5xl font-medium">
          FLIGHT ESSENTIALS
        </h3>
        <p className="hidden md:flex text-sm">
          Cause everyone should know the feeling of running in that perfect pair
        </p>
        <Button
          variant={"default"}
          className="rounded-full opacity-100 hover:bg-gray-200 hover:font-medium hover:text-black "
        >
          Shop
        </Button>
      </div> 
      <section className="mt-10">
        <div className="flex w-full justify-center -mb-10">
          <h3 className="w-[88%] flex justify-start justify-self-center font-medium text-2xl md:-mb-4   ">
           The Essentials
          </h3> 
        </div>
        <div className="w-[90%] flex justify-start justify-self-center font-medium text-2xl ">
          <ProductCardGrid />
        </div>
      </section>
      <BottomNavigationMenu />
    </main>
  );
}
