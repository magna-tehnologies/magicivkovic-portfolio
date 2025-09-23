import { cn } from '../lib/cn'

interface WhatWeDoSectionProps {
  text: string
  className?: string
}

export default function WhatWeDoSection({
  text,
  className,
}: WhatWeDoSectionProps) {
  return (
    <section className={cn('p', className)}>
      <div
        className={cn(
          'bg-teal-200 rounded-2xl text-2xl md:text-4xl lg:text-6xl font-medium leading-tight',
          'px-4 pt-16 pb-20 md:px-16 md:pt-20 md:pb-24 lg:px-20 lg:pt-24 lg:pb-32'
        )}
      >
        {text}
      </div>
    </section>
  )
}
