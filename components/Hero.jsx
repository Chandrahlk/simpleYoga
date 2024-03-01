import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const imageGallery = [
  "/yoga/32.jpeg",
  "/yoga/31.jpeg",
  "/yoga/30.jpeg",
  "/yoga/29.jpeg",
  "/yoga/28.jpeg",
  "/yoga/founder.jpeg",
];

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center px-4 md:px-8 py-12 bg-indigo-100">
      <div className="flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left py-8 md:py-0">
        <h1 className="text-3xl md:text-5xl font-medium">Aadhyantha Academy</h1>
        <h4 className="text-lg md:text-xl text-muted-foreground">
          Join us for yoga, meditation, chess and more at our calming heaven.
        </h4>
        <div className="flex gap-4">
          <Link href="/yoga">
            <Button className="gap-2" size="lg">
              <FaArrowRightLong />
              YOGA
            </Button>
          </Link>
          <Link href="/chess">
            <Button className="gap-2" size="lg">
              <FaArrowRightLong />
              CHESS
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-5/6"
        >
          <CarouselContent className="flex">
            {imageGallery.map((url, index) => (
              <CarouselItem key={index} className="grow">
                <div className="p-1 border rounded-xl shadow aspect-auto flex justify-center">
                  <Image src={url} height="150" width="500" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* <Image
          className="rounded-md"
          src="/yoga/17.jpeg"
          width={500}
          height={125}
        /> */}
      </div>
    </div>
  );
}
