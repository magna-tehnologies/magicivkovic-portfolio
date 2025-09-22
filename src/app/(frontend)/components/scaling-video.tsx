"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScalingVideoProps {
  src: string;
  className?: string;
}

export default function ScalingVideo({ src, className }: ScalingVideoProps) {
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
        muted
        src={src}
      ></motion.video>
    </div>
  );
}
