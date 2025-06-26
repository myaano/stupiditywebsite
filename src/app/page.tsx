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
        {/*MARGIN DIV*/}

            <div className="pt-18 lg:hidden block">
              <div className="font-urbanist text-white text-3xl absolute pl-5 top-27 sm:top-45 sm:text-4xl sm:pl-14 md:top-53 md:text-5xl md:pl-18 lg:top-43 lg:pl-14">
                <p className="">Journey with Ease</p>
                <p className="">Across Japan</p>
              </div>
              <div className="font-urbanist text-white text-[10px] absolute top-65 pl-7 sm:pl-14 sm:top-100 sm:text-[16px] md:pl-18 md:top-138 md:text-[18px] lg:top-110 lg:pl-14 ">
                <p className="">Travel across Japan and see the Ice Caps of Mt.Fuji,</p>
                <p className="">the Eye Catching Tokyo Skytree, the Traditional City of Kyoto,</p>
                <p className="">the Shrines and Temples dating back to the Heian Period</p>
              </div>
              <Image
              src="/20240410_11101222.jpg"
              alt="fuji"
              width={768}
              height={200}
              className="w-full h-auto"
              />
            </div>



        <div className=" lg:grid-cols-8 lg:gap-4 hidden lg:grid">

          <div className="border-r-2 border-r-black shadow-xl">wdwd</div>


          <div className="col-span-6">

            <div className="pt-18">
              <div className="font-urbanist text-white text-3xl absolute pl-5 top-27 sm:top-45 sm:text-4xl sm:pl-14 md:top-53 md:text-5xl md:pl-18 lg:top-43 lg:pl-14 xl:top-50 xl:text-6xl">
                <p className="">Journey with Ease</p>
                <p className="">Across Japan</p>
              </div>
              <div className="font-urbanist text-white text-[10px] absolute top-65 pl-7 sm:pl-14 sm:top-100 sm:text-[16px] md:pl-18 md:top-138 md:text-[18px] lg:top-110 lg:pl-14 xl:top-130 xl:text-[20px]">
                <p className="">Travel across Japan and see the Ice Caps of Mt.Fuji,</p>
                <p className="">the Eye Catching Tokyo Skytree, the Traditional City of Kyoto,</p>
                <p className="">the Shrines and Temples dating back to the Heian Period</p>
              </div>
              <Image
              src="/20240410_11101222.jpg"
              alt="fuji"
              width={768}
              height={200}
              className="w-full h-auto"
              />
            </div>


          </div>
          <div className="border-l-2 border-r-black shadow-xl">wdwdw</div>

        </div>
        {/*MARGIN DIV END*/}

      </div>






      <div>awhduaihdiawhdiawda</div>
      <div>awhduaihdiawhdiawda</div>
      <div>awhduaihdiawhdiawda</div>
      <div>awhduaihdiawhdiawda</div>
      <div>awhduaihdiawhdiawda</div>
      <div>awhduaihdiawhdiawda</div>
      <div>awhduaihdiawhdiawda</div>
      <div>awhduaihdiawhdiawda</div>
      <div>awhduaihdiawhdiawda</div>
      <div>awhduaihdiawhdiawda</div>
      <div>awhduaihdiawhdiawda</div>
      <div>awhduaihdiawhdiawda</div>
      <div>awhduaihdiawhdiawda</div>






















































































































    </main>
    </>
  );
}
