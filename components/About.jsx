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
      <div className="w-full flex flex-col justify-center items-center md:items-start space-y-4 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-3xl md:text-4xl font-medium pb-2">About Us</h1>
        <h4 className="text-muted-foreground">
          Welcome to Aadhyantha Academy, where ancient wisdom meets modern
          vitality! Nestled in the heart of Bangalore City, we're dedicated to
          nurturing holistic well-being for mind, body, and soul.
        </h4>
        <p className="text-muted-foreground">
          Founded in 2021 by the visionary Sulappagari Suman, our vibrant
          community hub has blossomed into a pillar of well-being with over 200
          active members by 2023. Here, we blend the tranquility of yoga, the
          healing arts of marma and Pranic healing, and the timeless principles
          of Ayurveda to create a space where simplicity and transformation go
          hand in hand.
        </p>
        <p className="text-muted-foreground">
          But we're not just about inner peace—we're also passionate about
          enhancing cognitive development in young minds. Through engaging
          classes in chess, mathematics, Vedic maths, and Rubik's cubes, we fuse
          ancient Vedic sciences with modern learning, inspiring curiosity,
          critical thinking, and problem-solving skills.
        </p>
        <p className="text-muted-foreground">
          Join us on this journey as we traverse the path from 'aadhi'
          (beginning) to 'anthya' (end), embodying the spirit of growth,
          enlightenment, and holistic well-being, just as our name, Aadhyantha,
          suggests. Let's unlock the boundless potential within, together!
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
