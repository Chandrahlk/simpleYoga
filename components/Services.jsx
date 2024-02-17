import React from "react";
import { Button } from "@/components/ui/button";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";
import { TbMathSymbols } from "react-icons/tb";
import { FaChess } from "react-icons/fa6";
import { GiMeditation } from "react-icons/gi";
import { MdTempleHindu } from "react-icons/md";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { GrYoga } from "react-icons/gr";

export default function Services() {
  return (
    <div className="p-4 md:px-12 my-16 md:my-10 py-16">
      <h1 className="text-3xl md:text-4xl font-medium text-center">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-0 md:mx-auto justify-items-center justify-center items-center text-center my-8">
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-slate-100">
          <GrYoga className="h-10 w-10" />
          <h1 className="text-lg font-medium">Yoga Asanas</h1>
          <p className=" text-muted-foreground">
            Alignment-base and statistic Pose
          </p>
          <Button className="m-4 w-full" size="lg">
            Know More
          </Button>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-slate-100">
          <MdEnergySavingsLeaf className="h-10 w-10" />
          <h1 className="text-lg font-medium">Marma & Pranic Healing</h1>
          <p className=" text-muted-foreground">
            It helps in Energizes, Balance, Restores
          </p>
          <Button className="m-4 w-full" size="lg">
            Know More
          </Button>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-slate-100">
          <MdTempleHindu className="h-10 w-10" />
          <h1 className="text-lg font-medium">Ayurveda Fundamentals</h1>
          <p className=" text-muted-foreground">
            Restore energy, clarity, and balance
          </p>
          <Button className="m-4 w-full" size="lg">
            Know More
          </Button>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-slate-100">
          <GiMeditation className="h-10 w-10" />
          <h1 className="text-lg font-medium">Pranayama & Meditation</h1>
          <p className=" text-muted-foreground">
            It helps in Calming & breath-focused
          </p>
          <Button className="m-4 w-full" size="lg">
            Know More
          </Button>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-slate-100">
          <FaChess className="h-10 w-10" />
          <h1 className="text-lg font-medium">Chess</h1>
          <p className=" text-muted-foreground">
            Learn chess from expert chess instructors
          </p>
          <Button className="m-4 w-full" size="lg">
            Know More
          </Button>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-slate-100">
          <TbMathSymbols className="h-10 w-10" />
          <h1 className="text-lg font-medium">Maths</h1>
          <p className=" text-muted-foreground">
            Master Math with the best experts
          </p>
          <Button className="m-4 w-full" size="lg">
            Know More
          </Button>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-slate-100">
          <GiPerspectiveDiceSixFacesOne className="h-10 w-10" />
          <h1 className="text-lg font-medium">Vedic Maths</h1>
          <p className=" text-muted-foreground">
            Creative calculation strategies with Vedic maths
          </p>
          <Button className="m-4 w-full" size="lg">
            Know More
          </Button>
        </div>
      </div>
    </div>
  );
}
