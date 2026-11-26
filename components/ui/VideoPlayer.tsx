"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

const iframeAllow =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

function embedUrl(videoId: string) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`;
}

function PlayButton({ size = "lg" }: { size?: "sm" | "lg" }) {
  const dims = size === "lg" ? "w-16 h-16 sm:w-20 sm:h-20" : "w-10 h-10";
  const icon = size === "lg" ? "w-7 h-7 sm:w-9 sm:h-9" : "w-5 h-5";
  return (
    <span
      className={`${dims} rounded-full bg-brand-primary/90 text-white flex items-center justify-center shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-primary`}
    >
      <Play className={`${icon} fill-white ml-0.5`} />
    </span>
  );
}

/**
 * Click-to-play YouTube player. Shows our own thumbnail and only loads the
 * YouTube iframe (with autoplay) after the visitor clicks, so the page stays fast.
 * The thumbnail is landscape. A Short is 9:16 and is centred in the same box;
 * pass `landscape` for a regular 16:9 video, which fills it.
 */
export default function VideoPlayer({
  videoId,
  thumbnail,
  title,
  className = "",
  landscape = false,
}: {
  videoId: string;
  thumbnail: string;
  title: string;
  className?: string;
  landscape?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative w-full aspect-video overflow-hidden rounded-2xl border border-brand-border/40 shadow-glow-sm bg-black ${className}`}
    >
      {playing ? (
        <iframe
          src={embedUrl(videoId)}
          title={title}
          allow={iframeAllow}
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className={
            landscape
              ? "absolute inset-0 w-full h-full border-0"
              : "absolute inset-y-0 left-1/2 -translate-x-1/2 h-full aspect-[9/16] border-0"
          }
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 w-full h-full cursor-pointer"
        >
          <Image
            src={thumbnail}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <PlayButton />
          </span>
          <span className="absolute left-4 bottom-3 text-xs sm:text-sm font-semibold text-white drop-shadow">
            Watch the intro
          </span>
        </button>
      )}
    </div>
  );
}

/** Small "Watch intro" button that opens the video in a modal, without leaving the page. */
export function VideoModalButton({
  videoId,
  title,
  className = "",
  landscape = false,
}: {
  videoId: string;
  title: string;
  className?: string;
  landscape?: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-1.5 text-xs font-semibold font-display tracking-wider text-white bg-brand-primary/20 border border-brand-primary/40 rounded-full px-3 py-1 hover:bg-brand-primary/40 transition-colors ${className}`}
      >
        <Play className="w-3 h-3 fill-white" /> WATCH
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative rounded-2xl overflow-hidden bg-black border border-brand-border/40 ${
              landscape ? "w-full max-w-5xl aspect-video" : "h-[85vh] max-h-[720px] aspect-[9/16] max-w-full"
            }`}
          >
            <iframe
              src={embedUrl(videoId)}
              title={title}
              allow={iframeAllow}
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full border-0"
            />
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
}
