import { Manrope } from "next/font/google";
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: "--font-manrope",
});
export default function Footer() {
  return (
    <div className={`${manrope.variable} flex flex-col w-full h-[50vh] bg-[rgb(17,17,17)] p-10`}>
        <div className="flex flex-col flex-1 text-white font-manrope text-3xl ">
            <p>Note!</p>
            <p className="text-[15px] pt-3">I credit everyone who owns every single picture I have used in this website. This website that I had created is for my WebDev skills only. </p>
        </div>
        <div className="flex flex-col flex-1 justify-start items-center text-white font-manrope">
            <p>Developer:</p>
            <p className="pt-2">myaano</p>
            <p className="pt-2">Contact:</p>
            <p className="pt-2">minguri73@gmail.com</p>
        </div>
    </div>
  );
}
