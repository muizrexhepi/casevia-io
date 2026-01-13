"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string; // Ensure this is a valid path string
  category: string;
};

interface ProjectCarouselProps {
  items: CaseStudy[];
}

export const ProjectCarousel = ({ items }: ProjectCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true, // Allows "flick" scrolling like native iOS
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Initial check
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group">
      {/* Carousel Viewport */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y pl-6 md:pl-12 py-10 gap-6 md:gap-10">
          {items.map((project, index) => (
            <Link
              key={index}
              href={`/work/${project.slug}`}
              className="relative flex-none w-[85vw] md:w-[45vw] lg:w-[30vw] min-w-0"
            >
              <div className="group/card relative h-[400px] md:h-[550px] w-full overflow-hidden rounded-[2rem] bg-gray-100 transition-transform duration-500 hover:-translate-y-2">
                {/* Image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  //   fill
                  className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#221221]/90 via-[#221221]/20 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white flex flex-col gap-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D1326E] mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-normal tracking-tighter leading-none">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base line-clamp-2 max-w-[90%]">
                    {project.subtitle}
                  </p>
                </div>

                {/* Hover Button */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="text-white" size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Buttons (Desktop Only usually, but good to have) */}
      <div className="hidden md:flex justify-end gap-4 px-12 mt-4">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="w-14 h-14 rounded-full border border-[#221221]/10 flex items-center justify-center hover:bg-[#D1326E] hover:border-[#D1326E] hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="w-14 h-14 rounded-full border border-[#221221]/10 flex items-center justify-center hover:bg-[#D1326E] hover:border-[#D1326E] hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};
