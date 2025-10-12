"use client";

import { SITE_URL } from "@/config";
import { Content } from "@/payload-types";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ScalingVideo from "../components/scaling-video";
import { cn } from "../lib/cn";

interface VideoSectionProps {
  video: Content["fullScreenVideo"];
  className?: string;
}

export default function VideoSection({ video, className }: VideoSectionProps) {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  if (typeof video === "number") return null;

  return (
    <section ref={targetRef} className={cn("h-[2000px] relative", className)}>
      <div className="sticky top-0 h-[100vh]">
        <ScalingVideo
          alt={video ? video.alt : "alt"}
          src={SITE_URL + video?.url}
          className="h-full w-full content-container"
        />

        <div
          className="absolute right-0 w-2.5 bg-gray-300 rounded-full"
          style={{ top: "20px", bottom: "20px" }}
        >
          <motion.div
            className="absolute top-0 w-full h-full bg-black rounded-full origin-top"
            style={{ scaleY: scrollYProgress }}
          />
        </div>
      </div>
    </section>
  );
}
