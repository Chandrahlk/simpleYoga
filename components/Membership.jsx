import React from "react";
import { Button } from "@/components/ui/button";

export default function Membership() {
  return (
    <div
      id="membership"
      className="p-4 md:px-12 my-16 md:my-10 py-16 bg-primary-foreground"
    >
      <h1 className="text-3xl md:text-4xl font-medium text-center">
        Membership Cards
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center text-center my-8">
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-4 hover:bg-slate-100">
          <h1 className="text-lg font-medium">YEARLY CARD</h1>
          <h1 className="text-4xl font-medium text-primary">$499</h1>
          <p className=" text-muted-foreground">For 1 Year</p>
          <p className="text-lg font-medium">Enjoy All The Features</p>
          <p className=" text-muted-foreground">Onetime access to all club</p>
          <p className=" text-muted-foreground">Group Trainer</p>
          <p className=" text-muted-foreground">Book a group class</p>
          <p className=" text-muted-foreground">Fitness orientation</p>
          <Button className="m-4 w-full" size="lg">
            Join Now
          </Button>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-4 hover:bg-slate-100">
          <h1 className="text-lg font-medium">MONTHLY CARD</h1>
          <h1 className="text-4xl font-medium text-primary">$99</h1>
          <p className="  text-muted-foreground">For 1 Month</p>
          <p className="text-lg font-medium">Enjoy All The Features</p>
          <p className=" text-muted-foreground">Group classes</p>
          <p className=" text-muted-foreground">Dicuss fitness goals</p>
          <p className=" text-muted-foreground">Group Trainer</p>
          <p className=" text-muted-foreground">Fitness orientation</p>
          <Button className="m-4 w-full" size="lg">
            Join Now
          </Button>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-4 hover:bg-slate-100">
          <h1 className="text-lg font-medium">WEEKLY CARD</h1>
          <h1 className="text-4xl font-medium text-primary">$19</h1>
          <p className="  text-muted-foreground">For 1 Week</p>
          <p className="text-lg font-medium">Enjoy All The Features</p>
          <p className=" text-muted-foreground">Access to yoga area</p>
          <p className=" text-muted-foreground">Group classes</p>
          <p className=" text-muted-foreground">Group Trainer</p>
          <p className=" text-muted-foreground">Fitness orientation</p>
          <Button className="m-4 w-full" size="lg">
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
}
