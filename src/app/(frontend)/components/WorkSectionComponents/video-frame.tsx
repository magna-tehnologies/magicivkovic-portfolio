import { Media } from "@/payload-types";

const VideoFrame = ({ video, siteUrl }: { video: Media; siteUrl: string }) => {
  console.log(video);
  return (
    <>
      <div className="bg-black h-full aspect-[9/16]  rounded-3xl overflow-hidden flex-shrink-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          src={siteUrl + video.url}
        ></video>
      </div>
    </>
  );
};

export default VideoFrame;
