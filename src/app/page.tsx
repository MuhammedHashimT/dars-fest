import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <img src="/jam.jpg" className="w-96 h-96 object-cover -my-20" />
      <p className="lg:text-[72px] text-3xl font-black mb-5 text-center">
        Jamia Junior Fest
      </p>
      <p className="lg:text-lg font-black mb-5 text-center">
Grand Finale 2025     </p>
      <div className="flex gap-2 text-xl font-semibold">
        <Link href={'/result'}  className="py-1 bg-yellow border-yellow hover:bg-yellower border-2 px-2 rounded-md ">
          Results
        </Link >
         {/* <Link href={'/institutions'} className="py-1 bg-yellow border-yellow hover:bg-yellower border-2 px-2 rounded-md ">
          Junior College
        </Link > */}
        <Link href={'/profile'} className="py-1 bg-yellow border-yellow hover:bg-yellower border-2 px-2 rounded-md ">
          Profile
        </Link >
      </div>
    </div>
  );
}

export default page;
