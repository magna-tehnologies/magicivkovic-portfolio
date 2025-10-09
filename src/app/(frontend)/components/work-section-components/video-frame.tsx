interface VideoFrameProps {
  src: string
}

const VideoFrame = ({ src }: VideoFrameProps) => {
  return (
    <div className='bg-black h-full aspect-[9/16] rounded-3xl overflow-hidden flex-shrink-0'>
      <video
        className='h-full w-full object-cover'
        autoPlay
        muted
        loop
        src={src}
      ></video>
    </div>
  )
}

export default VideoFrame
