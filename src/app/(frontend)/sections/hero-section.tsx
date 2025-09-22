import { cn } from '../lib/cn'

interface HeroSectionProps {
  hook: string
  footer_1: string
  footer_2: string
  footer_3: string
  className?: string
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <div className={cn('flex flex-col gap-20 md:justify-between p', className)}>
      <img src='ivkovic.svg' className='w-full' />
      <p className='text-3xl font-medium md:text-5xl'>
        Kreator za brendove, drustevene mreze i edukaciju
      </p>
    </div>
  )
}
