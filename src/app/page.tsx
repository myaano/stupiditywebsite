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
          <div className="font-urbanist text-white">
            <span className="text-3xl absolute pl-7  text-center sm:top-45 sm:text-4xl sm:pl-14 md:top-53 md:text-5xl md:pl-18">Journey with Ease</span>
          </div>
          <Image
          src="/20240410_11101222.jpg"
          alt="fuji"
          width={768}
          height={600}
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
