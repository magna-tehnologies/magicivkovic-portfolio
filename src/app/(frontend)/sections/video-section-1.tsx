import { Media } from "@/payload-types";
import VideoFrame_1 from "../components/video-section-compononents/video-frame_1";

interface VideoSection_1Props {
  video: Media;
  siteUrl: string;
}

export default function VideoSection_1({
  video,
  siteUrl,
}: VideoSection_1Props) {
  return (
    <section className="h-[200vh]  pt-[200px] px-[50px] flex">
      <div className="h-[100vh] bg-black  aspect-[16/9]  rounded-3xl overflow-hidden flex-shrink-1">
        <VideoFrame_1 video={video} siteUrl={siteUrl}></VideoFrame_1>
      </div>
    </section>
  );
}
