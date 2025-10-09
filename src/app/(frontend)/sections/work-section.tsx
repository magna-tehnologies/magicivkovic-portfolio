'use client'
import { SITE_URL } from '@/config'
import { Content } from '@/payload-types'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import VideoFrame from '../components/work-section-components/video-frame'
import { cn } from '../lib/cn'

interface WorkSectionProps {
  videos: Content['bulkVideos']
  className?: string
}

export default function WorkSection({ videos, className }: WorkSectionProps) {
  const targetRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: targetRef })
  const translateX = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
  const left = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const objectVideos = videos?.filter(
    (v): v is Exclude<typeof v, number> => typeof v !== 'number'
  )

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
          {objectVideos?.map((video) => (
            <VideoFrame key={video.id} src={SITE_URL + video.url} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
