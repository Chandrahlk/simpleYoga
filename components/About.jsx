import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="p-4 md:px-12 py-16 bg-primary-foreground " id="why">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center w-full">
          <Image src="/why-logo.webp" width={500} height={250} />
        </div>
        <div className="w-full flex flex-col justify-center items-center md:items-start space-y-6 text-center md:text-left mb-8 md:mb-0 mt-8 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-medium">About Us</h1>
          <h4 className="text-muted-foreground">
            Welcome to Aadhyantha Yoga Studio, founded by Sulappagari Suman. We
            offer a blend of yoga, marma, pranic healing, and Ayurveda basics
            for holistic well-being. In our tranquil space, we celebrate the
            journey from 'aadhya' to 'anthya,' unlocking the limitless potential
            of mind body and soul. Join us for a harmonious experience where
            ancient practices meet modern living.
          </h4>
          <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-9 md:space-y-0 md:space-x-9">
            <div className="flex flex-col justify-center items-center md:items-start space-y-3">
              <h1 className="text-4xl text-primary font-medium">200+</h1>
              <p className="md:text-left font-semibold font-lg">
                Satisfied clients
              </p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start space-y-3">
              <h1 className="text-4xl text-primary font-medium">95%</h1>
              <p className="md:text-left font-semibold font-lg">
                Success of Online Class
              </p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start space-y-3">
              <h1 className="text-4xl text-primary font-medium">5+</h1>
              <p className="md:text-left font-semibold font-lg">
                Expert team member
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
