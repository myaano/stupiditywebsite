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
import { useEffect } from "react";
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
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });

  return (
    <>
      <main className="">
        {/* Header Section */}
        <Header />
        {/* END OF HEADER*/}
        {/*Landing Page Intro*/}

        <div className={`${urbanist.variable} ${nunitoSans.variable}`}>
          <div className="lg:hidden block w-auto">
            <div className="@container/LandTitle w-auto h-auto">
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
                  the Shrines and Temples dating back to the Nara Period
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
            <div className="bg-white py-[3px]">
              <hr className="" />
            </div>

            {/* Chubupic */}
            <div className="@container/chubucont w-auto h-auto flex justify-start items-center">
              <Image
                src="/jpassets/chubu/Yamanashi/wd.avif"
                alt="motosu-ko"
                width={1024}
                height={200}
                className="w-full h-auto"
              />
              <div className="absolute text-white font-urbanist text-3xl pl-10 @[640px]/chubucont:text-4xl @[768px]/chubucont:text-5xl @[900px]/chubucont:text-6xl @[900px]/chubucont:pl-18">
                <p>Chubu</p>
                <div className="text-[10px] pt-15 @[550px]/chubucont:pt-30 sm:text-[13px] md:text-[15px] @[768px]/chubucont:pt-45">
                  <p>Visit the Five Great Lakes of Mt. Fuji in Yamanashi,</p>
                  <p>Temples and Castles in Aichi,</p>
                  <p>or Shrines and Onsens in Fukui and Ishikawa Prefecture.</p>
                </div>
              </div>
            </div>

            <div className="bg-white py-[3px]">
              <hr className="" />
            </div>

            {/* kyoto */}
            <Link href="/kansai">
              <div className="w-auto h-auto flex justify-start items-center @container/kansaicont">
                <Image
                  src="/jpassets/kansai/kyoto/osakacastle.jpg"
                  alt="osakacastle"
                  width={1024}
                  height={200}
                  className="w-full h-auto"
                />
                <div className="absolute text-white font-urbanist text-3xl pl-10 @[640px]/kansaicont:text-4xl @[768px]/kansaicont:text-5xl @[900px]/kansaicont:text-6xl @[900px]/kansaicont:pl-18">
                  <p>Kansai</p>
                  <div className="text-[10px] pt-15 @[550px]/kansaicont:pt-30 sm:text-[13px] md:text-[15px] @[768px]/kansaicont:pt-45 w-auto h-auto">
                    <p>
                      Feel the History of Japan through its previous Capitals:
                    </p>
                    <p>Kyoto and Nara</p>
                    <p>or indulge in the Rich Culinary Culture of Osaka</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="bg-white py-[3px]">
              <hr className="" />
            </div>

          </div>
          {/*FOR PC*/} {/*FOR PC*/} {/*FOR PC*/} {/*FOR PC*/} {/*FOR PC*/}
          {/*FOR PC*/} {/*FOR PC*/} {/*FOR PC*/}
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
                  the Shrines and Temples dating back to the Nara Period
                </p>
              </div>
              <div className="hidden lg:block absolute @[764px]/Landtitlepc:top-161 @[764px]/Landtitlepc:pl-14  text-white font-urbanist text-5xl @[779px]/Landtitlepc:top-171 @[896px]/Landtitlepc:pl-16 @[800px]/Landtitlepc:text-6xl @[800px]/Landtitlepc:top-176 @[825px]/Landtitlepc:top-181 @[871px]/Landtitlepc:top-191 @[871px]/Landtitlepc:pl-19 @[900px]/Landtitlepc:top-198 @[918px]/Landtitlepc:top-206 @[954px]/Landtitlepc:top-215 @[1010px]/Landtitlepc:top-225">
                <div>
                  <p>Chubu</p>
                </div>
                <div className="text-[16px] pt-50 @[984px]/Landtitlepc:text-[20px]">
                  <p>Visit the Five Great Lakes of Mt. Fuji in Yamanashi,</p>
                  <p>Temples and Castles in Aichi,</p>
                  <p>or Shrines and Onsens in Fukui and Ishikawa Prefecture.</p>
                </div>
              </div>

              <div className="">
                <Image
                  src="/20240410_11101222.jpg"
                  alt="fuji"
                  width={768}
                  height={50}
                  className="w-full h-auto"
                />
                <div className="bg-white py-[3px]">
                  <hr className="" />
                </div>
                <Image
                  src="/jpassets/chubu/Yamanashi/wd.avif"
                  alt="motosu-ko"
                  width={1024}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white py-[3px]">
                <hr className="" />
              </div>
              <div className="w-auto h-auto flex justify-start items-center @container/pckansaicont">
                <Image
                  src="/jpassets/kansai/kyoto/osakacastle.jpg"
                  alt="osakacastle"
                  width={1024}
                  height={200}
                  className="w-full h-auto"
                />
                <div className="absolute text-white font-urbanist text-5xl pl-14 ">
                  <div>
                    <p>Kansai</p>
                  </div>
                  <div className="text-[16px] pt-43 @[1200px]/pckansaicont:pt-53">
                    <p>
                      Feel the History of Japan through its previous Capitals of
                      Kyoto and Nara
                    </p>
                    <p>or indulge in the rich culinary culture of Osaka</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-l-black shadow-xl">w </div>
          </div>
          {/*FOR PC END*/} {/*FOR PC END*/} {/*FOR PC END*/} {/*FOR PC END*/}
          {/*FOR PC END*/}
        </div>

        <div className="[@media(min-width:625px)]:text-white [@media(min-width:725px)]:text-pink-500 [@media(min-width:825px)]:text-green-500">
          awhduaihdiawhdiawda
        </div>
        <div className="bg-orange-500 text-white font-sans h-50 flex pl-20 justify-center items-center">
          Just anther text needed to be centered
        </div>
        <div className="[@media(min-width:625px)]:text-white [@media(min-width:725px)]:text-pink-500 [@media(min-width:825px)]:text-green-500">
          awhduaihdiawhdiawda
        </div>
        <div className="[@media(min-width:625px)]:text-white [@media(min-width:725px)]:text-pink-500 [@media(min-width:825px)]:text-green-500">
          awhduaihdiawhdiawda
        </div>
        <div className="[@media(min-width:625px)]:text-white [@media(min-width:725px)]:text-pink-500 [@media(min-width:825px)]:text-green-500">
          awhduaihdiawhdiawda
        </div>
        <div className="[@media(min-width:625px)]:text-white [@media(min-width:725px)]:text-pink-500 [@media(min-width:825px)]:text-green-500">
          awhduaihdiawhdiawda
        </div>
        <div className="[@media(min-width:625px)]:text-white [@media(min-width:725px)]:text-pink-500 [@media(min-width:825px)]:text-green-500">
          awhduaihdiawhdiawda
        </div>
        <div className="[@media(min-width:625px)]:text-white [@media(min-width:725px)]:text-pink-500 [@media(min-width:825px)]:text-green-500">
          awhduaihdiawhdiawda
        </div>
      </main>
    </>
  );
}
