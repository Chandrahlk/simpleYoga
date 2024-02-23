import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div className="min-h-screen px-4 md:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-medium pb-16 text-center">
        Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/yoga-mats.webp" width="150" height="300" />
          <h2 className="font-medium">Yoga Mats</h2>
          <Button>
            <Link href="https://wa.me/9491785809">Order on Whatsapp</Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/yoga-bricks.webp" width="150" height="300" />
          <h2 className="font-medium">Yoga Bricks</h2>
          <Button>
            <Link href="https://wa.me/9491785809">Order on Whatsapp</Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/yoga-belts.webp" width="150" height="300" />
          <h2 className="font-medium">Yoga D Ring Belt</h2>
          <Button>
            <Link href="https://wa.me/9491785809">Order on Whatsapp</Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image
            className="rotate-0"
            src="/yoga-blocks.webp"
            width="150"
            height="300"
          />
          <h2 className="font-medium">Yoga Blocks</h2>
          <Button>
            <Link href="https://wa.me/9491785809">Order on Whatsapp</Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/chess-board.webp" width="300" height="300" />
          <h2 className="font-medium">ChessBoard</h2>
          <Button>
            <Link href="https://wa.me/9491785809">Order on Whatsapp</Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/chess-clock.webp" width="250" height="300" />
          <h2 className="font-medium">Digital Chess Clock</h2>
          <Button>
            <Link href="https://wa.me/9491785809">Order on Whatsapp</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
