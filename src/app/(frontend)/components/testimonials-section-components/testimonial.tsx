import { Media } from "@/payload-types";
import Image from "next/image";
interface TestimonialProps {
  picture: Media;
  url: string;
}

export default function Testimonnial({ picture, url }: TestimonialProps) {
  return (
    <div className={"h-[100vh]  bg-purple-900 rounded-2xl px-[40px] flex"}>
      <div className="flex gap-[10px] pt-[40px]  self-start absolute">
        <div className="bg-black w-[100px] h-[100px] rounded-full relative">
          <Image
            fill
            src={url + picture.url}
            alt="profile-picture"
            className="rounded-full"
          ></Image>
        </div>
        <div className="flex flex-col justify-around">
          <div className={"text-[20px] text-white"}>Client name</div>
          <div className={"text-[16px]"}>Client role</div>
        </div>
      </div>
      <p
        className={
          "text-[50px] max-w-[1000px] place-self-center mx-auto text-white/30 font-bold"
        }
      >
        Video koji nam je Ivko montirao doneo je duplo više pregleda na
        Instagramu nego što smo očekivali. Brz, profesionalan i kreativan!
      </p>
    </div>
  );
}
