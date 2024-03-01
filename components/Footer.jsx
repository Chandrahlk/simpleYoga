import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-4 md:px-8 pt-8 pb-2 bg-primary-foreground space-y-4 border-t-2">
      <h1 className="text-center text-lg font-semibold">Social Links</h1>
      <div className="flex justify-center items-center space-x-6">
        <Link
          target="_blank"
          href="https://instagram.com/aadhyantha_yoga?igshid=MzNlNGNkZWQ4M
g"
        >
          <FaSquareInstagram
            size={30}
            className="text-primary hover:text-primary/80"
          />
        </Link>
        <Link target="_blank" href="https://wa.me/9491785809">
          <FaSquareWhatsapp
            size={30}
            className="text-primary hover:text-primary/80"
          />
        </Link>
      </div>
      <p className="text-muted-foreground text-sm text-center">
        2024 © All rights reserved by Aadhyantha Academy
      </p>
    </div>
  );
}
