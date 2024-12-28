import { data } from "@/app/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "13" },
    { id: "14" },
    { id: "15" },
    { id: "16" },
    { id: "17" },
    { id: "18" },
    { id: "19" },
    { id: "20" },
    { id: "21" },
    { id: "22" },
    { id: "23" },
    { id: "24" },
    { id: "25" },
    { id: "26" },
    { id: "27" },
    { id: "28" },
    { id: "29" },
    { id: "30" },
    { id: "31" },
  ];
}

export default function ({ params }: any) {
  const { id } = params; //Extract the 'id' from the URL

  const product = data[id];

  return (
    <main className="flex h-screen justify-around items-center gap-3 m-28">
      <section className="w-[653px] h-[653px] relative">
        <Image
          src={product}
          alt="product"
          width={653}
          height={653}
          className="object-cover w-full h-full"
        />
      </section>
      <section className="flex flex-col gap-10 w-[23.5rem] items-start justify-start">
        <h2 className="font-medium text-5xl">Nike Air Force Platform</h2>
        <p className="font-light text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          nulla molestias unde eum dolorum, impedit id soluta doloremque
          deserunt facere, libero incidunt doloribus!
        </p>
        <Link href="/checkout">
          <Button className="bg-black text-white py-2 px-4 rounded-md">
            Add to Cart
          </Button>
        </Link>
      </section>
    </main>
  );
}
