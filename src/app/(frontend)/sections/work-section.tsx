"use client";

import { Media } from "@/payload-types";
import VideoFrame from "../components/WorkSectionComponents/video-frame";

import { useEffect, useRef } from "react";

interface WorkSectionProps {
  videos: Media[];
  siteUrl: string;
}

export default function WorkSection({ videos, siteUrl }: WorkSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      scrollContainerRef.current.scrollLeft = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="h-[200vh] ">
      <div
        ref={scrollContainerRef}
        className="px-[40px] gap-[50px] sticky top-0 h-screen flex overflow-x-auto"
      >
        {videos.map((video) => (
          <VideoFrame key={video.id} video={video} siteUrl={siteUrl} />
        ))}
      </div>
    </section>
  );
}
