import React from "react";
import { Button } from "@/components/ui/button";

export default function Membership() {
  return (
    <div className="px-4 md:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-medium text-center">Pricing</h1>
      <div className="flex flex-col md:flex-row justify-center items-center text-center mt-8">
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-4 hover:bg-slate-100">
          <h1 className="text-lg font-medium">1 MONTH</h1>
          <h1 className="text-4xl font-medium text-primary">&#8377; 2000</h1>
          <p className=" text-muted-foreground">For 1 Month</p>
          <p className="text-lg font-medium">&#8377; 2,000 Actual Cost</p>
          <p className=" text-muted-foreground">&#8377; 0 Discount</p>
          <p className=" text-muted-foreground"> Access to all classes</p>
          <p className=" text-muted-foreground">Fitness orientation</p>
          <Button className="m-4 w-full" size="lg">
            Join Now
          </Button>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-4 hover:bg-slate-100">
          <h1 className="text-lg font-medium">3 MONTHS</h1>
          <h1 className="text-4xl font-medium text-primary">&#8377; 5000</h1>
          <p className="  text-muted-foreground">For 3 Month</p>
          <p className="text-lg font-medium">&#8377; 6,000 Actual Cost</p>
          <p className=" text-muted-foreground">&#8377; 1,000 Discount</p>
          <p className=" text-muted-foreground">Access to all classes</p>
          <p className=" text-muted-foreground">Fitness orientation</p>
          <Button className="m-4 w-full" size="lg">
            Join Now
          </Button>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-4 hover:bg-slate-100">
          <h1 className="text-lg font-medium">6 MONTHS</h1>
          <h1 className="text-4xl font-medium text-primary">&#8377; 8,000</h1>
          <p className="  text-muted-foreground">For 6 Months</p>
          <p className="text-lg font-medium">&#8377; 12,000 Actual Cost</p>
          <p className=" text-muted-foreground">&#8377; 4,000 Discount</p>
          <p className=" text-muted-foreground">Access to all classes</p>
          <p className=" text-muted-foreground">Fitness orientation</p>
          <Button className="m-4 w-full" size="lg">
            Join Now
          </Button>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-4 hover:bg-slate-100">
          <h1 className="text-lg font-medium">12 MONTHS</h1>
          <h1 className="text-4xl font-medium text-primary">&#8377; 14,000</h1>
          <p className="  text-muted-foreground">For 1 Year</p>
          <p className="text-lg font-medium">&#8377; 24,000 Actual Cost</p>
          <p className=" text-muted-foreground">&#8377; 10,000 Discount</p>
          <p className=" text-muted-foreground">Access to all classes</p>
          <p className=" text-muted-foreground">Fitness orientation</p>
          <Button className="m-4 w-full" size="lg">
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
}
