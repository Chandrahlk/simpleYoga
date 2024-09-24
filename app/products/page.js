import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div className="px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-medium text-center pt-12">
        Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center py-12">
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/yoga-mats.webp" width="150" height="300" />
          <h2 className="font-medium">Yoga Mats</h2>
          <Button>
            <Link target="_blank" href="https://wa.me/9491785809">
              Order on Whatsapp
            </Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/woodenBricks.webp" width="150" height="300" />
          <h2 className="font-medium">Wooden Bricks</h2>
          <Button>
            <Link target="_blank" href="https://wa.me/9491785809">
              Order on Whatsapp
            </Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/yogaBelts.webp" width="150" height="300" />
          <h2 className="font-medium">Yoga Belt</h2>
          <Button>
            <Link target="_blank" href="https://wa.me/9491785809">
              Order on Whatsapp
            </Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image
            className="rotate-0"
            src="/yogaRopes.webp"
            width="150"
            height="300"
          />
          <h2 className="font-medium">Yoga Ropes</h2>
          <Button>
            <Link target="_blank" href="https://wa.me/9491785809">
              Order on Whatsapp
            </Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/pChessBoard.webp" width="300" height="300" />
          <h2 className="font-medium">Professional ChessBoard</h2>
          <Button>
            <Link target="_blank" href="https://wa.me/9491785809">
              Order on Whatsapp
            </Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/chessClock.webp" width="250" height="300" />
          <h2 className="font-medium">Chess Clock</h2>
          <Button>
            <Link target="_blank" href="https://wa.me/9491785809">
              Order on Whatsapp
            </Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/taratakaStand.webp" width="250" height="300" />
          <h2 className="font-medium">Tarataka Stand</h2>
          <Button>
            <Link target="_blank" href="https://wa.me/9491785809">
              Order on Whatsapp
            </Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/sutraNeti.webp" width="250" height="300" />
          <h2 className="font-medium">Sutra Neti</h2>
          <Button>
            <Link target="_blank" href="https://wa.me/9491785809">
              Order on Whatsapp
            </Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/jalaNeetiPot.webp" width="250" height="300" />
          <h2 className="font-medium">Jala Neeti Pot</h2>
          <Button>
            <Link target="_blank" href="https://wa.me/9491785809">
              Order on Whatsapp
            </Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/eyeWashingCups.webp" width="250" height="300" />
          <h2 className="font-medium">Eye Washing Cups</h2>
          <Button>
            <Link target="_blank" href="https://wa.me/9491785809">
              Order on Whatsapp
            </Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center align-middle gap-4 bg-primary-foreground border rounded-lg shadow p-4">
          <Image src="/agniHotraKit.webp" width="250" height="300" />
          <h2 className="font-medium">Agni Hotra Kit</h2>
          <Button>
            <Link target="_blank" href="https://wa.me/9491785809">
              Order on Whatsapp
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
