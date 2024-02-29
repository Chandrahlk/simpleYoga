import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const imageGallery = ["/chess/1.jpeg", "/yoga/23.jpeg"];

export default function page() {
  return (
    <div>
      <h1 className="px-4 md:px-8 pt-16 text-3xl md:text-4xl text-center font-medium">
        Chess
      </h1>
      <div className="px-4 md:px-8 pt-12 pb-16 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8">
          <div className="flex justify-center items-center">
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
                      <Image src={url} height="500" width="500" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex flex-col justify-between align-middle gap-6 text-center md:text-left">
            <p className="text-muted-foreground">
              Note: Please choose your preferred time avalibility. You have the
              flexibility to rearrange your schedule as needed!
            </p>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Avaliable Plans</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="sm">1 Month</Button>
                <Button size="sm">3 Month</Button>
                <Button size="sm">6 Month</Button>
                <Button size="sm">12 Month</Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Chess Classes For</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="sm">Ultra Beginner</Button>
                <Button size="sm">Begineer</Button>
                <Button size="sm">Intermediate</Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Weekly Twice (Wednesday & Friday)</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="sm">6:30PM to 8PM</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 py-16 bg-primary-foreground">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl text-center font-medium pb-8">
            About Chess
          </h1>
          <p className="text-muted-foreground text-center">
            Chess, a game of profound strategy and timeless elegance, traces its
            origins back over a millennium to the Indian subcontinent, where it
            emerged as "chaturanga" around the 6th century AD. From there, it
            spread to Persia, where it became "shatranj," and eventually made
            its way to Europe, undergoing various modifications along the
            journey. By the 15th century, chess had evolved into a form
            recognizable to modern players, with the establishment of rules
            governing piece movement and gameplay.
          </p>
          <p className="text-muted-foreground text-center">
            Two players engage in a battle of wits on a square board divided
            into 64 alternating light and dark squares. Each commands an army of
            16 pieces, including kings, queens, rooks, knights, bishops, and
            pawns, each with unique movement capabilities. This intricate dance
            of intellect and skill unfolds in a game of spatial awareness,
            calculation, and anticipation. Every move carries weight,
            potentially shaping the course of the entire game as players
            navigate the dual objectives of offense and defense.
          </p>
          <p className="text-muted-foreground text-center">
            Central to chess is the concept of checkmate—the ultimate goal
            achieved when a player's king is under direct threat of capture and
            cannot escape. It's a moment of triumph, attained through astute
            positioning, tactical maneuvers, and strategic planning. Beyond its
            competitive aspect, chess serves as a canvas for creativity and
            expression, fostering camaraderie and sportsmanship. As it continues
            to adapt and thrive through centuries of evolution, chess remains a
            sanctuary for those seeking the thrill of mental challenge and the
            satisfaction of strategic conquest.
          </p>
        </div>
      </div>
      <div className="px-4 md:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-medium text-center">
          Pricing
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div className="flex flex-col w-full justify-center items-center border rounded-md shadow-md p-4 space-y-4 hover:bg-slate-100">
            <h1 className="text-lg font-medium">ULTRA BEGINNER</h1>
            <h1 className="text-4xl font-medium text-primary">&#8377; 1,200</h1>
            <p className="text-primary font-medium">For 1 Month</p>
            <p className="text-lg font-medium">Admission Fee &#8377; 1,500</p>
            <p className=" text-muted-foreground">Free Chess Kit</p>
            <p className=" text-muted-foreground"> Free Chess Books</p>
            <p className=" text-muted-foreground">Offline/Online classes</p>
            <Link className="w-full" href="/contact">
              <Button className="w-full" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="flex flex-col w-full justify-center items-center border rounded-md shadow-md p-4 space-y-4 hover:bg-slate-100">
            <h1 className="text-lg font-medium">BEGINNER</h1>
            <h1 className="text-4xl font-medium text-primary">&#8377; 1,500</h1>
            <p className="text-primary font-medium">For 1 Month</p>
            <p className="text-lg font-medium">Admission Fee &#8377; 1,500</p>
            <p className=" text-muted-foreground">Free Chess Kit</p>
            <p className=" text-muted-foreground"> Free Chess Books</p>
            <p className=" text-muted-foreground">Offline/Online classes</p>
            <Link className="w-full" href="/contact">
              <Button className="w-full" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="flex flex-col w-full justify-center items-center border rounded-md shadow-md p-4 space-y-4 hover:bg-slate-100">
            <h1 className="text-lg font-medium">INTERMEDIATE</h1>
            <h1 className="text-4xl font-medium text-primary">&#8377; 2,000</h1>
            <p className="text-primary font-medium">For 1 Month</p>
            <p className="text-lg font-medium">Admission Fee &#8377; 1,500</p>
            <p className=" text-muted-foreground">Free Chess Kit</p>
            <p className=" text-muted-foreground"> Free Chess Books</p>
            <p className=" text-muted-foreground">Offline/Online classes</p>
            <Link className="w-full" href="/contact">
              <Button className="w-full" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
