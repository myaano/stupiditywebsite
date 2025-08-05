import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: "--font-manrope",
});
export default function Footer() {
  return (
    <div className={`${manrope.variable} grid grid-cols-2 gap-3 w-full h-[100vh] bg-[#1a1a1a] p-5 lg:p-7 font-manrope overflow-hidden`}>
      <div className="flex-1 flex justify-center items-center  text-neutral-300 text-3xl font-bold">
        <p data-speed="0.5" >Credits to everyone who owns the photos used in this website.</p>
      </div>
      <div className="flex-1 grid grid-rows-2 justify-center items-center  text-neutral-300 text-2xl font-bold" >
        <p data-speed="0.5">Dev: myaano</p>
        <div className="flex flex-col justify-start items-start" data-speed="0.5" >
          <p>Email:</p>
          <p className="text-[14px]" >minguri73@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
