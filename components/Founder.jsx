import React from "react";
import Image from "next/image";

export default function Founder() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 pb-16 bg-primary-foreground">
      <div className="flex justify-center w-full">
        <Image
          className="rounded-md"
          src="/yoga/founder.jpeg"
          width={400}
          height={250}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center md:items-start space-y-6 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-3xl md:text-4xl font-medium">Meet Our Founder</h1>
        <h4 className="text-muted-foreground">
          Our{" "}
          <span className="font-medium text-primary">Sulappagari Suman</span>, A
          25-year-old international yoga trainer with a 500RYT certification
          from Bodspire and certified yoga trainer from Ministry of Ayush.
          Certified Pranic Healer, Marma Healer, and Ayurveda practitioner.Part
          of Five-time Guinness World Record contender, World Book of Records
          awardee. Bagged the "Yoga Rathna" Award in 2023.
        </h4>
        <p className="text-muted-foreground">
          Spreads yoga joy globally, leading sessions for students in the USA,
          London, Japan, and the Philippines online. Known for sparking zen
          vibes in schools, colleges, and NGOs across Bangalore. Beyond the mat,
          they dive into the intriguing world where yoga meets mathematics.
        </p>
      </div>
    </div>
  );
}
