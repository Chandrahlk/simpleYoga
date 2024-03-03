import React from "react";
import { Button } from "@/components/ui/button";
import { FaChess } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import Link from "next/link";

export default function Services() {
  return (
    <div className="space-y-8 px-4 md:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-medium text-center">
        Our Offerings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-0 md:mx-auto justify-items-center justify-center items-center text-center">
        <div className="flex flex-col w-full justify-center items-center border m-0 rounded-md shadow-md p-4 space-y-3 hover:bg-primary-foreground">
          <GrYoga className="h-10 w-10" />
          <h1 className="text-lg font-medium">Yoga</h1>
          <p className=" text-muted-foreground">
            Daily practice yoga poses and breathing techniques to strengthen the
            body and calm the mind, promoting physical flexibility and mental
            clarity.
          </p>
          <Link className="w-full" href="/yoga">
            <Button className="w-full" size="lg">
              Know More
            </Button>
          </Link>
        </div>
        {/* <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-primary-foreground">
          <MdEnergySavingsLeaf className="h-10 w-10" />
          <h1 className="text-lg font-medium">Marma & Pranic Healing</h1>
          <p className=" text-muted-foreground">
            It helps in Energizes, Balance, Restores
          </p>
          <Button className="m-4 w-full" size="lg">
            Know More
          </Button>
        </div> */}
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-primary-foreground">
          <FaChess className="h-10 w-10" />
          <h1 className="text-lg font-medium">Chess</h1>
          <p className=" text-muted-foreground">
            Engage in a game of strategy and foresight, where every move shapes
            the battlefield, challenging your intellect and decision-making
            skills.
          </p>
          <Link className="w-full" href="/chess">
            <Button className="w-full" size="lg">
              Know More
            </Button>
          </Link>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-primary-foreground">
          <TbReportMoney className="h-10 w-10" />
          <h1 className="text-lg font-medium">Finance Services</h1>
          <p className=" text-muted-foreground">
            Empower your financial future with our services: insurance, mutual
            funds, stocks, life, vehicle and health coverage. Tailored solutions
            for you.
          </p>
          <Link className="w-full" href="#">
            <Button className="w-full" size="lg">
              Coming Soon
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
