// src/components/testimonials-section-components/testimonial.tsx
import Image from 'next/image'
import { cn } from '../../lib/cn'
import GradientBackground from '../GradientBackground'
import { Media } from '@/payload-types'

interface TestimonialProps {
  client: string
  clientRole: string
  testimonial: string
  picture: number | Media
  src?: string
  className?: string
}

export default function Testimonnial({
  picture,
  client,
  clientRole,
  testimonial,
  src,
  className,
}: TestimonialProps) {
  if (typeof picture === 'number') return null

  const imageSrc =
    src ?? (picture?.url ? picture.url : '/images/avatar-placeholder.png')

  const altText = picture?.alt ?? client ?? ''

  return (
    <div className={cn('rounded-2xl flex relative overflow-hidden', className)}>
      <GradientBackground />
      <div className='flex gap-[10px] absolute top-4 left-4 lg:top-12 lg:left-12'>
        <div className='bg-black size-16 lg:size-24 rounded-full relative'>
          <Image fill src={imageSrc} alt={altText} className='rounded-full' />
        </div>
        <div className='flex flex-col gap-2 lg:gap-4 justify-center'>
          <div className='text-xl leading-none -tracking-[5%] font-medium text-white'>
            {client}
          </div>
          <div className='leading-none font-light -tracking-[5%] text-white'>
            {clientRole}
          </div>
        </div>
      </div>
      <p
        className={
          'text-xl md:text-3xl lg:text-5xl max-w-[1000px] mx-auto place-self-center text-white/30 font-bold px-4'
        }
      >
        {testimonial}
      </p>
    </div>
  )
}
