import VideoSEO from "../seo-video";

interface VideoFrameProps {
  src: string;
  alt: string;
}

const VideoFrame = ({ src, alt }: VideoFrameProps) => {
  return (
    <div className="bg-black h-full aspect-[9/16] rounded-3xl overflow-hidden flex-shrink-0">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        src={src}
      ></video>
      <VideoSEO name={alt} description={alt} contentUrl={src} />
    </div>
  );
};

export default VideoFrame;
