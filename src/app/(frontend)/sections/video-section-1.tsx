'use client'

import { Media } from '@/payload-types'
import ScalingVideo from '../components/scaling-video'
import { SITE_URL } from '@/config'
import { cn } from '../lib/cn'

interface VideoSection_1Props {
  video: Media
  className?: string
}

export default function VideoSection_1({
  video,
  className,
}: VideoSection_1Props) {
  return (
    <section className={cn('h-[2000px] relative', className)}>
      <ScalingVideo
        src={SITE_URL + video.url}
        className='h-[100vh] sticky top-0 content-container'
      />
    </section>
  )
}
