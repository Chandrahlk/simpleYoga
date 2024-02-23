import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-10">
      <div className="flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left py-8 md:py-0">
        <h1 className="text-3xl md:text-6xl font-medium">Aadhyantha Academy</h1>
        <h4 className="text-lg md:text-xl text-muted-foreground">
          Join us for yoga, meditation, ayurveda, and more at our calming
          heaven.
        </h4>
        <div className="flex gap-4">
          <Link href="/yoga">
            <Button className="gap-2" size="lg">
              <FaArrowRightLong />
              YOGA
            </Button>
          </Link>
          <Link href="/chess">
            <Button className="gap-2" size="lg">
              <FaArrowRightLong />
              CHESS
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src="/hero-logo.webp" width={500} height={125} />
      </div>
    </div>
  );
}
