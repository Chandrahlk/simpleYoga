import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="p-4 md:px-12 pt-16 bg-primary-foreground space-y-4">
      <h1 className="text-center text-lg font-semibold">Social Links</h1>
      <div className="flex justify-center items-center space-x-6">
        <Link href="/">
          <FaSquareInstagram className="h-6 w-6 hover:text-primary" />
        </Link>
        <Link href="/">
          <FaSquareYoutube className="h-6 w-6 hover:text-primary" />
        </Link>
        <Link href="/">
          <FaSquareXTwitter className="h-6 w-6 hover:text-primary" />
        </Link>
      </div>
      <p className="text-muted-foreground text-sm text-center">
        2024 © All rights reserved by Aadhyantha Studio
      </p>
    </div>
  );
}
