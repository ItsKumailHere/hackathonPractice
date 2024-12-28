import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Prop {
  src: StaticImageData;
}

export default function Card({ src }: Prop) {
  return (
    <>
      <div className=" relative max-w-lg p-6 lg:min-w-[22rem] xl:min-w-80  ">
        {/* Product Card */}
        <div className="absolute bg-transparent h-full w-full"></div>
        <Link
          href="#"
          className="block rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          <div className="relative aspect-square w-full bg-[#F5F5F5] ">
            <Image
              src={src}
              alt="Nike Air Force 1 Mid '07"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 space-y-2">
            <div className="inline-block text-red-600 text-sm font-medium mb-2">
              Just In
            </div>
            <h3 className="text-lg font-medium">
              Nike Air Force 1 Mid &apos;07
            </h3>
            <div className="text-gray-600">Men&apos;s Shoes</div>
            <div className="text-gray-600">1 Colour</div>
            <div className="text-sm font-medium">MRP : ₹ 10,795.00</div>
          </div>
        </Link>
      </div>
    </>
  );
}
