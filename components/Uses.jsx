import React from "react";
import { GiStrong } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";

export default function Uses() {
  return (
    <div className="p-4 md:px-12 my-16 md:my-10 py-16">
      <div className="flex flex-col md:flex-row justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center md:items-start p-4 space-y-3">
          <GiStrong className="h-10 w-10 text-primary" />
          <h1 className="text-xl font-medium">Strengthens Muscles</h1>
          <p className="md:text-left  text-muted-foreground">
            Many yoga poses require you to support your body weight, which can
            help strengthen muscles throughout your body, including your core,
            arms, legs, and back.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start p-4 space-y-3">
          <RiMentalHealthFill className="h-10 w-10 text-primary" />
          <h1 className="text-xl font-medium">Enhances Mental Clarity</h1>
          <p className="md:text-left  text-muted-foreground">
            The focus on breath control and mindfulness in yoga can improve
            mental clarity and concentration. It can help you feel more present
            and focused in your daily life.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start p-4 space-y-3">
          <FaHeartbeat className="h-10 w-10 text-primary" />
          <h1 className="text-xl font-medium">Supports Heart Health</h1>
          <p className="md:text-left  text-muted-foreground">
            Some studies suggest that yoga may help lower blood pressure,
            improve heart rate variability, and reduce the risk of heart
            disease.
          </p>
        </div>
      </div>
    </div>
  );
}
