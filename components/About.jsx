import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-12 bg-primary-foreground">
      <div className="flex justify-center w-full">
        <Image
          className="border rounded-md shadow-md"
          src="/yoga/about.jpeg"
          width={500}
          height={250}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center md:items-start space-y-6 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-3xl md:text-4xl font-medium pb-2">About Us</h1>
        <h4 className="text-muted-foreground">
          Welcome to Aadhyantha Yoga Studio, nurtured by the vision of our
          founder, Sulappagari Suman. Here, we offer a harmonious blend of yoga,
          marma, Pranic healing, and Ayurveda basics, fostering holistic
          well-being for our members. Situated in the heart of Bangalore City,
          our tranquil space celebrates the journey from 'aadhya' to 'anthya,'
          unlocking the boundless potential of the mind, body, and soul.
        </h4>
        <p className="text-muted-foreground">
          Founded in 2021 with a passionate commitment to holistic health,
          Aadhyantha Yoga Studio has flourished into a vibrant community hub by
          2023. Today, boasting over 200 active members, we have not only grown
          but have also established ourselves as a pillar of well-being in the
          city. Join us on our journey where ancient practices seamlessly blend
          with modern living, offering simplicity and transformation at every
          step.
        </p>
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
  );
}
