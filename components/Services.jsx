import React from "react";
import { Button } from "@/components/ui/button";
import { FaChess } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { GrYoga } from "react-icons/gr";

export default function Services() {
  return (
    <div className="space-y-8 px-4 md:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-medium text-center">
        Our Offerings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-8 gap-y-0 md:mx-auto justify-items-center justify-center items-center text-center">
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-slate-100">
          <GrYoga className="h-10 w-10" />
          <h1 className="text-lg font-medium">Yoga</h1>
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
          <FaClipboardList className="h-10 w-10" />
          <h1 className="text-lg font-medium">Others</h1>
          <p className=" text-muted-foreground">
            Master Math, VedicMaths with the best experts
          </p>
          <Button className="m-4 w-full" size="lg">
            Know More
          </Button>
        </div>
      </div>
    </div>
  );
}
