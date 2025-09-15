import { Media } from "@/payload-types";

interface VideoFrame_1Props {
  video: Media;
  siteUrl: string;
}

export default function VideoFrame_1({ video, siteUrl }: VideoFrame_1Props) {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      src={siteUrl + video.url}
    ></video>
  );
}
