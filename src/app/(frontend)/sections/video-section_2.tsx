import { Media } from "@/payload-types";
import VideoFrame_2 from "../components/video-section-2-components/video-frame_2";
interface VideoSection_2Props {
  video: Media;
  siteUrl: string;
}

export default function VideoSection_1({
  video,
  siteUrl,
}: VideoSection_2Props) {
  return (
    <section className={"px-[40px] text-[100px] pt-[200px] flex-col h-[200vh]"}>
      <p>Nauči veštine.</p>
      <p>Rade.</p>

      <div className="h-[100vh] bg-black  aspect-[16/9]  rounded-3xl overflow-hidden flex-shrink-1 m-auto">
        <VideoFrame_2 video={video} siteUrl={siteUrl}></VideoFrame_2>
      </div>
    </section>
  );
}
