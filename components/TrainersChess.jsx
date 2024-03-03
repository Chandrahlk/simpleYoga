import React from "react";
import Image from "next/image";

export default function TrainersChess() {
  return (
    <div className="space-y-8 px-4 md:px-8 py-12 bg-primary-foreground">
      <h1 className="text-3xl md:text-4xl font-medium text-center">
        Our Trainers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-0 md:mx-auto justify-items-center justify-center items-center text-center">
        <div className="flex flex-col md:col-start-2 w-full justify-center items-center border m-4 rounded-lg shadow-md p-4 space-y-3 hover:bg-slate-100">
          <Image
            className="rounded-md"
            src="/yoga/trainer1.jpeg"
            width={150}
            height={150}
          />
          <h1 className="text-lg font-medium">Sulappagari Suman</h1>
          <p className=" text-muted-foreground">Founder & Trainer</p>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-lg shadow-md p-4 space-y-3 hover:bg-slate-100">
          <Image
            className="rounded-md"
            src="/hero-logo.webp"
            width={190}
            height={150}
          />
          <h1 className="text-lg font-medium">Harshitha G P</h1>
          <p className=" text-muted-foreground">Chess Teacher</p>
        </div>
      </div>
    </div>
  );
}
