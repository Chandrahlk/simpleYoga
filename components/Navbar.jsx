"use client";
import Link from "next/link";
import { GiMeditation } from "react-icons/gi";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Nav = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="p-4 md:px-8 sticky top-0 z-50 border border-b-2 bg-white">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center hover:text-primary font-bold ml-1 text-2xl cursor-pointer">
          <GiMeditation className="h-8 w-8" />
          {/* <Image src="/hero-logo.webp" width={30} height={30} /> */}
          <Link href="/">Aadhyantha Studio</Link>
        </div>
        <div
          className="cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul
          className={`md:flex md:items-center absolute md:static space-y-6 md:space-y-0 space-x-0 md:space-x-6 md:pl-0 pl-8 bg-white md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in border-b-2 md:border-b-0 ${
            open ? "top-12 py-8" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className="text-lg font-medium hover:text-primary"
                href={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
