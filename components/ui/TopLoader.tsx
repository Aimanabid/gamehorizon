"use client";

import NextTopLoader from "nextjs-toploader";

export default function TopLoader() {
  return (
    <NextTopLoader
      color="linear-gradient(to right, #2979FF, #00E5FF)"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2979FF, 0 0 5px #00E5FF"
      zIndex={9999}
    />
  );
}
