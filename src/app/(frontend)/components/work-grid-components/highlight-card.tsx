interface Project {
  id: string;
  title: string;
}

interface HighlightCardProps {
  projects: Project[];
}

export default function HighlightCard({ projects }: HighlightCardProps) {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col gap-12">
          <div className="flex items-center gap-6 ">
            <span className="text-[32px] font-light text-stone-500 leading-[51.2px] font-poppins">
              {project.id}
            </span>
            <span className="text-[24px] font-medium text-black leading-[38.4px] font-poppins">
              {project.title}
            </span>
          </div>
          <div className="h-px w-full bg-stone-200" />
        </div>
      ))}
    </>
  );
}
