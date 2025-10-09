import { Media } from "@/payload-types";

interface VideoFrame_2Props {
  video: Media;
  siteUrl: string;
}

export default function VideoFrame_2({ video, siteUrl }: VideoFrame_2Props) {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      src={siteUrl + video.url}
    ></video>
  );
}
