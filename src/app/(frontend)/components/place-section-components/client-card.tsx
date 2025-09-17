interface Client {
  place: string;
  title: string;
}

interface HighlightCardProps {
  projects: Client[];
}

export default function ClientCard({ projects }: HighlightCardProps) {
  return (
    <>
      {projects.map((project) => (
        <div key={project.title} className="flex flex-col ">
          <div className="flex items-center gap-x-[25px]  py-[50px] ">
            <span className="text-[32px] font-medium text-stone-600  font-poppins ">
              {project.title}
            </span>
            <span className="text-[24px] font-light text-stone-500  font-poppins ml-auto">
              {project.place}
            </span>
          </div>
          <div className="h-px w-full bg-stone-200" />
        </div>
      ))}
    </>
  );
}
