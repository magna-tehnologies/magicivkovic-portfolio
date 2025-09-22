'use client'

import Testimonial from '../components/testimonials-section-components/testimonial'
import { SITE_URL } from '@/config'
import { useCTA } from '../providers/cta-provider'
import { useCarousel } from '../providers/carousel-provider'
import { useEffect } from 'react'
import { useInView, useScroll, useTransform, motion } from 'framer-motion'
import { cn } from '../lib/cn'

export interface TestimonialPicture {
  url: string
  alt: string
}

export interface Testimonial {
  client: string
  clientRole: string
  testimonial: string
  picture: TestimonialPicture
}

export interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  testimonialHeader: string
  className?: string
}

export default function TestimonialsSection({
  testimonials,
  testimonialHeader,
  className,
}: TestimonialsSectionProps) {
  const { carouselContainerRef } = useCarousel()
  const { setState } = useCTA()

  const inView = useInView(carouselContainerRef, {
    amount: 1,
  })

  useEffect(() => {
    if (inView) {
      setState('carousel')
    } else {
      setState('default')
    }
  }, [inView, setState])

  const { scrollYProgress } = useScroll({
    target: carouselContainerRef,
    offset: ['start end', 'start start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <section
      className={cn('bg-black h-[2000px] flex flex-col gap-10', className)}
    >
      <div className='p'>
        <p className='text-5xl md:text-7xl lg:text-8xl text-white font-medium'>
          {testimonialHeader}
        </p>
      </div>
      <motion.div
        ref={carouselContainerRef}
        className='content-container flex gap-5 overflow-x-scroll sticky top-0 h-[100vh]'
        style={{
          scale,
        }}
      >
        <Testimonial
          className='w-full shrink-0 h-full'
          key={testimonials[testimonials.length - 1].client}
          client={testimonials[testimonials.length - 1].client}
          clientRole={testimonials[testimonials.length - 1].client}
          picture={testimonials[testimonials.length - 1].picture}
          src={SITE_URL + testimonials[testimonials.length - 1].picture.url}
          testimonial={testimonials[testimonials.length - 1].testimonial}
        />
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={testimonial.client + index}
            className='w-full shrink-0 h-full'
            picture={testimonial.picture}
            client={testimonial.client}
            clientRole={testimonial.clientRole}
            testimonial={testimonial.testimonial}
            src={SITE_URL + testimonial.picture.url}
          />
        ))}
        <Testimonial
          className='w-full shrink-0 h-full'
          key={testimonials[0].client}
          client={testimonials[0].client}
          picture={testimonials[0].picture}
          clientRole={testimonials[0].client}
          src={SITE_URL + testimonials[0].picture.url}
          testimonial={testimonials[0].testimonial}
        />
      </motion.div>
    </section>
  )
}
