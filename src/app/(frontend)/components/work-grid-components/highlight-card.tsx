interface Project {
  id: string
  title: string
}

interface HighlightCardProps {
  project: Project
}

export default function HighlightCard({ project }: HighlightCardProps) {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-x-[25px] py-[50px]'>
        <span className='text-[32px] font-light text-stone-500'>
          {project.id}
        </span>
        <span className='text-[24px] font-medium text-black mr-auto'>
          {project.title}
        </span>
      </div>
      <div className='h-px w-full bg-stone-200' />
    </div>
  )
}
