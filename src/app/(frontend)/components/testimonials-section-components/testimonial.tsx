import Image from 'next/image'
import { cn } from '../../lib/cn'

interface TestimonialProps {
  profileUrl: string
  clientName: string
  clientRole: string
  testimonialText: string
  className?: string
}

export default function Testimonial({
  profileUrl,
  clientName,
  clientRole,
  testimonialText,
  className,
}: TestimonialProps) {
  return (
    <div className={cn('bg-purple-950 rounded-2xl flex relative', className)}>
      <div className='flex gap-[10px] absolute top-4 left-4 lg:top-12 lg:left-12'>
        <div className='bg-black size-16 lg:size-24 rounded-full relative'>
          {/* <Image
            fill
            src={profileUrl}
            alt='profile-picture'
            className='rounded-full'
          ></Image> */}
        </div>
        <div className='flex flex-col gap-2 lg:gap-4 justify-center'>
          <div className='text-xl leading-none -tracking-[5%] font-medium'>
            {clientName}
          </div>
          <div className='leading-none font-light -tracking-[5%] text-stone-500'>
            {clientRole}
          </div>
        </div>
      </div>
      <p
        className={
          'text-xl md:text-3xl lg:text-5xl max-w-[1000px] mx-auto place-self-center text-white/30 font-bold px-4'
        }
      >
        {testimonialText}
      </p>
    </div>
  )
}
