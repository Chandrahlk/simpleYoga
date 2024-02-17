"use client";
import Link from "next/link";
import { GiMeditation } from "react-icons/gi";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 md:px-8 sticky top-0 z-50 border border-b-2 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center hover:text-primary font-bold ml-1 text-2xl cursor-pointer">
          {/* <GiMeditation className="h-8 w-8" /> */}
          {/* <Image src="/hero-logo.webp" width={30} height={30} /> */}
          <Link href="/">Aadhyantha Studio</Link>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleNavbar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul
          className={`md:flex md:items-center md:static absolute space-y-6 md:space-y-0 space-x-0 md:space-x-6 md:bg-white bg-muted-foreground left-0 md:pl-0 pl-6 w-full md:w-auto md:z-auto z-[-1] ${
            isOpen
              ? "top-20 transition-transform duration-500 ease-in"
              : "hidden"
          }`}
        >
          <li>
            <Link className="text-lg font-medium hover:text-primary" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-lg font-medium hover:text-primary"
              href="#why"
            >
              Why Yoga
            </Link>
          </li>
          <li>
            <Link
              className="text-lg font-medium hover:text-primary"
              href="#membership"
            >
              Membership
            </Link>
          </li>
          <li>
            <Link
              className="text-lg font-medium hover:text-primary"
              href="#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-lg font-medium hover:text-primary"
              href="#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
