"use client";

import { SITE_URL } from "@/config";
import { Content } from "@/payload-types";
import { motion, useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import ScalingVideo from "../components/scaling-video";
import { cn } from "../lib/cn";
import { useCTA } from "../providers/cta-provider";

interface VideoSectionProps {
  video: Content["secondFullScreenVideo"];
  headerText: Content["secondVideoText"];
  className?: string;
}

export default function VideoSection1({
  video,
  className,
  headerText,
}: VideoSectionProps) {
  const { setState } = useCTA();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  const inView = useInView(sectionRef, {
    margin: "0px 0px -99% 0px",
    amount: 0,
  });

  useEffect(() => {
    if (inView) setState("course");
  }, [inView, setState]);

  if (typeof video === "number" || typeof headerText === "number") return null;

  return (
    <motion.section
      ref={sectionRef}
      className={cn("flex flex-col h-[2000px] gap-10", className)}
    >
      <div className="w-full p">
        <p className="font-medium text-5xl md:text-8xl leading-none">
          {headerText}
        </p>
      </div>

      <div className="sticky top-0 h-[100vh]">
        <ScalingVideo
          src={SITE_URL + video?.url}
          className="h-full w-full content-container"
        />

        <div className="absolute right-0 w-2.5 bg-gray-300 rounded-full top-5 bottom-5">
          <motion.div
            className="absolute top-0 w-full h-full bg-black rounded-full origin-top"
            style={{ scaleY: scrollYProgress }}
          />
        </div>
      </div>
    </motion.section>
  );
}
