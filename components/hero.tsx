import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="mt-10">
      <section className="flex flex-col w-full text-center justify-center gap-2 ">
        <span className="text-xs font-medium w-full justify-self-center">
          First Look
        </span>
        <h2 className="text-5xl font-medium -mt-2">NIKE AIR MAX PULSE</h2>
        <div className="flex justify-center mt-2 gap-4 flex-col w-full justify-self-center items-center">
          <p className="text-xs w-[25rem] justify-self-center flex justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad
            consequatur sequi aliquid quidem exercitationem ipsam
          </p>
          <div className="flex gap-2">
            <Button className="rounded-full bg-black">Notify Me</Button>
            <Button className="rounded-full bg-black">Shop Air Max</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
