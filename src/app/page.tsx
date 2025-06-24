'use client'

{/* component imports */}
import Header from "@/components/header";


{/* react imports*/}
import Image from "next/image";



{/* for fonts imports*/}
import { Instrument_Sans } from "next/font/google";
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-instrument-sans',
});

import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-urbanist',
});


export default function Home() {
  return (
    <>
    <main className="">
      {/* Header Section */}
      <Header />
      {/* END OF HEADER*/}
      {/*Landing Page Intro*/}
      
      <div className={`${urbanist.variable}`}>
        <div className="pt-18">
          <div className="font-urbanist text-white text-3xl absolute pl-5 top-27 sm:top-45 sm:text-4xl sm:pl-14 md:top-53 md:text-5xl md:pl-18">
            <p className="">Journey with Ease</p>
            <p className="">Across Japan</p>
          </div>
          <div className="font-urbanist text-white text-[10px] absolute top-65 pl-7 ">
            <p className="">Travel across Japan and see the Ice Caps of Mt.Fuji,</p>
            <p className="">the Eye Catching Tokyo Skytree,</p>
            
          </div>
          <Image
          src="/20240410_11101222.jpg"
          alt="fuji"
          width={768}
          height={400}
          className="w-full h-auto"
          />
        </div>
      </div>

      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
      <div>adwadadaw</div>
    </main>
    </>
  );
}
