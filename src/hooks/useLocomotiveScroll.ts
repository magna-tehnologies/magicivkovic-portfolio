import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

export default function useLocomotiveScroll(el?: HTMLElement) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null)

  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll

    const initLocomotiveScroll = async () => {
      if (typeof window === 'undefined') return

      try {
        locomotiveScroll = new LocomotiveScroll({
          el:
            el ||
            scrollRef.current ||
            (document.querySelector('[data-scroll-container]') as HTMLElement),
          smooth: true,
        })

        locomotiveScrollRef.current = locomotiveScroll
      } catch (error) {
        console.error('Failed to initialize Locomotive Scroll:', error)
      }
    }

    initLocomotiveScroll()

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy()
      }
    }
  }, [el])

  const scrollTo = (
    target: string | HTMLElement,
    options?: Partial<LocomotiveScroll.ScrollToOptions>
  ) => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(target, options)
    }
  }

  const update = () => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.update()
    }
  }

  const start = () => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.start()
    }
  }

  const stop = () => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.stop()
    }
  }

  return {
    scrollRef,
    locomotive: locomotiveScrollRef.current,
    scrollTo,
    update,
    start,
    stop,
  }
}
