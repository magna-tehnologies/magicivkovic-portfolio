'use client'

import { Media } from '@/payload-types'
import ScalingVideo from '../components/scaling-video'

interface VideoSection_1Props {
  video: Media
  siteUrl: string
}

export default function VideoSection_1({
  video,
  siteUrl,
}: VideoSection_1Props) {
  return (
    <section className='h-[2000px] relative'>
      <ScalingVideo
        src={siteUrl + video.url}
        className='h-[100vh] sticky top-0 content-container'
      />
    </section>
  )
}
