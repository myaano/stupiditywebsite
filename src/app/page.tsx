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
          <div className="lg:hidden block w-auto">
            <div className="@container/LandTitle border border-amber-500 w-auto h-auto">
              <div className="w-9000 hidden">w</div>
              <div className=" font-urbanist text-white text-3xl absolute pl-5 top-27 @[480px]/LandTitle:top-33 @[525px]/LandTitle:top-38 @[525px]/LandTitle:text-4xl @[525px]/LandTitle:pl-7 @[640px]/LandTitle:top-44 @[640px]/LandTitle:text-5xl @[640px]/LandTitle:pl-14 @[768px]/LandTitle:pl-15 @[768px]/LandTitle:top-43">
                <p className="">Journey with Ease</p>
                <p className="">Across Japan</p>
              </div>
            </div>
            <div className="@container/LandDesc">
              <div className="font-urbanist text-white text-[10px] absolute top-65 pl-5 @[480px]/LandDesc:top-74 @[525px]/LandDesc:top-81 @[525px]/LandDesc:text-[12px] @[525px]/LandDesc:pl-7 @[640px]/LandDesc:pl-14 @[640px]/LandDesc:top-95 @[640px]/LandDesc:text-[14px] @[768px]/LandDesc:pl-15 @[768px]/LandDesc:top-109 @[768px]/LandDesc:text-[18px] @[840px]/LandDesc:top-113 @[920px]/LandDesc:top-135">
                <p className="">
                  Travel across Japan and see the Ice Caps of Mt.Fuji,
                </p>
                <p className="">
                  the Eye Catching Tokyo Skytree, the Traditional City of Kyoto
                  or
                </p>
                <p className="">
                  the Shrines and Temples dating back to the Heian Period
                </p>
              </div>
            </div>
          </div>
          <div className="pt-18 lg:hidden block w-auto">
            <Image
              src="/20240410_11101222.jpg"
              alt="fuji"
              width={1024}
              height={200}
              className="w-full h-auto"
            />
          </div>

          {/*FOR PC*/}
          <div className=" lg:grid-cols-8 lg:gap-4 hidden lg:grid">
            <div className="border-r-2 border-r-black shadow-xl">w</div>

            <div className="col-span-6 pt-18 @container/Landtitlepc">
              <div className="hidden lg:block absolute @[764px]/Landtitlepc:top-46 @[764px]/Landtitlepc:pl-14  text-white font-urbanist text-5xl @[896px]/Landtitlepc:top-50 @[896px]/Landtitlepc:pl-16 @[896px]/Landtitlepc:text-6xl @[1025px]/Landtitlepc:top-57 @[1025px]/Landtitlepc:text-7xl @[1025px]/Landtitlepc:pl-25">
                <p className="">Journey with Ease</p>
                <p className="">Across Japan</p>
              </div>
              <div className="hidden lg:block text-white font-urbanist text-[16px]  absolute @[764px]/Landtitlepc:top-109 @[764px]/Landtitlepc:pl-14 @[838px]/Landtitlepc:top-115 @[896px]/Landtitlepc:top-125 @[896px]/Landtitlepc:pl-16 @[896px]/Landtitlepc:text-[19px] @[956px]/Landtitlepc:top-130 @[1001px]/Landtitlepc:top-135 @[1025px]/Landtitlepc:top-170 @[1025px]/Landtitlepc:text-3xl @[1025px]/Landtitlepc:pl-25 ">
                <p className="">
                  Travel across Japan and see the Ice Caps of Mt.Fuji,
                </p>
                <p className="">
                  the Eye Catching Tokyo Skytree, the Traditional City of Kyoto
                  or
                </p>
                <p className="">
                  the Shrines and Temples dating back to the Heian Period
                </p>
              </div>

              <div className="">
                <Image
                  src="/20240410_11101222.jpg"
                  alt="fuji"
                  width={768}
                  height={50}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="border-l-2 border-r-black shadow-xl">w </div>
            {/*FOR PC END*/}
          </div>
        </div>

        <div className="[@media(min-width:625px)]:text-white [@media(min-width:725px)]:text-pink-500 [@media(min-width:825px)]:text-green-500">
          awhduaihdiawhdiawda
        </div>
        <div className="">awhduaihdiawhdiawda</div>
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
