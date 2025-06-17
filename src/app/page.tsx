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
      <div className="flex">
        <div className="bg-red-500">
          <Image
            src="/20240410_111015.webp"
            alt="Landing Image"
            width={620}
            fill
            height={200}
            quality={100}
            />



















        </div>
        <div className="bg-green-500">awdw</div>
      </div>
    </main>
    </>
  );
}
