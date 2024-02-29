import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Nav = () => {
  const links = [
    { name: "Yoga", link: "/yoga" },
    { name: "Chess", link: "/chess" },
    { name: "Products", link: "/products" },
    { name: "Contact Us", link: "/contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 border-b-2 bg-white flex justify-between items-center p-4 md:px-8">
      <div className="flex items-center hover:text-primary font-bold gap-2 text-2xl cursor-pointer">
        <Image src="/logo.png" width={30} height={30} />
        <Link href="/">Aadhyantha Academy</Link>
      </div>
      {/* mobile */}
      <div className="cursor-pointer md:hidden">
        <Sheet>
          <SheetTrigger className="flex hover:text-primary">
            <FaBars size={24} />
          </SheetTrigger>
          <SheetContent className="w-64 border rounded bg-primary-foreground">
            <ul className="space-y-12 text-center py-8">
              {links.map((link) => (
                <li className=" font-medium hover:text-primary" key={link.name}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
      {/* desktop */}
      <div className="hidden md:block">
        <ul className="flex justify-between items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link className="font-medium hover:text-primary" href={link.link}>
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
