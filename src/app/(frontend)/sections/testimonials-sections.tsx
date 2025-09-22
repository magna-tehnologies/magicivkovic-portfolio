import Testimonnial from "../components/testimonials-section-components/testimonial";

export interface TestimonialPicture {
  url: string;
  alt: string;
}

export interface Testimonial {
  client: string;
  clientRole: string;
  testimonial: string;
  picture: TestimonialPicture;
}

export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  siteUrl: string;
  testimonialHeader: string;
}

export default function TestimonialsSection({
  testimonials,
  siteUrl,
  testimonialHeader,
}: TestimonialsSectionProps) {
  return (
    <section className="pt-[200px] bg-black px-[40px]">
      <p className="text-[100px] text-white px-[40px]">{testimonialHeader}</p>

      <div className="flex flex-col gap-20">
        {testimonials.map((t, index) => (
          <Testimonnial
            key={index}
            picture={t.picture}
            client={t.client}
            clientRole={t.clientRole}
            testimonial={t.testimonial}
            src={siteUrl + t.picture.url}
          />
        ))}
      </div>
    </section>
  );
}
