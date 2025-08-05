"use client";

{
  /* DEPENDENCIES */
}
import Lenis from "lenis";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";
{
  /*END OF DEPENDENCIES */
}

{
  /*photo imports*/
}
import myImage from "../../public/jpassets/kanto/tokyo/tokyo-station.webp";
import akiba from "../../public/jpassets/kanto/tokyo/akiba1.jpg";
import uenoskr1 from "../../public/jpassets/kanto/tokyo/uenoskr1.webp";
import ameyoko from "../../public/jpassets/kanto/tokyo/amyoko-morning.webp";
import figurines from "../../public/jpassets/kanto/tokyo/figurines.jpg";
import pokecenter from "../../public/jpassets/kanto/tokyo/pokemoncenter.jpg";
import suncity from "../../public/jpassets/kanto/tokyo/sunshinecity.jpg";
import shinjukubridge from "../../public/jpassets/kanto/tokyo/shinjukufootbridge.jpg";
import sjk from "../../public/jpassets/kanto/tokyo/shinjukunightlife.webp";
import yygpark from "../../public/jpassets/kanto/tokyo/yygparkk.jpg";
import meiji from "../../public/jpassets/kanto/tokyo/Meiji-Jingu-2.jpg";
import crossing from "../../public/jpassets/kanto/tokyo/shby3.jpg";
import takeshita from "../../public/jpassets/kanto/tokyo/takeshita.webp";
import shinbashi from "../../public/jpassets/kanto/tokyo/shinbashi1.jpg";
import shinbashi2 from "../../public/jpassets/kanto/tokyo/shinbashi2.webp";
import station from "../../public/jpassets/kanto/tokyo/tkystation1.jpg";
import castle from "../../public/jpassets/kanto/tokyo/tokyoimperial.jpg";
{
  /*end of photo imports*/
}
{
  /* component imports */
}

{
  /* react imports*/
}
import Image from "next/image";
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

import { Manrope } from "next/font/google";
import Footer from "@/components/footer";
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: "--font-manrope",
});

