import { Media } from '@/payload-types'
import ScalingVideo from '../components/scaling-video'
interface VideoSection_2Props {
  video: Media
  siteUrl: string
}

export default function VideoSection_1({
  video,
  siteUrl,
}: VideoSection_2Props) {
  return (
    <section className='text-[100px] pt-[200px] flex-col h-[200vh]'>
      <div className='custom-container'>
        <p className='leading-none'>
          Nauči veštine.
          <br />
          Rade.
        </p>
      </div>
      <ScalingVideo
        src={siteUrl + video.url}
        className='h-[100vh] sticky top-0 content-container'
      />
    </section>
  )
}
