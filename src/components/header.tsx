'use client'


{/* for fonts imports*/}
import { Instrument_Sans } from "next/font/google";
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-instrument-sans',
});

{/* react imports*/}


export default function Header() {
  return (
    <div className={`${instrumentSans.variable} fixed w-full bg-white border-b-1 border-b-black shadow-xl z-100 block`}>
      <div className="flex justify-between p-6">
        <div className="font-instrument-sans">Home</div>
        <div className="font-instrument-sans">Book Flight</div>
      </div>
    </div>
    
  );
}