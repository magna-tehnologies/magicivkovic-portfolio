"use client";

import { Content } from "@/payload-types";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import HighlightCard from "../components/work-grid-components/highlight-card";
import { useCTA } from "../providers/cta-provider";
interface WorkGridSectionProps {
  text: string;
  projects: Content["workGridCards"];
}
export default function WorkGridSection({
  text,
  projects,
}: WorkGridSectionProps) {
  const { setState } = useCTA();
  const sectionRef = useRef<HTMLElement>(null);

  const inView = useInView(sectionRef, {
    amount: 0,
  });

  useEffect(() => {
    if (inView) {
      setState("default");
    }
  }, [inView, setState]);

  const objectProjects = projects.filter((p) => typeof p !== "number");

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-12 custom-container pt-[200px]"
    >
      <p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-black">
        {text}
      </p>

      <div className="grid md:grid-cols-2 gap-x-12 ">
        {objectProjects.map((project, index) => (
          <HighlightCard
            key={project.id + project.text}
            project={project.text}
            id={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
