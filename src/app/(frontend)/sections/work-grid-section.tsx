'use client'

import { useRef, useEffect } from 'react'
import { useCTA } from '../providers/cta-provider'
import { useInView } from 'framer-motion'
import HighlightCard from '../components/work-grid-components/highlight-card'

interface WorkGridSectionProps {
  text: string
  projects: string[]
}

export default function WorkGridSection({
  text,
  projects,
}: WorkGridSectionProps) {
  const { setState } = useCTA()
  const sectionRef = useRef<HTMLElement>(null)

  const inView = useInView(sectionRef, {
    amount: 0,
  })

  useEffect(() => {
    if (inView) {
      setState('default')
    }
  }, [inView, setState])

  return (
    <section
      ref={sectionRef}
      className='flex flex-col gap-12 custom-container pt-[200px]'
    >
      <p className='text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-black'>
        {text}
      </p>

      <div className='grid md:grid-cols-2 gap-x-12 '>
        {projects.map((project, index) => (
          <HighlightCard
            key={project + index}
            project={project}
            id={index + 1}
          />
        ))}
      </div>
    </section>
  )
}
