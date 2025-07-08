"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface AppItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  category: string;
}

export interface AppShowcaseProps {
  title?: string;
  description?: string;
  items?: AppItem[];
}

const appData: AppItem[] = [
  {
    id: "obed-ru",
    title: "Obed.ru",
    description: "Revolutionary food delivery application serving 5000+ restaurants across Russia. Features real-time order tracking, smart recommendation engine, and seamless payment integration for millions of users.",
    href: "https://play.google.com/store/apps/details?hl=en&id=ru.obed.client",
    image: "/apps/1.png",
    category: "Food Delivery"
  },
  {
    id: "bearable",
    title: "Bearable: Mood & Symptom Tracker",
    description: "Comprehensive health tracking application helping users monitor symptoms, moods, and treatments. Features AI-powered insights, customizable tracking, and detailed analytics for better health management.",
    href: "https://apps.apple.com/us/app/bearable-symptom-tracker/id1482581097",
    image: "/apps/2.png",
    category: "Health & Wellness"
  },
  {
    id: "journi-blog",
    title: "Journi Blog - Travel Tracker",
    description: "Beautiful travel journaling app that automatically creates stunning travel blogs. Features GPS tracking, photo organization, and social sharing to preserve your travel memories forever.",
    href: "https://apps.apple.com/us/app/journi-blog-travel-tracker/id884030844",
    image: "/apps/3.png",
    category: "Travel & Lifestyle"
  },
  {
    id: "tunity",
    title: "Tunity: Hear Any Muted TV Live",
    description: "Innovative audio streaming app that lets you hear any muted TV in real-time. Advanced audio recognition technology connecting millions of users to live television audio worldwide.",
    href: "https://apps.apple.com/us/app/tunity-hear-any-muted-tv-live/id944230455",
    image: "/apps/4.png",
    category: "Entertainment"
  },
  {
    id: "delta-chat",
    title: "Delta Chat: Decentralized Messenger",
    description: "Privacy-focused messaging app using email infrastructure for decentralized communication. End-to-end encryption, no central servers, and complete user privacy protection.",
    href: "https://apps.apple.com/us/app/delta-chat/id1459523234",
    image: "/apps/5.png",
    category: "Communication"
  }
];

const AppShowcase = ({
  title = "Apps Portfolio",
  description = "Discover our award-winning mobile applications that have transformed user experiences across industries. From food delivery to health tracking, our apps serve thousands of users worldwide.",
  items = appData,
}: AppShowcaseProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id="portfolio" className="py-8 md:py-16 bg-white">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl text-black">
              {title}
            </h2>
            <p className="max-w-lg text-gray-600 text-lg">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto h-12 w-12"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto h-12 w-12"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[400px]"
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="group rounded-xl">
                  <div className="group relative h-full min-h-[32rem] max-w-full overflow-hidden rounded-2xl md:aspect-[5/4] lg:aspect-[4/5]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                         <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                       <div className="mb-2 text-sm font-medium text-white/80 uppercase tracking-wide">
                         {item.category}
                       </div>
                       <div className="mb-6 text-2xl font-bold md:mb-8 lg:text-3xl">
                         {item.title}
                       </div>
                       <div className="flex items-center gap-4">
                         <img 
                           src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                           alt="Download on App Store"
                           className="h-10 w-auto transition-transform group-hover:scale-105"
                         />
                         <img 
                           src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                           alt="Get it on Google Play"
                           className="h-10 w-auto transition-transform group-hover:scale-105"
                         />
                       </div>
                     </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-black" : "bg-black/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { AppShowcase }; 