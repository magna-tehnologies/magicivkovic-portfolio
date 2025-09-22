import Image from "next/image";
interface TestimonialPicture {
  url: string;
  alt: string;
}

interface TestimonialProps {
  client: string;
  clientRole: string;
  testimonial: string;
  picture: TestimonialPicture;
  src: string;
}

export default function Testimonnial({
  picture,
  client,
  clientRole,
  testimonial,
  src,
}: TestimonialProps) {
  return (
    <div className={"h-[100vh]  bg-purple-900 rounded-2xl px-[40px] flex"}>
      <div className="flex gap-[10px] pt-[40px]  self-start absolute">
        <div className="bg-black w-[100px] h-[100px] rounded-full relative">
          <Image
            fill
            src={src}
            alt={picture.alt}
            className="rounded-full"
          ></Image>
        </div>
        <div className="flex flex-col justify-around">
          <div className={"text-[20px] text-white"}>{client}</div>
          <div className={"text-[16px]"}>{clientRole}</div>
        </div>
      </div>
      <p
        className={
          "text-[50px] max-w-[1000px] place-self-center mx-auto text-white/30 font-bold"
        }
      >
        {testimonial}
      </p>
    </div>
  );
}
