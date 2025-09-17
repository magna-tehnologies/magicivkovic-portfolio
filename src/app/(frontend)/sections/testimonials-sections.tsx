import { Media } from "@/payload-types";
import Testimonnial from "../components/testimonials-section-components/testimonial";

interface TestimonialSectionProps {
  picture: Media;
  url: string;
}

export default function TestimonialsSection({
  picture,
  url,
}: TestimonialSectionProps) {
  return (
    <section className={"pt-[200px] bg-black px-[40px]"}>
      <p className={"text-[100px] text-white px-[40px]"}>
        Klijenti najbolje govore o mom radu.
      </p>
      <Testimonnial picture={picture} url={url}></Testimonnial>
    </section>
  );
}
