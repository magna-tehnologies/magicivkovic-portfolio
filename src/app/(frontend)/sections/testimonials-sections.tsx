'use client'

import Testimonial from '../components/testimonials-section-components/testimonial'
import { SITE_URL } from '@/config'
import { TestimonialType } from '../page'
import { useCTA } from '../providers/cta-provider'
import { useCarousel } from '../providers/carousel-provider'
import { useEffect } from 'react'
import { useInView, useScroll, useTransform, motion } from 'framer-motion'
import { cn } from '../lib/cn'

interface TestimonialSectionProps {
  testimonials: TestimonialType[]
  className?: string
}

export default function TestimonialsSection({
  testimonials,
  className,
}: TestimonialSectionProps) {
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
          Klijenti najbolje govore o mom radu.
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
          key={testimonials[testimonials.length - 1].clientName}
          clientName={testimonials[testimonials.length - 1].clientName}
          clientRole={testimonials[testimonials.length - 1].clientName}
          profileUrl={
            SITE_URL + testimonials[testimonials.length - 1].profileUrl
          }
          testimonialText={
            testimonials[testimonials.length - 1].testimonialText
          }
        />
        {testimonials.map((testimonial) => (
          <Testimonial
            className='w-full shrink-0 h-full'
            key={testimonial.clientName}
            clientName={testimonial.clientName}
            clientRole={testimonial.clientName}
            profileUrl={SITE_URL + testimonial.profileUrl}
            testimonialText={testimonial.testimonialText}
          />
        ))}
        <Testimonial
          className='w-full shrink-0 h-full'
          key={testimonials[0].clientName}
          clientName={testimonials[0].clientName}
          clientRole={testimonials[0].clientName}
          profileUrl={SITE_URL + testimonials[0].profileUrl}
          testimonialText={testimonials[0].testimonialText}
        />
      </motion.div>
    </section>
  )
}
