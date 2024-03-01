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
import Reviews from "@/components/Reviews";

const imageGallery = [
  "/chess/0.jpeg",
  "/chess/2.jpeg",
  "/chess/4.jpeg",
  "/chess/6.jpeg",
  "/chess/7.jpeg",
  "/chess/8.jpeg",
  "/chess/9.jpeg",
  "/chess/10.jpeg",
  "/chess/11.jpeg",
  "/chess/12.jpeg",
  "/chess/13.jpeg",
];

const reviews = [
  {
    name: "Dhanush",
    place: "Bangalore",
    content:
      "Here I had a great experience with Suman sir about chess, I liked the way of teaching, I recommend this chess class for all",
  },
  {
    name: "shilpa Jayaram",
    place: "Bangalore",
    content:
      "The chess classes were engaging and interactive. I appreciated the opportunity to practice what my son learned through hands-on exercises and games. I'm grateful for the chess classes. Not only did they help my son improve his game, but they also sparked his interest in exploring chess further outside of class time.",
  },
  ,
  {
    name: "Ranjitha koppal",
    place: "Bangalore",
    content:
      "The way of teaching is very good ,my son's interest towards chess is increasing day by day, I am happy. Thank you Suman sir",
  },
  {
    name: "Bhadrinath Eruventee",
    place: "Bangalore",
    content:
      "The way the sir nurturing the students in chess learning is awesome. Especially this is helping alot in the  kids thought process on there own and they are  applying in studies and extra curricular activities..",
  },
  {
    name: "Anupama Girish",
    place: "Bangalore",
    content:
      "One of the best teacher, way of his teaching is too good. During the class sir was  asking the questions so kids understand very well.",
  },
];

export default function page() {
  return (
    <div>
      <h1 className="px-4 md:px-8 pt-12 text-3xl md:text-4xl text-center font-medium">
        Chess
      </h1>
      <div className="px-4 md:px-8 pt-12 pb-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8">
          <div className="flex justify-center items-center align-middle">
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
          </div>
          <div className="flex flex-col justify-between align-middle gap-6 text-center md:text-left">
            <p className="text-muted-foreground">
              Note: Please choose your preferred time avalibility. You have the
              flexibility to rearrange your schedule as needed!
            </p>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Avaliable Plans</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="sm">
                  <Link href="#pricing">1 Month</Link>
                </Button>
                <Button size="sm">
                  <Link href="#pricing">3 Month</Link>
                </Button>
                <Button size="sm">
                  <Link href="#pricing">6 Month</Link>
                </Button>
                <Button size="sm">
                  <Link href="#pricing">12 Month</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Chess Classes For</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="sm">Ultra Beginner</Button>
                <Button size="sm">Strong Begineer</Button>
                <Button size="sm">Intermediate</Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Weekly Twice (Wednesday & Friday)</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="sm">6:30PM to 8PM</Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Avaliable Modes</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="sm">At The Centre</Button>
                <Button size="sm">Online</Button>
                <Button size="sm">Home Visit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 py-12 bg-primary-foreground">
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
      <div className="px-4 md:px-8 py-12" id="pricing">
        <h1 className="text-3xl md:text-4xl font-medium text-center">
          Pricing
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div className="flex flex-col w-full justify-center items-center border rounded-md shadow-md p-4 space-y-4 hover:bg-slate-100">
            <h1 className="text-lg font-medium">ULTRA BEGINNER</h1>
            <h1 className="text-4xl font-medium text-primary">&#8377; 1,500</h1>
            <p className="text-primary font-medium">For 1 Month</p>
            <p className="text-primary font-medium">
              For 3 months &#8377;4,300
            </p>
            <p className="text-primary font-medium">
              For 6 months &#8377;8,400
            </p>
            <p className="text-primary font-medium">
              For 12 months &#8377;16,000
            </p>
            <p className="text-lg font-medium">Admission Fee &#8377; 1,500</p>
            <p className=" text-muted-foreground">Free Chess Kit</p>
            <p className=" text-muted-foreground"> Free Chess Books</p>
            <p className=" text-muted-foreground"> Free online tournament </p>
            <p className=" text-muted-foreground">Free 2 yoga session/month</p>
            <p className=" text-muted-foreground">Offline/Online classes</p>

            <Link className="w-full" href="/contact">
              <Button className="w-full" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="flex flex-col w-full justify-center items-center border rounded-md shadow-md p-4 space-y-4 hover:bg-slate-100">
            <h1 className="text-lg font-medium">STRONG BEGINNER</h1>
            <h1 className="text-4xl font-medium text-primary">&#8377; 1,800</h1>
            <p className="text-primary font-medium">For 1 Month</p>
            <p className="text-primary font-medium">
              For 3 months &#8377;5,200
            </p>
            <p className="text-primary font-medium">
              For 6 months &#8377;10,000
            </p>
            <p className="text-primary font-medium">
              For 12 months &#8377;19,000
            </p>
            <p className="text-lg font-medium">Admission Fee &#8377; 1,500</p>
            <p className=" text-muted-foreground">Free Chess Kit</p>
            <p className=" text-muted-foreground"> Free Chess Books</p>
            <p className=" text-muted-foreground"> Free online tournament </p>
            <p className=" text-muted-foreground">Free 2 yoga session/month</p>
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
            <p className="text-primary font-medium">
              For 3 months &#8377;5,700
            </p>
            <p className="text-primary font-medium">
              For 6 months &#8377;11,000
            </p>
            <p className="text-primary font-medium">
              For 12 months &#8377;21,000
            </p>
            <p className="text-lg font-medium">Admission Fee &#8377; 1,500</p>
            <p className=" text-muted-foreground">Free Chess Kit</p>
            <p className=" text-muted-foreground"> Free Chess Books</p>
            <p className=" text-muted-foreground"> Free online tournament </p>
            <p className=" text-muted-foreground">Free 2 yoga session/month</p>
            <p className=" text-muted-foreground">Offline/Online classes</p>

            <Link className="w-full" href="/contact">
              <Button className="w-full" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 py-12  bg-primary-foreground">
        <h1 className="text-3xl md:text-4xl font-medium text-center pb-12">
          Reviews
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <Reviews
              key={index}
              name={review.name}
              place={review.place}
              content={review.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
