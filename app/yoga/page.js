import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Trainers from "@/components/Trainers";

const imageGallery = [
  "/yoga/13.jpeg",
  "/yoga/15.jpeg",
  "/yoga/16.jpeg",
  "/yoga/18.jpeg",
  "/yoga/19.jpeg",
  "/yoga/22.jpeg",
  "/yoga/23.jpeg",
  "/yoga/28.jpeg",
  "/yoga/34.jpeg",
  "/yoga/36.jpeg",
  "/yoga/about.jpeg",
  "/yoga/founder.jpeg",
];

const reviews = [
  {
    name: "Toni Monge",
    place: "Taiwan",
    content:
      "Great yoga class! Mixed yoga and meditation, Teacher Suman is very knowledgeable! Happy to have joined.",
  },
  {
    name: "Aswini koduri",
    place: "Michigan USA",
    content:
      "I am the beginner in yoga and feel fresh and relaxed after the class.Suman is the excellence instructor for the morning Online sessions. Yoga Asanas helped for my head back pain.",
  },
  ,
  {
    name: "Girija Sharma",
    place: "London, UK",
    content:
      "It was wonderful doing yoga with Suman Sir!!! His systematic and smooth way of teaching yoga helped me improving myself. It was a complete package with Asanas, Surya Namaskara and Pranayama. It was a pleasant journey throughout Suman Sir.",
  },
  {
    name: "Seina Yamanaka",
    place: "Japan,Tokyo",
    content:
      "Thank you for amazing morning class!! Class was based on Hatha and he is good at supporting us for deeper posture. Above all, he is really nice person and friendly. I will go back to his class when I come back to Bangalore!!",
  },
  {
    name: "Ashok Srinivasan",
    place: "Bangalore",
    content:
      "Suman has been a great source of inspiration for me .. The way he had trained me to do my Himalaya (mayali pass) trek is truly commendable and to this day it has been helping me and my wife lead a healthy lifestyle .. He does not stuck only in teaching you the asana’s but goes in length in explaining the reason and the logic behind it",
  },
  {
    name: "Sowmya S (Youtuber)",
    place: "Bangalore",
    content:
      "Very good positive vibe in the class with meditation, pranayama and yoga. Suman sir teaches Very well and tells the benefits of each Asanas and teaches the breathing techniques required for each asana so that we reap the full benefit of the asana. Thank you sir!",
  },
  {
    name: "Chanda Rawat",
    place: "Gurugram, Haryana",
    content:
      "The daily Asanas were well planned to take care of our body and mind completely. Suman Sir always gave variations according to our strength and flexibility which helped me a lot. I had a nice experience practicing yoga with Aadhyantha",
  },
  {
    name: "Monika Tara Yeluri",
    place: "Rajahmundry, AP",
    content:
      "Yoga Instructor Suman garu has a lot of patience and make us more informative about the Asanas we do and brings us the lot of positivity.",
  },
  {
    name: "Santosh Kumar",
    place: "Mangalore, Karnataka",
    content:
      "Suman sir is a very good yoga teacher his teaching methodology is unique and very useful for today's stress and lifestyle thank you very much sir",
  },
];

