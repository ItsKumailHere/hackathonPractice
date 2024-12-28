import React from "react";
import Image, { StaticImageData } from "next/image";
import l1 from "../public/l1.png";
import l2 from "../public/l2.png";
import l3 from "../public/l3.png";

type images = {
  id: number;
  image: StaticImageData;
  tag: string;
};
const Images: images[] = [
  {
    id: 1,
    image: l1,
    tag: "Men's",
  },
  {
    id: 2,
    image: l2,
    tag: "Women's",
  },
  {
    id: 3,
    image: l3,
    tag: "Kids",
  },
];
const ProductCardGrid = () => { 
  return (
    <div className="w-screen flex flex-row gap-2">
      {Images.map((image: images) => (
        <div className="flex items-center justify-around lg:h-[40rem] w-[80%] h-[27rem]">
          <div className=" relative overflow-hidden">
            <div className="relative flex items-center justify-center">
              <Image
                key={image.id}
                className="relative w-full h-full object-cover"
                src={image.image}
                alt="Image"
                width={400}
                height={540}
              />
            </div>
            <div className="absolute text-white px-6 pb-6 -mt-20 ">
              <div className="flex justify-start pl-10">
                <span className=" bg-white rounded-full text-gray-900 text-sm px-4 font-medium py-2 leading-none flex items-center">
                  {image.tag}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardGrid;
