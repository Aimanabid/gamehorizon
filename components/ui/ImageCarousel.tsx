"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.max(0, Math.min(images.length - 1, index));
    const slide = track.children[i] as HTMLElement;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const slideStep = (track.children[1] as HTMLElement | undefined)?.offsetLeft ?? track.clientWidth;
    const step = slideStep - (track.children[0] as HTMLElement).offsetLeft;
    setActive(Math.min(images.length - 1, Math.round(track.scrollLeft / step)));
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`relative flex-none w-[84%] aspect-video snap-start rounded-2xl overflow-hidden border border-brand-border/40 transition-opacity duration-300 ${
              i === active ? "opacity-100" : "opacity-40"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
        {/* trailing space so the last slide can snap to the left edge */}
        <div className="flex-none w-[16%] -ml-4" aria-hidden />
      </div>

      {active > 0 && (
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => goTo(active - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-brand-primary transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {active < images.length - 1 && (
        <button
          type="button"
          aria-label="Next image"
          onClick={() => goTo(active + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-brand-primary transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
