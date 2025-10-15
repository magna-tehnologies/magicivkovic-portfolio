'use client'

import { Content } from '@/payload-types'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import ScalingVideo from '../components/scaling-video'
import { cn } from '../lib/cn'
import { useCTA } from '../providers/cta-provider'

interface VideoSectionProps {
  video: Content['secondFullScreenVideo']
  headerText: Content['secondVideoText']
  className?: string
}

export default function VideoSection1({
  video,
  className,
  headerText,
}: VideoSectionProps) {
  const { setState } = useCTA()
  const sectionRef = useRef<HTMLElement>(null)

  const inView = useInView(sectionRef, {
    margin: '0px 0px -99% 0px',
    amount: 0,
  })

  useEffect(() => {
    if (inView) setState('course')
  }, [inView, setState])

  if (typeof video === 'number' || typeof headerText === 'number') return null

  return (
    <motion.section
      ref={sectionRef}
      className={cn('flex flex-col h-[2000px] gap-10', className)}
    >
      <div className='p w-full'>
        <p className='font-medium text-5xl md:text-8xl leading-none'>
          {headerText}
        </p>
      </div>
      <ScalingVideo
        src={video?.url as string}
        className='h-[100vh] sticky top-0 content-container'
      />
    </motion.section>
  )
}
