'use client'

import { useRef, useEffect } from 'react'
import { useCTA } from '../providers/cta-provider'
import { useInView } from 'framer-motion'
import HighlightCard from '../components/work-grid-components/highlight-card'

export default function WorkGridSection() {
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

  const projects = [
    { id: '01', title: 'TikTok reklama za fitnes trenera' },
    { id: '02', title: 'Instagram Reels za modni brend' },
    { id: '03', title: 'YouTube vlog montaža' },
    { id: '04', title: 'Promo video za firmu' },
    { id: '05', title: 'Promo video za firmu' },
    { id: '06', title: 'Video reklama za e-commerce proizvode' },
    { id: '07', title: 'Podcast isečci za društvene mreže' },
    { id: '08', title: 'Reklama za restoran' },
  ]

  return (
    <section
      ref={sectionRef}
      className='flex flex-col gap-12 custom-container pt-[200px]'
    >
      <p className='text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-black'>
        Sa više od 3 godine iskustva u montaži, stotine preduzetnika i brendova
        angažovalo me da kreiram videe za društvene mreže i marketing kampanje.
      </p>

      <div className='grid md:grid-cols-2 gap-x-12 '>
        {projects.map((project) => (
          <HighlightCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
