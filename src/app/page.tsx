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
    <head>
      <title>Next.js App with Tailwind CSS</title>
    </head>
    <main className="">
      {/* Header Section */}
      <Header />
      {/* END OF HEADER*/}
      {/*Landing Page Intro*/}
        <div className={`${urbanist.variable} flex`}>
          <div className="relative w-full md:max-w-[620px] md:h-[525px] lg:w-[1024px]">
            <Image
              src="/20240410_111015.webp"
              alt="Fuji"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              />
              
              {/*Landing Page Text*/}
              <div className="absolute text-white font-urbanist text-7xl mt-19 ml-10 drop-shadow-2xl">Travel with ease</div>
              <div className="absolute text-white font-urbanist text-7xl mt-41 ml-11">in</div>
              <div className="absolute text-white font-urbanist text-7xl mt-62 ml-10">Japan</div>
              <div className="absolute text-white font-urbanist text-lg mt-92 ml-10">Explore Japan and see the Eye Catching Tokyo Skytree,</div>
              <div className="absolute text-white font-urbanist text-lg mt-97 ml-10">Ice Caps of Mt. Fuji, Temples of Kyoto,</div>
              <div className="absolute text-white font-urbanist text-lg mt-102 ml-10">to the Snowy Land of Hokkaido, and to the Beaches of</div>
              <div className="absolute text-white font-urbanist text-lg mt-107 ml-10">Okinawa we will guide you there!</div>
              {/*Landing Page Text End*/}

          </div>
          <div className="relative w-full max-w-[148px] h-[525px]">
            <Image
              src="/20230609_173348.jpg"
              alt="Skytree"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="">adwwadadw</div>
          <div>awdawdawda</div>
        </div>
    </main>
    </>
  );
}
