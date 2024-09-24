import React from "react";
import { TbMathSymbols } from "react-icons/tb";
import { GiIceCube } from "react-icons/gi";
import { GiMaterialsScience } from "react-icons/gi";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="space-y-8 px-4 md:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-medium text-center">Others</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-0 md:mx-auto justify-items-center justify-center items-center text-center">
        <div className="flex flex-col w-full justify-center items-center border m-0 rounded-md shadow-md p-4 space-y-3 hover:bg-primary-foreground">
          <TbMathSymbols className="h-10 w-10" />
          <h1 className="text-lg font-medium">Vedic Maths Classes</h1>
          <p className=" text-muted-foreground">
            Discover the power of Vedic Mathematics at Aadhyantha Academy. Our
            classes incorporate ancient techniques to enhance mental math
            skills, improve calculation speed, and develop numerical confidence.
            Join us and experience the magic of Vedic Maths for simplified and
            faster calculations.
          </p>
          <Link className="w-full" href="/contact">
            <Button className="w-full" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>

        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-primary-foreground">
          <GiIceCube className="h-10 w-10" />
          <h1 className="text-lg font-medium">Rubik's Cube Classes</h1>
          <p className=" text-muted-foreground">
            Unlock the secrets of the Rubik's Cube with our specialized classes
            at Aadhyantha Academy. Learn the techniques and strategies to solve
            this iconic puzzle efficiently and impressively. Join us and master
            the art of the Rubik's Cube in a fun and engaging environment.
          </p>
          <Link className="w-full" href="/contact">
            <Button className="w-full" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-primary-foreground">
          <GiMaterialsScience className="h-10 w-10" />
          <h1 className="text-lg font-medium">
            Science and Mathematics Tutorials
          </h1>
          <p className=" text-muted-foreground">
            Excel in your academic journey with our Science and Maths tutorials
            at Aadhyantha Academy. Designed for high school and PU students, our
            tutorials provide wide range of key concepts, personalized attention
            and expert guidance to ensure academic success. Join us and learn
            Maths & Science.
          </p>
          <Link className="w-full" href="/contact">
            <Button className="w-full" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
