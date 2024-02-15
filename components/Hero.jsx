import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="p-4 md:px-12 my-16 md:my-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-center items-center md:items-start space-y-6 text-center md:text-left mb-8 md:mb-0 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-medium">Simple YOGA</h1>
          <h4 className="text-lg md:text-2xl text-muted-foreground">
            Transform your life through the power of yoga.
          </h4>
          <Button size="lg">JOIN NOW</Button>
        </div>
        <div className="flex justify-center">
          <Image src="/hero-logo.webp" width={500} height={125} />
        </div>
      </div>
    </div>
  );
}
