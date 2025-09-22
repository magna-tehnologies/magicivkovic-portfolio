'use client'

import { Media } from '@/payload-types'
import VideoFrame from '../components/work-section-components/video-frame'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { SITE_URL } from '@/config'
import { cn } from '../lib/cn'

interface WorkSectionProps {
  videos: Media[]
  className?: string
}

export default function WorkSection({ videos, className }: WorkSectionProps) {
  const targetRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: targetRef })
  const translateX = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
  const left = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className={cn('h-[2000px] relative', className)} ref={targetRef}>
      <div className='sticky top-0 overflow-x-hidden'>
        <motion.div
          className='p-5 gap-5 flex h-screen w-min'
          style={{
            translateX,
            left,
            position: 'relative',
          }}
        >
          {videos.map((video) => (
            <VideoFrame key={video.id} src={SITE_URL + video.url} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
