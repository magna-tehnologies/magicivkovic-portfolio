// src/components/testimonials-section-components/testimonial.tsx
import { SITE_URL } from "@/config";
import Image from "next/image";
import { cn } from "../../lib/cn";

interface TestimonialPicture {
  url?: string | null;
  alt?: string | null;
}

interface TestimonialProps {
  client: string;
  clientRole: string;
  testimonial: string;
  picture: TestimonialPicture;
  // keep src optional — prefer src prop if it's already computed upstream
  src?: string;
  className?: string;
}

export default function Testimonnial({
  picture,
  client,
  clientRole,
  testimonial,
  src,
  className,
}: TestimonialProps) {
  // prefer provided src, otherwise build from picture.url, otherwise fallback placeholder
  const imageSrc =
    src ??
    (picture?.url ? SITE_URL + picture.url : "/images/avatar-placeholder.png");

  const altText = picture?.alt ?? client ?? "";

  return (
    <div className={cn("bg-purple-950 rounded-2xl flex relative", className)}>
      <div className="flex gap-[10px] absolute top-4 left-4 lg:top-12 lg:left-12">
        <div className="bg-black size-16 lg:size-24 rounded-full relative">
          <Image
            fill
            src={imageSrc}
            alt={altText}
            className="rounded-full"
            // optionally add unoptimized if external and not configured:
            // unoptimized
          />
        </div>
        <div className="flex flex-col gap-2 lg:gap-4 justify-center">
          <div className="text-xl leading-none -tracking-[5%] font-medium">
            {client}
          </div>
          <div className="leading-none font-light -tracking-[5%] text-stone-500">
            {clientRole}
          </div>
        </div>
      </div>
      <p
        className={
          "text-xl md:text-3xl lg:text-5xl max-w-[1000px] mx-auto place-self-center text-white/30 font-bold px-4"
        }
      >
        {testimonial}
      </p>
    </div>
  );
}
