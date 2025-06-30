"use client";

{
  /* component imports */
}
import Header from "@/components/header";

{
  /* react imports*/
}
import Image from "next/image";
import Link from "next/link";

{
  /* for fonts imports*/
}
import { Instrument_Sans } from "next/font/google";
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-instrument-sans",
});

import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-urbanist",
});

import { Nunito_Sans } from "next/font/google";
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300"],
  variable: "--font-nunito-sans",
});

export default function Home() {
  return (
    <>
      <main className="">
        {/* Header Section */}
        <Header />
        {/* END OF HEADER*/}
        {/*Landing Page Intro*/}

        <div className={`${urbanist.variable} ${nunitoSans.variable}`}>
          <div className="pt-18 lg:hidden block">
            <div className="font-urbanist text-white text-3xl absolute pl-5 top-27 xxsm:top-35 xsm:top-37 xsm:pl-7 sm:top-42 sm:text-4xl sm:pl-14 md:top-45 md:text-5xl md:pl-13 lg:top-43 lg:pl-14">
              <p className="">Journey with Ease</p>
              <p className="">Across Japan</p>
            </div>
            <div className="font-urbanist text-white text-[10px] absolute top-65 pl-5 xxsm:top-75 xsm:top-80 xsm:pl-7 fhsf:top-90 sm:pl-14 sm:top-95 sm:text-[14px] shef:top-900 md:pl-13 md:top-109 md:text-[18px] lg:top-110 lg:pl-14  ">
              <p className="">
                Travel across Japan and see the Ice Caps of Mt.Fuji,
              </p>
              <p className="">
                the Eye Catching Tokyo Skytree, the Traditional City of Kyoto,
              </p>
              <p className="">
                the Shrines and Temples dating back to the Heian Period
              </p>
            </div>
            <Image
              src="/20240410_11101222.jpg"
              alt="fuji"
              width={768}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <div className="bg-black">awd</div>

          <div className="lg:hidden block">
            <div className="bg-[rgb(255,195,206)] text-white  h-auto rounded-2xl absolute top-138 left-10 w-auto">
              <button className="px-3 font-nunito-sans">
                <Link href="">Explore</Link>
              </button>
            </div>
            <h1 className="text-3xl absolute top-107 left-81 text-white font-urbanist sm:top-148 sm:left-115 sm:text-5xl md:top-172">
              Chubu
            </h1>
            <p className="font-urbanist text-white text-[10px] absolute top-133 left-53 sm:top-189 sm:left-80 sm:text-[14px]">
              Explore the Castles and Shrines of Aichi to the
            </p>
            <p className="font-urbanist text-white text-[10px] absolute top-136 left-65 sm:top-193 sm:left-98 sm:text-[14px]">
              Five Lakes of Mt. Fuji in Yamanashi,
            </p>
            <p className="font-urbanist text-white text-[10px] absolute top-139 left-70 sm:top-197 sm:left-104 sm:text-[14px]">
              or Explore the Shrines of Fukui
            </p>

            <Image
              src="/jpassets/chubu/aichi/Nagoya-Castle-B.jpg"
              alt="nagoyacastlepic"
              width={768}
              height={200}
              className="w-full h-auto"
            />

            <Image
              src="/jpassets/chubu/aichi/Nagoya_castle.webp"
              alt="nagoyacastlepic"
              width={768}
              height={200}
              className="w-full h-auto"
            />
          </div>

          {/*FOR PC*/}
          <div className=" lg:grid-cols-8 lg:gap-4 hidden lg:grid">
            <div className="border-r-2 border-r-black shadow-xl">wdwd</div>

            <div className="col-span-6">
              <div className="pt-18">
                <div className="font-urbanist text-white text-3xl absolute pl-5 top-27 sm:top-45 sm:text-4xl sm:pl-14 md:top-53 md:text-5xl md:pl-18 lg:top-43 lg:pl-14 xl:top-50 xl:text-6xl">
                  <p className="">Journey with Ease</p>
                  <p className="">Across Japan</p>
                </div>
                <div className="font-urbanist text-white text-[10px] absolute top-65 pl-7 sm:pl-14 sm:top-100 sm:text-[16px] md:pl-18 md:top-138 md:text-[18px] lg:top-110 lg:pl-14 xl:top-130 xl:text-[20px]">
                  <p className="">
                    Travel across Japan and see the Ice Caps of Mt.Fuji,
                  </p>
                  <p className="">
                    the Eye Catching Tokyo Skytree, the Traditional City of
                    Kyoto,
                  </p>
                  <p className="">
                    the Shrines and Temples dating back to the Heian Period
                  </p>
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
            {/*FOR PC END*/}
          </div>
        </div>

        <div className="[@media(min-width:625px)]:text-white [@media(min-width:725px)]:text-pink-500 [@media(min-width:825px)]:text-green-500">
          awhduaihdiawhdiawda
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
      </main>
    </>
  );
}
