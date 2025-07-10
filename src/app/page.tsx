"use client";

import myImage from "../../public/jpassets/kanto/tokyo/tokyo-station.webp";

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
      new LocomotiveScroll();
    })();
  });

  return (
    <>
      <main className="">
        {/* Header Section */}

        {/* END OF HEADER*/}
        <div
          className={`${instrumentSans.variable} ${urbanist.variable} ${nunitoSans.variable}`}
        >
          <div className="flex justify-start items-center">
            <Image
              src={myImage}
              alt="Tokyo"
              sizes="100vw 100vh"
              fill
              style={{ objectFit: "cover" }}
              className="brightness-70"
            />
            <div className="flex absolute text-white font-urbanist text-6xl">
              <p>Tokyo</p>
            </div>
          </div>

          <div className="bg-orange-500 h-40"></div>
          <div className="bg-orange-500 h-40"></div>
          <div className="bg-orange-500 h-40"></div>
          <div className="bg-orange-500 h-40"></div>
          <div className="bg-orange-500 h-40"></div>
          <div className="bg-orange-500 h-40"></div>
          <div className="bg-orange-500 h-40"></div>
        </div>
      </main>
    </>
  );
}
