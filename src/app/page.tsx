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
        <div className={`${urbanist.variable} flex flex-col pt-1`}>
          <div className="absolute pt-14 pl-10">
            <span className="font-urbanist text-white text-2xl">Journey with Ease</span><br/>
            <span className="font-urbanist text-white text-2xl">Across Japan</span>
          </div>
          <div className=" bg-red-900 w-full max-w-auto h-auto">
            <Image
              src="/20240410_11101222.jpg"
              alt="www"
              width={600}
              height={400}
              className=""
            />
          </div>
 

        </div>
    </main>
    </>
  );
}
