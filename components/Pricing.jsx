import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Membership() {
  return (
    <div className="px-4 md:px-8 py-12" id="pricing">
      <h1 className="text-3xl md:text-4xl font-medium text-center pb-12">
        Pricing
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col w-full justify-center items-center border rounded-md shadow-md p-4 space-y-4 hover:bg-primary-foreground">
          <h1 className="text-lg font-medium">1 MONTH</h1>
          <h1 className="text-4xl font-medium text-primary">&#8377; 2,000</h1>
          <p className="text-primary font-medium">For Group Classes</p>
          <p className="text-lg font-medium">&#8377; 2,000 Actual Cost</p>
          <p className=" text-muted-foreground">&#8377; 0 Discount</p>
          <p className=" text-muted-foreground"> Access to all classes</p>
          <p className=" text-muted-foreground">Offline/Online classes</p>
          <Link className="w-full" href="/contact">
            <Button className="w-full" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="flex flex-col w-full justify-center items-center border rounded-md shadow-md p-4 space-y-4 hover:bg-primary-foreground">
          <h1 className="text-lg font-medium">3 MONTHS</h1>
          <h1 className="text-4xl font-medium text-primary">&#8377; 5,000</h1>
          <p className="text-primary font-medium">For Group Classes</p>
          <p className="text-lg font-medium">&#8377; 6,000 Actual Cost</p>
          <p className=" text-muted-foreground">&#8377; 1,000 Discount</p>
          <p className=" text-muted-foreground">Access to all classes</p>
          <p className=" text-muted-foreground">Offline/Online classes</p>
          <Link className="w-full" href="/contact">
            <Button className="w-full" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="flex flex-col w-full justify-center items-center border  rounded-md shadow-md p-4 space-y-4 hover:bg-primary-foreground">
          <h1 className="text-lg font-medium">6 MONTHS</h1>
          <h1 className="text-4xl font-medium text-primary">&#8377; 8,000</h1>
          <p className="text-primary font-medium">For Group Classes</p>
          <p className="text-lg font-medium">&#8377; 12,000 Actual Cost</p>
          <p className=" text-muted-foreground">&#8377; 4,000 Discount</p>
          <p className=" text-muted-foreground">Access to all classes</p>
          <p className=" text-muted-foreground">Offline/Online classes</p>
          <Link className="w-full" href="/contact">
            <Button className="w-full" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="flex flex-col w-full justify-center items-center border  rounded-md shadow-md p-4 space-y-4 hover:bg-primary-foreground">
          <h1 className="text-lg font-medium">12 MONTHS</h1>
          <h1 className="text-4xl font-medium text-primary">&#8377; 14,000</h1>
          <p className="text-primary font-medium">For Group Classes</p>
          <p className="text-lg font-medium">&#8377; 24,000 Actual Cost</p>
          <p className=" text-muted-foreground">&#8377; 10,000 Discount</p>
          <p className=" text-muted-foreground">Access to all classes</p>
          <p className=" text-muted-foreground">Offline/Online classes</p>
          <Link className="w-full" href="/contact">
            <Button className="w-full" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="flex flex-col w-full justify-center items-center border  rounded-md shadow-md p-4 space-y-4 hover:bg-primary-foreground">
          <h1 className="text-lg font-medium">YOGA SESSION</h1>
          <h1 className="text-4xl font-medium text-primary">
            &#8377; 1,500<span className="text-xs">/ Session</span>
          </h1>
          <p className="text-primary font-medium">For Personal Classes</p>
          <p className="text-lg font-medium">&#8377; 1,800 Actual Cost</p>
          <p className=" text-muted-foreground">&#8377; 300 Discount</p>
          <p className=" text-muted-foreground"> Access to all classes</p>
          <p className=" text-muted-foreground">Offline/Online classes</p>
          <Link className="w-full" href="/contact">
            <Button className="w-full" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="flex flex-col w-full justify-center items-center border  rounded-md shadow-md p-4 space-y-4 hover:bg-primary-foreground">
          <h1 className="text-lg font-medium">PRANIC HEALING</h1>
          <h1 className="text-4xl font-medium text-primary">
            &#8377; 1000<span className="text-xs">/ Session</span>
          </h1>
          <p className="text-primary font-medium">For Personal Classes</p>
          <p className="text-lg font-medium">&#8377; 1,500 Actual Cost</p>
          <p className=" text-muted-foreground">&#8377; 500 Discount</p>
          <p className=" text-muted-foreground">Access to all classes</p>
          <p className=" text-muted-foreground">Offline/Online classes</p>
          <Link className="w-full" href="/contact">
            <Button className="w-full" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="flex flex-col w-full justify-center items-center border  rounded-md shadow-md p-4 space-y-4 hover:bg-primary-foreground">
          <h1 className="text-lg font-medium">MARMA CHIKISTA</h1>
          <h1 className="text-4xl font-medium text-primary">
            &#8377; 1,500<span className="text-xs">/ Session</span>
          </h1>
          <p className="text-primary font-medium">For Personal Classes</p>
          <p className="text-lg font-medium">&#8377; 2,000 Actual Cost</p>
          <p className=" text-muted-foreground">&#8377; 500 Discount</p>
          <p className=" text-muted-foreground">Access to all classes</p>
          <p className=" text-muted-foreground">Offline/Online classes</p>
          <Link className="w-full" href="/contact">
            <Button className="w-full" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="flex flex-col w-full justify-center items-center border  rounded-md shadow-md p-4 space-y-4 hover:bg-primary-foreground">
          <h1 className="text-lg font-medium">YOGA + MARMA</h1>
          <h1 className="text-4xl font-medium text-primary">
            &#8377; 2,000<span className="text-xs">/ Session</span>
          </h1>
          <p className="text-primary font-medium">For Personal Classes</p>
          <p className="text-lg font-medium">&#8377; 3,000 Actual Cost</p>
          <p className=" text-muted-foreground">&#8377; 1,000 Discount</p>
          <p className=" text-muted-foreground">Access to all classes</p>
          <p className=" text-muted-foreground">Offline/Online classes</p>
          <Link className="w-full" href="/contact">
            <Button className="w-full" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
