"use client";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import Head from "next/head";
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300"],
  variable: "--font-nunito-sans",
});

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".c", {
      scrollTrigger: {
        trigger: ".c",
        start: "top center",
        end: "top 500px",
        scrub: true,
        markers: true,
      },
      x: 400,
      ease: "none",
      duration: 3,
    });
  });









  
  return (
    <>
      <main className="p-0 m-0]">
        {/* Header Section */}
        <Header />
        {/* END OF HEADER*/}
        <div
          className={`${instrumentSans.variable} ${urbanist.variable} ${nunitoSans.variable} w-auto h-auto`}
        >
          <div className="flex justify-start items-center h-[100vh] w-[100vw] relative">
            <Image
              src={myImage}
              alt="TokyoStation"
              sizes="100vw"
              fill
              style={{ objectFit: "cover" }}
              className="brightness-55"
            />
            <div className="absolute text-white font-urbanist text-6xl px-7">
              <p className="" data-scroll data-scroll-speed="0.7">
                Tokyo
              </p>
              <div className="text-[18px] pt-70">
                <p>
                  Exploring the Largest Metropolis in the World throught the
                  Yamanote Line
                </p>
              </div>
            </div>
          </div>

          <div className="c bg-orange-500 h-10 w-10 rounded m-10"></div>
        </div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
                <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
                <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
                <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>
        <div>wadaw</div>

      </main>
    </>
  );
}
