"use client";
{
  /* DEPENDENCIES */
}
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
{
  /*END OF DEPENDENCIES */
}

import myImage from "../../public/jpassets/kanto/tokyo/tokyo-station.webp";
import akiba from "../../public/jpassets/kanto/tokyo/akiba1.jpg";
import yodobashi from "../../public/jpassets/kanto/tokyo/yodobashi_akiba.webp";
import rajiokaikan from "../../public/jpassets/kanto/tokyo/radiokk.webp";
import superpotato from "../../public/jpassets/kanto/tokyo/superpotato.jpg";

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
  weight: ["400", "500"],
  variable: "--font-urbanist",
});

import { Nunito_Sans } from "next/font/google";
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300"],
  variable: "--font-nunito-sans",
});

import { Noto_Sans_JP } from "next/font/google";
const notosansjp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-noto-sans-jp",
});

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  {
    /* for split text test */
  }
  {
    /* for split text test */
  }
  {
    /* for split text test */
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: ".bgakiba",
      start: "top top",
      end: "bottom top",
      pin: true,
    });

    gsap.to(".akibatxt1", {
      scrollTrigger: {
        trigger: ".bgakiba",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
        markers: true,
      },
      x: () => window.innerWidth * 1,
      ease: "none",
    });

    gsap.to(".akibatxt2", {
      scrollTrigger: {
        trigger: ".bgakiba",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
        markers: true,
      },
      x: () => -window.innerWidth * 1,
      ease: "none",
    });

    let akb = new SplitText(".akb", { type: "chars" });
    let akbtext = akb.chars;

    gsap.from(akbtext, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".akb",
        start: "top 90%",
        markers: true,
      },
    });

    let akbkanji = new SplitText(".akb-kanji", { type: "chars" });
    let akbkanjitext = akbkanji.chars;

    gsap.from(akbkanjitext, {
      yPercent: 130,
      stagger: 0.02,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".akb-kanji",
        start: "top 90%",
        markers: true,
      },
    });

    let descakb = new SplitText(".akbdesc", { type: "words" });
    let descakbtext = descakb.words;

    gsap.from(descakbtext, {
      yPercent: 130,
      stagger: 0.02,
      ease: "power1.in",
      duration: 1,
      scrollTrigger: {
        trigger: ".akbdesc",
        start: "top 90%",
        markers: true,
      },
    });
  });
  {
    /* for split text test end*/
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline();

  tl.from(".ydbsh", {xPercent: -100})
  tl.from(".rdkk", {xPercent: 100})
  tl.from(".potat", {yPercent: -100})


    ScrollTrigger.create({
      animation:tl,
      trigger: "#akibacont",
      start: "top top",
      end: "+=400",
      scrub:true,
      pin: true,
      anticipatePin: 1,
      markers: true
    });
  });

  return (
    <>
      <main className="">
        {/* Header Section */}
        <Header />
        {/* END OF HEADER*/}
        <div
          className={`${instrumentSans.variable} ${urbanist.variable} ${nunitoSans.variable} ${notosansjp.variable} w-auto h-auto`}
        >
          <div className="flex justify-start items-center h-[100vh] w-full relative">
            <Image
              src={myImage}
              alt="TokyoStation"
              sizes="100vw"
              fill
              style={{ objectFit: "cover" }}
              className="brightness-55"
            />
            <div className="absolute text-white font-urbanist text-6xl px-7">
              <p className="tky font-bold">Tokyo</p>
              <p className="tky text-3xl">東京</p>
              <div className="text-[18px] pt-70">
                <p className="tky">
                  Exploring Tokyo City through the Yamanote Line
                </p>
              </div>
            </div>
          </div>
          <section>
            <div className="bgakiba w-full h-[100vh] flex flex-col overflow-x-hidden ">
              <div className="akibatxt1 text-7xl text-white flex-1 flex justify-start items-center bg-yellow-500">
                <p>次は</p>
              </div>
              <div className="akibatxt2 text-7xl text-white flex-1 flex justify-end items-center bg-green-500">
                <p>秋葉原</p>
              </div>
            </div>
          </section>
          <div className="flex justify-start items-center h-[100vh] w-full relative">
            <Image
              src={akiba}
              alt="TokyoStation"
              sizes="100vw"
              fill
              style={{ objectFit: "cover" }}
              className="brightness-55"
            />
            <div className="absolute text-white font-urbanist text-6xl px-7">
              <div className="flex overflow-hidden">
                <p className="akbdesc font-bold">Akihabara</p>
              </div>
              <div className="flex overflow-hidden">
                <p className="akb-kanji text-3xl">秋葉原</p>
              </div>

              <div className="akbdesc text-[18px] pt-70 flex overflow-hidden">
                <p>
                  Located at Chiyoda Ward, Tokyo. Akihabara is known for being a
                  holy land for Electronics, Video Games, and Anime Culture
                </p>
              </div>
            </div>
          </div>

          <section id="akibacont">
            <div className="ydbsh w-full h-[100vh] flex justify-center items-center relative">
              <Image
                src={yodobashi}
                alt="yodobashi-akiba"
                fill
                style={{ objectFit: "cover" }}
                className=""
              />
            </div>
            <div className="rdkk w-full h-[100vh] flex justify-center items-center relative">
              <Image
              src={rajiokaikan}
              alt="radiokaikanakiba"
              fill
              style={{ objectFit: "cover" }}
               />
            </div>
            <div className="potat w-full h-[100vh] flex justify-center items-center relative">
              <Image
              src={superpotato}
              alt="superpotato"
              fill
              style={{ objectFit: "cover" }}
               />
            </div>
          </section>
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
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
        <div>tfawyhijo</div>
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
