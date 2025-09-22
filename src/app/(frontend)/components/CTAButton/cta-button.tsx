'use client'

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useCarousel } from '../../providers/carousel-provider'
import { cn } from '../../lib/cn'
import { useCTA } from '../../providers/cta-provider'
import { AnimatePresence, motion } from 'framer-motion'
import useMeasure from 'react-use-measure'

interface CTAButtonProps {
  className?: string
}

const CTAButton = ({ className }: CTAButtonProps) => {
  const { state } = useCTA()
  const { goToNextSlide, goToPrevSlide } = useCarousel()
  const [ref, { width }] = useMeasure()

  return (
    <motion.div
      layout
      style={{
        overflow: 'hidden',
        width,
      }}
      transition={{
        ease: 'linear',
        layout: {
          duration: 0.5,
        },
      }}
      className={cn(
        'h-16 rounded-[24px] bg-stone-900 transition-all flex justify-center',
        state == 'course' && 'bg-red-500',
        className
      )}
    >
      <div className='w-min h-full' ref={ref}>
        <AnimatePresence mode='wait'>
          {state == 'default' && (
            <motion.button
              key='default'
              className='flex h-full items-center'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5 },
              }}
            >
              <div className='px-8'>
                <p className='text-nowrap text-xl -tracking-[5%] text-stone-600 hover:text-white transition-colors'>
                  Sta ti je potrebno?
                </p>
              </div>
              <div className='rounded-[20px] bg-stone-950 aspect-square h-full'></div>
            </motion.button>
          )}
          {state == 'course' && (
            <motion.button
              key='course'
              className='flex h-full items-center'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5 },
              }}
            >
              <div className='px-8'>
                <p className='text-nowrap text-xl -tracking-[5%] text-stone-800 hover:text-stone-950 transition-colors'>
                  Prijavi se na kurs
                </p>
              </div>
              <div className='rounded-[20px] bg-stone-950 aspect-square h-full'></div>
            </motion.button>
          )}
          {state == 'carousel' && (
            <motion.div
              key='carousel'
              className='flex gap-2 p-1 h-full'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5 },
              }}
            >
              <button
                className='aspect-square h-full bg-stone-950 flex items-center justify-center rounded-[20px]'
                onClick={goToPrevSlide}
              >
                <ChevronLeftIcon className='text-stone-600' />
              </button>
              <button
                className='aspect-square h-full bg-stone-950 flex items-center justify-center rounded-[20px]'
                onClick={goToNextSlide}
              >
                <ChevronRightIcon className='text-stone-600' />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default CTAButton
