'use client'


{/* for fonts imports*/}
import { Instrument_Sans } from "next/font/google";
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-instrument-sans',
});

{/* react imports*/}
import Link from "next/link";


export default function Header() {
  return (
    <div className={`${instrumentSans.variable} bg-white md:px-8 lg:px-16 py-[25px] border-b border-b-black shadow-xl`}>
      <div className="flex justify-between">
        <Link href="/" className="font-instrument-sans lg:text-xl">Home</Link>
        <div className="font-instrument-sans">Dark Mode???</div>
      </div>
    </div>
  );
}