"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import VideoSEO from "./seo-video";

interface ScalingVideoProps {
  src: string;
  className?: string;
  alt: string;
}

export default function ScalingVideo({
  src,
  className,
  alt,
}: ScalingVideoProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div ref={targetRef} className={className}>
      <motion.video
        style={{
          scale,
        }}
        className="h-full w-full object-cover rounded-3xl"
        autoPlay
        loop
        muted
        src={src}
      />
      <VideoSEO name={alt} description={alt} contentUrl={src} />
    </div>
  );
}
