import React from "react";
import Image from "next/image";

export default function Founder() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-16 bg-primary-foreground">
      <div className="flex justify-center w-full">
        <Image
          className="rounded-md"
          src="/yoga/founder.jpeg"
          width={500}
          height={250}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center md:items-start space-y-4 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-3xl md:text-4xl font-medium">Meet Our Founder</h1>
        <p className="text-muted-foreground">
          Meet{" "}
          <span className="font-semibold text-muted-foreground">
            Sulappagari Suman
          </span>
          , a 25-year-old international yoga trainer with a 500RYT certification
          from Bodspire and recognized as a certified yoga trainer by the
          Ministry of Ayush. Suman is also certified in Pranic Healing, Marma
          Healing, and Nadi Pariksha, with a strong foundation in Ayurveda.
        </p>
        <p className="font-semibold text-muted-foreground">
          Their achievements include presenting a paper on the effects of Om
          chanting in school children at the Global Yoga Summit in 2022 and
          being a 5 times part of Guinness World records and World Book of
          Record in Yogasana. Suman's contributions earned them the prestigious
          "Yoga Rathna" Award from the Karnataka Department of Kannada and
          Culture in 2023.
        </p>

        <p className="text-muted-foreground">
          Suman spreads yoga globally, leading online sessions for students in
          the USA, London, Japan, and the Philippines. Renowned for infusing zen
          vibes into Bangalore's institutions, they explore yoga's intersection
          with mathematics. As a skilled chess player, Suman represented
          Bangalore City University and now pioneers yoga for chess players,
          collaborating with local institutions.
        </p>
      </div>
    </div>
  );
}
