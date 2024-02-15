import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function Why() {
  return (
    <div
      className="p-4 md:px-12 my-16 md:my-10 py-16 bg-primary-foreground "
      id="why"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center w-full">
          <Image src="/why-logo.webp" width={500} height={250} />
        </div>
        <div className="w-full flex flex-col justify-center items-center md:items-start space-y-3 text-center md:text-left mb-8 md:mb-0 mt-8 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-medium">
            Why You Should Do Yoga?
          </h1>
          <h4 className="text-muted-foreground">
            You should do yoga because it improves flexibility, strengthens
            muscles, reduces stress, enhances mental clarity, boosts energy
            levels, supports overall well-being, improves posture, increases
            self-awareness, supports heart health, and promotes mindfulness.
          </h4>
          <div className="flex justify-center items-center space-x-2 text-primary font-medium">
            <FaCheckCircle />
            <p>Yoga boosts brain power</p>
          </div>
          <div className="flex justify-center items-center space-x-2 text-primary font-medium">
            <FaCheckCircle />
            <p>Yoga improves your strength</p>
          </div>
          <div className="flex justify-center items-center space-x-2 text-primary font-medium">
            <FaCheckCircle />
            <p>Yoga helps you to focus</p>
          </div>
          <div className="flex justify-center items-center space-x-2 text-primary font-medium">
            <FaCheckCircle />
            <p>Yoga Supports Overall Well-being</p>
          </div>
        </div>
      </div>
    </div>
  );
}
