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
        <div key={project.id} className="flex flex-col ">
          <div className="flex items-center gap-x-[25px]  py-[50px] ">
            <span className="text-[32px] font-light text-stone-500">
              {project.id}
            </span>
            <span className="text-[24px] font-bold text-black mr-auto">
              {project.title}
            </span>
          </div>
          <div className="h-px w-full bg-stone-200" />
        </div>
      ))}
    </>
  );
}
