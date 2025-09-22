'use client'

import { useEffect, useRef } from 'react'
import { Media } from '@/payload-types'
import ScalingVideo from '../components/scaling-video'
import { SITE_URL } from '@/config'
import { useCTA } from '../providers/cta-provider'
import { motion, useInView } from 'framer-motion'
import { cn } from '../lib/cn'

interface VideoSection_2Props {
  video: Media
  className?: string
}

export default function VideoSection_1({
  video,
  className,
}: VideoSection_2Props) {
  const { setState } = useCTA()
  const sectionRef = useRef<HTMLElement>(null)

  const inView = useInView(sectionRef, {
    margin: '0px 0px -99% 0px',
    amount: 0,
  })

  useEffect(() => {
    if (inView) setState('course')
  }, [inView, setState])

  return (
    <motion.section
      ref={sectionRef}
      className={cn('flex flex-col h-[2000px] gap-10', className)}
    >
      <div className='p w-full'>
        <p className='font-medium text-5xl md:text-8xl leading-none'>
          Nauči veštine.
          <br />
          Rade.
        </p>
      </div>
      <ScalingVideo
        src={SITE_URL + video.url}
        className='h-[100vh] sticky top-0 content-container'
      />
    </motion.section>
  )
}
