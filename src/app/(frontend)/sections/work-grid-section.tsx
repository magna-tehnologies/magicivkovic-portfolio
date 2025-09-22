import HighlightCard from "../components/work-grid-components/highlight-card";

interface WorkGridSectionProps {
  text: string;
  projects: string[];
}

export default function WorkGridSection({
  text,
  projects,
}: WorkGridSectionProps) {
  return (
    <section className="flex flex-col gap-12 custom-container">
      <p className="text-[64px] font-medium leading-[80px] text-black">
        {text}
      </p>

      <div className="grid grid-cols-2 gap-x-12 ">
        {projects.map((project, index) => (
          <HighlightCard
            key={project + index}
            project={project}
            id={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
