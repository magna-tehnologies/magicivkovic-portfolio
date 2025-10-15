'use client'

import { Content } from '@/payload-types'
import ScalingVideo from '../components/scaling-video'
import { cn } from '../lib/cn'

interface VideoSectionProps {
  video: Content['fullScreenVideo']
  className?: string
}

export default function VideoSection({ video, className }: VideoSectionProps) {
  if (typeof video === 'number') return null

  return (
    <section className={cn('h-[2000px] relative', className)}>
      <ScalingVideo
        src={video?.url ?? undefined}
        className='h-[100vh] sticky top-0 content-container'
      />
    </section>
  )
}
