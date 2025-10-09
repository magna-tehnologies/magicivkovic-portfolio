'use client'

import useLocomotiveScroll from '@/hooks/useLocomotiveScroll'

interface LocomotiveScrollWrapperProps {
  children: React.ReactNode
}

export default function LocomotiveScrollWrapper({
  children,
}: LocomotiveScrollWrapperProps) {
  const { scrollRef } = useLocomotiveScroll()

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  )
}