export default function Home() {
  // this is lenis
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 3,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // tokyo landing animation
  useEffect(() => {
    const tky = new SplitText(".tky", { type: "chars" });
    const tkytxt = tky.chars;

    const tkyDel = gsap.from(tkytxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      onComplete: () => {
        tky.revert();
        tkyDel.scrollTrigger?.kill();
      },
    });

    const tkykanji = new SplitText(".tkykanji", { type: "chars" });
    const tkykanjitxt = tkykanji.chars;

    const tkykanjiDel = gsap.from(tkykanjitxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      onComplete: () => {
        tkykanji.revert();
        tkykanjiDel.scrollTrigger?.kill();
      },
    });

    const tkydesc = new SplitText(".tkydesc", { type: "words" });
    const tkydesctxt = tkydesc.words;

    const tkydescDel = gsap.from(tkydesctxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      onComplete: () => {
        tkydesc.revert();
        tkydescDel.scrollTrigger?.kill();
      },
    });
  }, []);

  // "the next station is akihabara" animations
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".akbsect",
      start: "top top",
      end: "bottom 80%",
      pin: true,
    });

    gsap.to(".akibatxt1", {
      scrollTrigger: {
        trigger: ".bgakiba",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
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
      },
      x: () => -window.innerWidth * 1,
      ease: "none",
    });
  });

  {
    /* for akiba split text */
  }

  {
    /* for akiba split text */
  }
  {
    /* for akiba split text */
  }
  useEffect(() => {
    const akb = new SplitText(".akb", { type: "chars" });
    const akbtext = akb.chars;

    const akbtxt = gsap.from(akbtext, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".akb",
        start: "top 90%",
      },
      onComplete: () => {
        akb.revert();
        akbtxt.scrollTrigger?.kill();
      },
    });

    const akbkanji = new SplitText(".akb-kanji", { type: "chars" });
    const akbkanjitext = akbkanji.chars;

    const akbkanjitxt = gsap.from(akbkanjitext, {
      yPercent: 130,
      stagger: 0.02,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".akb-kanji",
        start: "top 90%",
      },
      onComplete: () => {
        akbkanji.revert();
        akbkanjitxt.scrollTrigger?.kill();
      },
    });

    const descakb = new SplitText(".akbdesc", { type: "words" });
    const descakbtext = descakb.words;

    const descakbtxt = gsap.from(descakbtext, {
      yPercent: 130,
      stagger: 0.02,
      ease: "power1.in",
      duration: 1,
      scrollTrigger: {
        trigger: ".akbdesc",
        start: "top 90%",
      },
      onComplete: () => {
        descakb.revert();
        descakbtxt.scrollTrigger?.kill();
      },
    });
  }, []);
  {
    /* for akiba text split end*/
  }

  // ueno next station animation

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".uenosect",
      start: "top top",
      end: "bottom 80%",
      pin: true,
    });

    gsap.to(".uenost1", {
      scrollTrigger: {
        trigger: ".uenosect",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      y: () => -window.innerHeight * 1,
      ease: "none",
    });

    gsap.to(".uenost2", {
      scrollTrigger: {
        trigger: ".uenosect",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      y: () => window.innerHeight * 1,
      ease: "none",
    });
  });

  // ueno text split animation
  useEffect(() => {
    const ueno = new SplitText(".uenotxt", { type: "chars" });
    const uenotxt = ueno.chars;

    const uenodel = gsap.from(uenotxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".uenotxt",
        start: "top 90%",
      },
      onComplete: () => {
        ueno.revert();
        uenodel.scrollTrigger?.kill();
      },
    });

    const KanjiUeno = new SplitText(".uenokanji", { type: "chars" });
    const KanjiUenotxt = KanjiUeno.chars;

    const KanjiUenoDel = gsap.from(KanjiUenotxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".uenokanji",
        start: "top 90%",
      },
      onComplete: () => {
        KanjiUeno.revert();
        KanjiUenoDel.scrollTrigger?.kill();
      },
    });

    const UenoDescription = new SplitText(".uenodesc", { type: "words" });
    const UenoDescriptiontxt = UenoDescription.words;

    const UenoDescriptionDel = gsap.from(UenoDescriptiontxt, {
      yPercent: 130,
      stagger: 0.02,
      ease: "power1.in",
      duration: 1,
      scrollTrigger: {
        trigger: ".uenodesc",
        start: "top 90%",
      },
      onComplete: () => {
        UenoDescription.revert();
        UenoDescriptionDel.scrollTrigger?.kill();
      },
    });
  }, []);

  // the next station is ikebukuro animation

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".ikbkrsect",
      start: "top top",
      end: "bottom 80%",
      pin: true,
    });

    gsap.to(".ikbkr1", {
      scrollTrigger: {
        trigger: ".ikbkrcont",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      y: () => -window.innerHeight * 1,
      ease: "none",
    });

    gsap.to(".ikbkr2", {
      scrollTrigger: {
        trigger: ".ikbkrcont",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      y: () => window.innerHeight * 1,
      ease: "none",
    });
  }, []);

  // ikebukuro text split animation
  useEffect(() => {
    const splitikbkr = new SplitText(".ikbkrtxt", { type: "chars" });
    const splitikbkrtxt = splitikbkr.chars;

    const ikbkrDel = gsap.from(splitikbkrtxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".ikbkrtxt",
        start: "top 90%",
      },

      onComplete: () => {
        splitikbkr.revert();
        ikbkrDel.scrollTrigger?.kill();
      },
    });

    const splitikbkrkanji = new SplitText(".ikbkrkanji", { type: "chars" });
    const ikbkrkanjitxt = splitikbkrkanji.chars;

    const ikbkrkanjiDel = gsap.from(ikbkrkanjitxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".ikbkrkanji",
        start: "top 90%",
      },
      onComplete: () => {
        splitikbkrkanji.revert();
        ikbkrkanjiDel.scrollTrigger?.kill();
      },
    });

    const ikbkrdescript = new SplitText(".ikbkrdesc", { type: "words" });
    const ikbkrdescripttxt = ikbkrdescript.words;

    const ikbkrdescDel = gsap.from(ikbkrdescripttxt, {
      yPercent: 130,
      stagger: 0.02,
      ease: "power1.in",
      duration: 1,
      scrollTrigger: {
        trigger: ".ikbkrdesc",
        start: "top 90%",
      },
      onComplete: () => {
        ikbkrdescript.revert();
        ikbkrdescDel.scrollTrigger?.kill();
      },
    });
  }, []);

  // the next station is shinjuku animation
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".sjksect",
      start: "top top",
      end: "bottom 80%",
      pin: true,
    });

    gsap.to(".sjk1", {
      scrollTrigger: {
        trigger: ".sjkcont",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      x: () => -window.innerWidth * 1,
    });

    gsap.to(".sjk2", {
      scrollTrigger: {
        trigger: ".sjkcont",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      x: () => window.innerWidth * 1,
    });
  }, []);

  // shinjuku text animation

  useEffect(() => {
    const sjkmain = new SplitText(".sjk11", { type: "chars" });
    const sjkmaintxt = sjkmain.chars;

    const sjkmainDel = gsap.from(sjkmaintxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".sjk11",
        start: "top 90%",
      },
      onComplete: () => {
        sjkmain.revert();
        sjkmainDel.scrollTrigger?.kill();
      },
    });

    const sjkmain2 = new SplitText(".sjk22", { type: "chars" });
    const sjkmain2txt = sjkmain2.chars;

    const sjkmain2Del = gsap.from(sjkmain2txt, {
      xPercent: -130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".sjk22",
        start: "top 90%",
      },
      onComplete: () => {
        sjkmain2.revert();
        sjkmain2Del.scrollTrigger?.kill();
      },
    });

    const sjkdescc = new SplitText(".sjkdesc", { type: "words" });
    const sjkdescctxt = sjkdescc.words;

    const sjkdesccDel = gsap.from(sjkdescctxt, {
      yPercent: 130,
      stagger: 0.02,
      ease: "power1.in",
      duration: 1,
      scrollTrigger: {
        trigger: ".sjkdesc",
        start: "top 90%",
      },
      onComplete: () => {
        sjkdescc.revert();
        sjkdesccDel.scrollTrigger?.kill();
      },
    });
  }, []);

  // the next station is yoyogi animation
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".yygsect",
      start: "top top",
      end: "bottom 80%",
      pin: true,
    });

    gsap.to(".yyg1", {
      scrollTrigger: {
        trigger: ".yygcont",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      x: () => -window.innerWidth * 1,
    });

    gsap.to(".yyg2", {
      scrollTrigger: {
        trigger: ".yygcont",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      x: () => window.innerWidth * 1,
    });
  }, []);

  // yoyogi text animations
  useEffect(() => {
    const yyg = new SplitText(".yyg11", { type: "chars" });
    const yygtxt = yyg.chars;

    const yygDel = gsap.from(yygtxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".yyg11",
        start: "top 90%",
      },
      onComplete: () => {
        yyg.revert();
        yygDel.scrollTrigger?.kill();
      },
    });

    const yygknj = new SplitText(".yyg22", { type: "chars" });
    const yygknjtxt = yygknj.chars;

    const yygknjDel = gsap.from(yygknjtxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".yyg22",
        start: "top 90%",
      },
      onComplete: () => {
        yygknj.revert();
        yygknjDel.scrollTrigger?.kill();
      },
    });

    const yygdescc = new SplitText(".yygdesc", { type: "words" });
    const yygdescctxt = yygdescc.words;

    const yygdesccDel = gsap.from(yygdescctxt, {
      yPercent: 130,
      stagger: 0.02,
      ease: "power1.in",
      duration: 1,
      scrollTrigger: {
        trigger: ".yygdesc",
        start: "top 90%",
      },
      onComplete: () => {
        yygdescc.revert();
        yygdesccDel.scrollTrigger?.kill();
      },
    });
  }, []);

  // the next station is shibuya animation
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".shbysect",
      start: "top top",
      end: "bottom 80%",
      pin: true,
    });

    gsap.to(".shby1", {
      scrollTrigger: {
        trigger: ".shbycont",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      x: () => -window.innerWidth * 1,
    });

    gsap.to(".shby2", {
      scrollTrigger: {
        trigger: ".shbycont",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      x: () => window.innerWidth * 1,
    });
  }, []);

  // shibuya text animations
  useEffect(() => {
    const shbymain = new SplitText(".shby11", { type: "chars" });
    const shbymaintxt = shbymain.chars;

    const shbymainDel = gsap.from(shbymaintxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".shby11",
        start: "top 90%",
      },
      onComplete: () => {
        shbymain.revert();
        shbymainDel.scrollTrigger?.kill();
      },
    });

    const shbykanji = new SplitText(".shby22", { type: "chars" });
    const shbykanjitxt = shbykanji.chars;

    const shbykanjiDel = gsap.from(shbykanjitxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".shby22",
        start: "top 90%",
      },
      onComplete: () => {
        shbykanji.revert();
        shbykanjiDel.scrollTrigger?.kill();
      },
    });

    const shbydescc = new SplitText(".shbydesc", { type: "words" });
    const shbydescctxt = shbydescc.words;
    const shbydesccDel = gsap.from(shbydescctxt, {
      yPercent: 130,
      stagger: 0.02,
      ease: "power1.in",
      duration: 1,
      scrollTrigger: {
        trigger: ".shbydesc",
        start: "top 90%",
      },
      onComplete: () => {
        shbydescc.revert();
        shbydesccDel.scrollTrigger?.kill();
      },
    });
  }, []);

  // the next station is shinbashi
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".shinbasect",
      start: "top top",
      end: "bottom 80%",
      pin: true,
    });

    gsap.to(".shinba1", {
      scrollTrigger: {
        trigger: ".shinbacont",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      y: () => -window.innerHeight * 1,
    });

    gsap.to(".shinba2", {
      scrollTrigger: {
        trigger: ".shinbacont",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      y: () => window.innerHeight * 1,
    });
  }, []);

  // shinbashi text animations
  useEffect(() => {
    const shinbamain = new SplitText(".shinba11", { type: "chars" });
    const shinbamaintxt = shinbamain.chars;
    const shinbamainDel = gsap.from(shinbamaintxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".shinba11",
        start: "top 90%",
      },
      onComplete: () => {
        shinbamain.revert();
        shinbamainDel.scrollTrigger?.kill();
      },
    });

    const shinbakanji = new SplitText(".shinba22", { type: "chars" });
    const shinbakanjitxt = shinbakanji.chars;

    const shinbakanjiDel = gsap.from(shinbakanjitxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".shinba22",
        start: "top 90%",
      },
      onComplete: () => {
        shinbakanji.revert();
        shinbakanjiDel.scrollTrigger?.kill();
      },
    });

    const shinbadescc = new SplitText(".shinbadesc", { type: "words" });
    const shinbadescctxt = shinbadescc.words;

    const shinbadesccDel = gsap.from(shinbadescctxt, {
      yPercent: 130,
      stagger: 0.02,
      ease: "power1.in",
      duration: 1,
      scrollTrigger: {
        trigger: ".shinbadesc",
        start: "top 90%",
      },
      onComplete: () => {
        shinbadescc.revert();
        shinbadesccDel.scrollTrigger?.kill();
      },
    });
  }, []);

  // the next station is tokyo animations
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".tokyosect",
      start: "top top",
      end: "bottom 80%",
      pin: true,
    });

    gsap.to(".tokyo1", {
      scrollTrigger: {
        trigger: ".tokyocont",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      x: () => window.innerWidth * 1,
    });

    gsap.to(".tokyo2", {
      scrollTrigger: {
        trigger: ".tokyocont",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      x: () => -window.innerWidth * 1,
    });
  }, []);

  useEffect(() => {
    const tokyomain = new SplitText(".tokyo11", { type: "chars" });
    const tokyomaintxt = tokyomain.chars;

    const tokyomainDel = gsap.from(tokyomaintxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".tokyo11",
        start: "top 90%",
      },
      onComplete: () => {
        tokyomain.revert();
        tokyomainDel.scrollTrigger?.kill();
      },
    });

    const tokyokanji = new SplitText(".tokyo22", { type: "chars" });
    const tokyokanjitxt = tokyokanji.chars;

    const tokyokanjiDel = gsap.from(tokyokanjitxt, {
      yPercent: 130,
      stagger: 0.05,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".tokyo22",
        start: "top 90%",
      },
      onComplete: () => {
        tokyokanji.revert();
        tokyokanjiDel.scrollTrigger?.kill();
      },
    });

    const tokyodescc = new SplitText(".tokyodesc", { type: "words" });
    const tokyodescctxt = tokyodescc.words;

    const tokyodesccDel = gsap.from(tokyodescctxt, {
      yPercent: 130,
      stagger: 0.02,
      ease: "power1.in",
      duration: 1,
      scrollTrigger: {
        trigger: ".tokyodesc",
        start: "top 90%",
      },
      onComplete: () => {
        tokyodescc.revert();
        tokyodesccDel.scrollTrigger?.kill();
      },
    });
  }, []);

  return (
    <>
      {/* Head removed: now handled by app/head.tsx */}
      <main
        className={`w-full min-h-screen overflow-hidden ${instrumentSans.variable} ${urbanist.variable} ${nunitoSans.variable} ${notosansjp.variable} ${manrope.variable}`}
      >
        <div className="flex justify-start items-center h-screen w-full relative">
          <Image
            src={myImage}
            alt="TokyoStation"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-55"
          />
          <div className="relative text-white font-urbanist text-6xl px-7 lg:px-10">
            <div className="flex overflow-hidden">
              <p className="tky font-bold">Tokyo</p>
            </div>
            <div className="flex overflow-hidden">
              <p className="tkykanji text-3xl">東京</p>
            </div>
            <div className="tkydesc flex overflow-hidden pt-72 lg:pt-63 text-[18px] lg:text-[24px]  ">
              <p className="">
                Travel in Tokyo City through the Yamanote Line Outer Loop
              </p>
            </div>
          </div>
        </div>
        <section className="akbsect relative w-full h-screen">
          <Image
            src={figurines}
            alt="figurines"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
            placeholder="blur"
          />
          <div className="bgakiba w-full h-full flex flex-col overflow-x-hidden">
            <div className="akibatxt1 text-7xl text-white flex-1 flex justify-start items-center bg-yellow-500 rounded-l-xl">
              <p>次は</p>
            </div>
            <div className="akibatxt2 text-7xl text-white flex-1 flex justify-end items-center bg-green-500 rounded-r-xl">
              <p>秋葉原</p>
            </div>
          </div>
        </section>
        <div className="flex justify-start items-center h-screen w-full relative">
          <Image
            src={akiba}
            alt="akihabara"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-55"
          />
          <div className="relative text-white font-urbanist text-6xl px-7 lg:px-10">
            <div className="flex overflow-hidden">
              <p className="akb">Akihabara</p>
            </div>
            <div className="flex overflow-hidden">
              <p className="akb-kanji text-3xl">秋葉原</p>
            </div>

            <div className="akbdesc text-[18px] pt-70 lg:pt-60 flex overflow-hidden lg:text-[24px]">
              <p>
                Located at Chiyoda Ward, Tokyo. Akihabara is known for being a
                holy land for Electronics, Video Games, and Anime Culture
              </p>
            </div>
          </div>
        </div>
        <section className="uenosect relative w-full h-screen">
          <Image
            src={uenoskr1}
            alt="uenopark"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
          />
          <div className="uenocont w-full h-full flex flex-col relative overflow-hidden">
            <div className="uenost1 text-white font-urbanist text-7xl bg-[#ffe7de80] flex flex-1 justify-end items-center">
              <p>次は</p>
            </div>
            <div className="uenost2 text-white font-urbanist text-7xl bg-[#3B6E3B80] flex-1 flex justify-start items-center">
              <p>上野</p>
            </div>
          </div>
        </section>
        <div className="flex justify-start items-center h-screen w-full relative">
          <Image
            src={ameyoko}
            alt="ameyoko-market"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-60"
          />
          <div className="relative text-white font-urbanist text-6xl px-7 lg:px-10">
            <div className="flex overflow-hidden">
              <p className="uenotxt">Ueno</p>
            </div>
            <div className="flex overflow-hidden">
              <p className="uenokanji text-3xl">上野</p>
            </div>

            <div className="uenodesc text-[19px] lg:text-[24px] pt-65 lg:pt-60 flex overflow-hidden">
              <p>
                Located in Taito Ward, Ueno is famous for its bustling Ameyoko
                Market, the Sakura tree columns of Ueno Park, alongside with it
                is Tokyo National Museum
              </p>
            </div>
          </div>
        </div>
        <section className="ikbkrsect relative w-full h-screen">
          <Image
            src={pokecenter}
            alt="pokemon"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
          />
          <div className="ikbkrcont w-full h-full flex flex-col relative overflow-hidden">
            <div className="ikbkr1 text-red-500 text-7xl bg-white flex-1 flex justify-center items-center border-black border-b-4">
              <p>次は</p>
            </div>
            <div className="ikbkr2 text-white text-7xl bg-red-500 flex flex-1 justify-center items-center border-black border-t-4">
              <p>池袋</p>
            </div>
          </div>
        </section>
        <div className="flex justify-start items-center h-screen w-full relative">
          <Image
            src={suncity}
            alt="sunshine city mall"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-50"
            placeholder="blur"
          />
          <div className="relative text-white font-urbanist text-6xl px-7">
            <div className="flex overflow-hidden">
              <p className="ikbkrtxt">Ikebukuro</p>
            </div>
            <div className="flex overflow-hidden">
              <p className="ikbkrkanji text-3xl">池袋</p>
            </div>
            <div className="ikbkrdesc text-[19px] flex overflow-hidden pt-60">
              <p>
                Located in Toshima Ward, Tokyo. Ikebukuro is known for Shopping,
                Cafes, and Pokémon Center in Sunshine City Mall and its Aquarium
              </p>
            </div>
          </div>
        </div>
        <section className="sjksect relative w-full h-screen">
          <Image
            src={shinjukubridge}
            alt="shinjukubridge"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
            placeholder="blur"
          />
          <div className="sjkcont w-full h-full flex relative overflow-hidden text-7xl text-white">
            <div className="sjk1 flex bg-black/50 flex-1 justify-center items-center">
              <div className="flex flex-col bg-[#E6002680] p-4 rounded-lg">
                <p>新</p>
                <p>宿</p>
              </div>
            </div>
            <div className="sjk2 bg-black/50 flex flex-col flex-1 justify-center items-center">
              <div className="flex flex-col bg-[#0C1A4A80] p-4 rounded-lg">
                <p>次</p>
                <p>は</p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-start items-center h-screen w-full relative">
          <Image
            src={sjk}
            alt="kabukicho"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-50"
            placeholder="blur"
          />
          <div className="relative text-white font-urbanist text-6xl px-7">
            <div
              className="sjk11 flex overflow-hidden"
              style={{ height: "1.2em" }}
            >
              <p>Shinjuku</p>
            </div>
            <div className="sjk22 flex overflow-hidden text-3xl">
              <p>新宿</p>
            </div>

            <div className="sjkdesc text-[19px] flex overflow-hidden pt-70">
              <p>
                Shinjuku, located in Shinjuku Ward, Home to the one of the
                Busiest Train Stations in the World and known for its busy night
                life with multiple clubs and bars around Shinjuku
              </p>
            </div>
          </div>
        </div>
        <section className="yygsect relative w-full h-screen">
          <Image
            src={yygpark}
            alt="yoyogi-park"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
            placeholder="blur"
          />
          <div className="yygcont w-full h-full flex relative overflow-hidden text-7xl text-white gap-0">
            <div className="yyg1 flex flex-1 justify-center items-center bg-[#f9f9f9] ">
              <div className="flex flex-col p-4 rounded-lg text-[#b5d200]">
                <p>代</p>
                <p>々</p>
                <p>木</p>
              </div>
            </div>
            <div className="yyg2 flex flex-1 justify-center items-center bg-[#b5d200]">
              <div className="flex flex-col p-4 rounded-lg text-[#f9f9f9]">
                <p>次</p>
                <p>は</p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-start items-center h-screen w-full relative">
          <Image
            src={meiji}
            alt="meiji jingu"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-50"
            placeholder="blur"
          />
          <div className="relative text-white font-urbanist text-6xl px-7">
            <div
              className="yyg11 flex overflow-hidden "
              style={{ height: "1.2em" }}
            >
              <p>Yoyogi</p>
            </div>
            <div
              className="yyg22 flex overflow-hidden text-3xl"
              style={{ height: "1.2em" }}
            >
              <p>代々木</p>
            </div>
            <div className="yygdesc flex overflow-hidden text-[19px] pt-70">
              <p>
                Situated in Shibuya Ward, Yoyogi Park offers a peaceful escape
                from the city&apos;s bustle. Enjoy the serene atmosphere, lush
                greenery, and discover the historic Meiji Jingu Shrine just next
                door.
              </p>
            </div>
          </div>
        </div>
        <section className="shbysect relative w-full h-screen">
          <Image
            src={crossing}
            alt="shibuya crossing"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
            placeholder="blur"
          />
          <div className="shbycont w-full h-full flex flex-col relative overflow-hidden text-7xl text-white gap-0">
            <div className="shby1 flex flex-1 justify-center items-center bg-black/50">
              <p>次は</p>
            </div>
            <div className="shby2 flex flex-1 justify-center items-center bg-black/50">
              <p>渋谷</p>
            </div>
          </div>
        </section>
        <div className="flex justify-start items-center h-screen w-full relative">
          <Image
            src={takeshita}
            alt="takeshita street"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-50"
            placeholder="blur"
          />
          <div className="relative text-white font-urbanist text-6xl px-7">
            <div
              className="shby11 flex overflow-hidden "
              style={{ height: "1.2em" }}
            >
              <p>Shibuya</p>
            </div>
            <div
              className="shby22 flex overflow-hidden text-3xl "
              style={{ height: "1.2em" }}
            >
              <p>渋谷</p>
            </div>
            <div className="shbydesc flex overflow-hidden pt-50 text-[19px]">
              <p>
                Located in Shibuya Ward, Shibuya is renowned for its vibrant
                nightlife, iconic scramble crossing, and as a major shopping and
                entertainment district filled with fashion boutiques, cafes,
                bars, clubs, and izakayas.
              </p>
            </div>
          </div>
        </div>
        <section className="shinbasect relative w-full h-screen">
          <Image
            src={shinbashi}
            alt="shinbashi"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
            placeholder="blur"
          />
          <div className="shinbacont w-full h-full flex flex-col relative overflow-hidden text-7xl text-white gap-0">
            <div className="shinba1 flex flex-1 justify-center items-center bg-black/50">
              <p>次は</p>
            </div>
            <div className="shinba2 flex flex-1 justify-center items-center bg-black/50">
              <p>新橋</p>
            </div>
          </div>
        </section>
        <div className="flex justify-start items-center h-screen w-full relative">
          <Image
            src={shinbashi2}
            alt="shinbashi dori"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-50"
            placeholder="blur"
          />
          <div className="relative text-white font-urbanist text-6xl px-7">
            <div
              className="shinba11 flex overflow-hidden "
              style={{ height: "1.2em" }}
            >
              <p>Shinbashi</p>
            </div>
            <div
              className="shinba22 flex overflow-hidden text-3xl"
              style={{ height: "1.2em" }}
            >
              <p>新橋</p>
            </div>
            <div className="shinbadesc flex overflow-hidden pt-70 text-[19px]">
              <p>
                Shinbashi, in Minato Ward, is famous for its lively izakayas and
                after-work crowd. Follow the salarymen for great food, drinks,
                and a taste of Tokyo&apos;s vibrant nightlife.
              </p>
            </div>
          </div>
        </div>
        <section className="tokyosect relative w-full h-screen">
          <Image
            src={station}
            alt="tokyo station"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
            placeholder="blur"
          />
          <div className="tokyocont w-full h-full flex flex-col relative overflow-hidden text-7xl text-white gap-0">
            <div className="tokyo1 flex flex-1 justify-center items-center bg-black/50">
              <p>次は</p>
            </div>
            <div className="tokyo2 flex flex-1 justify-center items-center bg-black/50">
              <p>東京</p>
            </div>
          </div>
        </section>
        <div className="flex justify-start items-center h-screen w-full relative">
          <Image
            src={castle}
            alt="Imperial Palace"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-50"
            placeholder="blur"
          />
          <div className="relative text-white font-urbanist text-6xl px-7">
            <div
              className="tokyo11 flex overflow-hidden "
              style={{ height: "1.2em" }}
            >
              <p>Tokyo</p>
            </div>
            <div
              className="tokyo22 flex overflow-hidden text-3xl "
              style={{ height: "1.2em" }}
            >
              <p>東京</p>
            </div>
            <div className="tokyodesc flex overflow-hidden pt-70 text-[19px]">
              <p>
                Located in Chiyoda Ward, Tokyo Station is a transport hub of
                Shinkansen and the entry point of anyone going in or out of
                Tokyo
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
