"use client";

import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface TeacherMember {
  name: string;
  role: string;
  img: string;
}

interface TeacherCarouselProps {
  members: TeacherMember[];
  className?: string;
}

const roleLabel = (role: string) => {
  if (role.includes(":")) return role.split(" : ")[1];
  return role;
};

const roleType = (role: string) => {
  if (role.includes(":")) return role.split(" : ")[0];
  return null;
};

export function TeacherCarousel({ members, className }: TeacherCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  return (
    <div className={cn("relative w-full", className)}>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ loop: true, slidesToScroll: 1 }}
        plugins={[
          Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true }),
        ]}
      >
        <CarouselContent className="flex h-[460px] w-full">
          {members.map((member, index) => (
            <CarouselItem
              key={index}
              className="relative flex h-[82%] w-full basis-[80%] items-center justify-center sm:basis-[50%] md:basis-[36%] lg:basis-[28%] xl:basis-[23%]"
            >
              <motion.div
                initial={false}
                animate={{
                  clipPath:
                    current !== index
                      ? "inset(12% 0 12% 0 round 1.5rem)"
                      : "inset(0 0 0 0 round 1.5rem)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-full w-full overflow-hidden rounded-3xl shadow-lg"
              >
                <div className="relative h-full w-full">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full scale-105 object-cover object-center"
                  />
                  <motion.div 
                    initial={false}
                    animate={{ bottom: current === index ? "0%" : "12%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute top-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" 
                  />

                  <motion.div 
                    initial={false}
                    animate={{ 
                      bottom: current === index ? "0%" : "12%",
                      opacity: current === index ? 1 : 0.6
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute left-0 right-0 p-4 text-white"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-white/70 mb-1">
                      {roleType(member.role)}
                    </p>
                    <h3 className="text-base font-bold leading-tight">
                      {member.name}
                    </h3>
                    <span className="mt-1 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm">
                      {roleLabel(member.role)}
                    </span>
                  </motion.div>
                </div>
              </motion.div>


            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute -bottom-2 left-0 right-0 flex items-center justify-between px-2 pt-10">
          <button
            aria-label="Previous slide"
            onClick={() => api?.scrollPrev()}
            className="rounded-full bg-slate-900/10 p-2 transition hover:bg-slate-900/20"
          >
            <ChevronLeft className="size-5 text-slate-600" />
          </button>

          <div className="flex items-center gap-1.5">
            {members.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Slide ${index + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  current === index ? "w-5 bg-primary" : "w-1.5 bg-slate-300"
                )}
              />
            ))}
          </div>

          <button
            aria-label="Next slide"
            onClick={() => api?.scrollNext()}
            className="rounded-full bg-slate-900/10 p-2 transition hover:bg-slate-900/20"
          >
            <ChevronRight className="size-5 text-slate-600" />
          </button>
        </div>
      </Carousel>
    </div>
  );
}
