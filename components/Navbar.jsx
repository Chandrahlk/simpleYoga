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
      <div className=" mx-auto flex justify-between items-center">
        <div className="flex items-center hover:text-primary">
          <GiMeditation className="h-8 w-8" />
          <Link href="/" passHref>
            <div className="font-bold ml-1 text-xl cursor-pointer">
              SimpleYOGA
            </div>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <li className="font-meduim hover:text-primary">
              <Link href="/">Home</Link>
            </li>
            <li className="font-meduim hover:text-primary">
              <Link href="#why">Why Yoga</Link>
            </li>
            <li className="font-meduim hover:text-primary">
              <Link href="#membership">Membership</Link>
            </li>
            <li className="font-meduim hover:text-primary">
              <Link href="#about">About</Link>
            </li>
            <li className="font-meduim hover:text-primary">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 justify-center items-center align-middle">
            <li>
              <Link href="/">
                <div className="text-md cursor-pointer">Home</div>
              </Link>
            </li>
            <li>
              <Link href="#why">
                <div className="text-md cursor-pointer">Why Yoga</div>
              </Link>
            </li>
            <li>
              <Link href="#membership">
                <div className="text-md cursor-pointer">Membership</div>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <div className="text-md cursor-pointer">About</div>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <div className="text-md cursor-pointer">Contact</div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
