'use client'

import { SITE_URL } from '@/config'
import { Content } from '@/payload-types'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import Testimonial from '../components/testimonials-section-components/testimonial'
import { cn } from '../lib/cn'
import { useCarousel } from '../providers/carousel-provider'
import { useCTA } from '../providers/cta-provider'

export interface TestimonialsSectionProps {
  testimonials: Content['testimonials']
  testimonialHeader: Content['testimonialText']
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

  const objectTestimonials = testimonials?.filter((t) => typeof t !== 'number')

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
        className='content-container flex gap-5 overflow-x-scroll sticky top-0 h-[100vh] scrollbar-hidden'
        style={{
          scale,
        }}
      >
        {/* <Testimonial
          className="w-full shrink-0 h-full"
          key={objectTestimonials[objectTestimonials.length - 1].client}
          client={objectTestimonials[objectTestimonials.length - 1].client}
          clientRole={
            objectTestimonials[objectTestimonials.length - 1].clientRole
          }
          picture={objectTestimonials[objectTestimonials.length - 1].picture}
          src={
            SITE_URL +
            objectTestimonials[objectTestimonials.length - 1].picture.url
          }
          testimonial={
            objectTestimonials[objectTestimonials.length - 1].testemonial
          }
        /> */}

        {objectTestimonials?.map((testimonial, index) => (
          <Testimonial
            key={testimonial.client + index}
            className='w-full shrink-0 h-full'
            picture={testimonial.picture}
            client={testimonial.client}
            clientRole={testimonial.clientRole}
            testimonial={testimonial.testemonial}
            src={
              typeof testimonial.picture !== 'number'
                ? SITE_URL + testimonial.picture.url
                : ''
            }
          />
        ))}

        {/* <Testimonial
          className="w-full shrink-0 h-full"
          key={objectTestimonials[0].client}
          client={objectTestimonials[0].client}
          clientRole={objectTestimonials[0].clientRole}
          picture={objectTestimonials[0].picture}
          src={SITE_URL + objectTestimonials[0].picture.url}
          testimonial={objectTestimonials[0].testemonial}
        /> */}
      </motion.div>
    </section>
  )
}