export default function page() {
  return (
    <div>
      <h1 className="px-4 md:px-8 pt-12 text-3xl md:text-4xl text-center font-medium">
        Yoga
      </h1>
      <div className="px-4 md:px-8 pt-12 pb-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8">
          <div className="flex justify-center items-center">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-5/6"
            >
              <CarouselContent className="flex">
                {imageGallery.map((url, index) => (
                  <CarouselItem key={index} className="grow">
                    <div className="p-1 border rounded-xl shadow aspect-auto flex justify-center">
                      <Image src={url} height="150" width="500" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex flex-col justify-between align-middle gap-6 text-center md:text-left">
            <p className="text-muted-foreground">
              Note: Please choose your preferred time avalibility. You have the
              flexibility to attend multiple classes in a day and rearrange your
              schedule as needed!
            </p>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Avaliable Plans</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="sm">
                  <Link href="#pricing">1 Month</Link>
                </Button>
                <Button size="sm">
                  <Link href="#pricing">3 Month</Link>
                </Button>
                <Button size="sm">
                  <Link href="#pricing">6 Month</Link>
                </Button>
                <Button size="sm">
                  <Link href="#pricing">12 Month</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">
                Weekdays Timings (Monday - Friday)
              </h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="sm">5AM to 6AM</Button>
                <Button size="sm">6AM to 7AM</Button>
                <Button size="sm">7AM to 8AM</Button>
                <Button size="sm">5PM to 6PM</Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">
                Weekends Timings (Saturday & Sunday)
              </h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="sm">5AM to 6AM</Button>
                <Button size="sm">6AM to 7AM</Button>
                <Button size="sm">7AM to 8:30AM</Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Avaliable Modes</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="sm">At The Centre</Button>
                <Button size="sm">Online</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 py-12 space-y-8 bg-primary-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8">
          <div className="space-y-4 border p-4 rounded-lg shadow">
            <h1 className="text-3xl md:text-4xl md:text-left text-center font-medium py-4">
              About Yoga
            </h1>
            <p className="text-muted-foreground">
              Yoga is a holistic practice that unites the mind, body, and spirit
              through a combination of physical postures, breathing exercises,
              and meditation. It offers a myriad of benefits, including improved
              flexibility, strength, and balance, as well as stress reduction
              and mental clarity.
            </p>
            <p className="text-muted-foreground">
              At our center, we embrace the essence of yoga by offering a
              variety of classes tailored to meet the needs of practitioners at
              every level. Whether you're a beginner or an experienced yogi, our
              classes provide a nurturing environment for personal growth and
              exploration.
            </p>
            <p className="text-muted-foreground">
              Under the guidance of our experienced instructors, you'll embark
              on a journey of self-discovery, cultivating mindfulness and inner
              peace. Our serene surroundings, nestled amidst nature's beauty,
              further enhance the transformative power of your practice.
            </p>
            <p className="text-muted-foreground">
              Join us as we delve into the ancient wisdom of yoga, fostering
              physical well-being, emotional harmony, and spiritual awakening.
              Experience the profound benefits of yoga and embark on a path to
              holistic health and wellness.
            </p>
          </div>
          <div className="flex flex-col justify-between align-middle gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="font-medium md:text-left text-center text-primary">
                REGULAR YOGA CLASSES
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-4">
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Yoga Asanas
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Pranayama
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Meditation
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Yoga Nidra
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Kriyas
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Pregnancy Yoga
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium md:text-left text-center text-primary">
                THERAPIES / HEALING
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-4">
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Yoga Therapy
                </h1>

                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Nadi pariksha
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Marma Chikista
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Pranic Healing
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Ayurveda Fundamentals
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Water & Breath Therapy
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium md:text-left text-center text-primary">
                WORKSHOP / CERTIFICATES
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-4">
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Pranic Healing
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Marma healing
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Yoga Foundation
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Intuition/Sixth Sense Yoga
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Advance Yoga Asanas
                </h1>
                <h1 className="text-sm text-center border rounded-lg shadow-md p-4 hover:bg-primary hover:text-white">
                  Yoga Teacher Training
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-12 bg-primary-foreground">
        <div className="flex justify-center w-full">
          <Image
            className="border rounded-md shadow-md"
            src="/yoga/13.jpeg"
            width={500}
            height={250}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center md:items-start space-y-2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-medium pb-2">
            About Intuition Yoga
          </h1>
          <h4 className="text-muted-foreground">
            Unlock your child's hidden potential with Intuition Yoga, also known
            as Divya Drishti Yoga or Sixth Sense Training, at Aadhyantha Yoga
            Studio. This groundbreaking practice empowers children to perform
            incredible feats such as reading, writing, walking, riding, and
            playing—all while blindfolded. By enhancing their intuitive
            abilities, children learn to navigate their surroundings with
            remarkable confidence and insight.
          </h4>
          <h4 className="font-medium text-lg">Key Benefits:</h4>
          <li className="text-muted-foreground">
            Boosts Confidence: Cultivates self-assurance and courage in daily
            activities.
          </li>
          <li className="text-muted-foreground">
            Promotes Self-Love: Encourages a positive self-image and emotional
            well-being.
          </li>
          <li className="text-muted-foreground">
            Enhances Concentration and Focus: Sharpens attention span and mental
            clarity.
          </li>
          <li className="text-muted-foreground">
            Strengthens Memory Power: Improves the ability to retain and recall
            information.
          </li>
          <li className="text-muted-foreground">
            Connects with Consciousness: Fosters a deeper connection with one’s
            inner self and the universe.
          </li>
          <li className="text-muted-foreground">
            Empowers Decision-Making: Enhances the ability to make sound
            decisions intuitively.
          </li>
          <li className="text-muted-foreground">
            Increases Emotional Intelligence: Helps children understand and
            manage their emotions better.
          </li>
          <li className="text-muted-foreground">
            Encourages Creativity: Stimulates imaginative thinking and creative
            expression.
          </li>
        </div>
      </div>
      <Pricing />
      <Trainers />
      <div className="px-4 md:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-medium text-center pb-12">
          Reviews
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <Reviews
              key={index}
              name={review.name}
              place={review.place}
              content={review.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
