'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'

interface CarouselContextType {
  slide: number
  goToNextSlide: () => void
  goToPrevSlide: () => void
  goToSlide: (index: number, smooth?: boolean) => void
  carouselContainerRef: React.RefObject<HTMLDivElement | null>
}

const CarouselContext = createContext<CarouselContextType | null>(null)

interface CarouselProviderProps {
  children: React.ReactNode
}

export default function CarouselProvider({ children }: CarouselProviderProps) {
  const carouselContainerRef = useRef<HTMLDivElement>(null)
  const [slide, setSlide] = useState(0)

  const slideCount = carouselContainerRef.current
    ? carouselContainerRef.current.children.length
    : 0

  const goToSlide = useCallback((index: number, smooth = true) => {
    const container = carouselContainerRef.current
    if (!container) return
    const slideEl = container.children[index] as HTMLElement
    slideEl?.scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      inline: 'center',
      block: 'center',
    })
    setSlide(index)
  }, [])

  const goToNextSlide = useCallback(() => {
    if (slide < slideCount - 1) {
      goToSlide(slide + 1)
    }
  }, [slide, slideCount, goToSlide])

  const goToPrevSlide = useCallback(() => {
    if (slide > 0) {
      goToSlide(slide - 1)
    }
  }, [slide, goToSlide])

  const value = useMemo(
    () => ({
      slide,
      goToNextSlide,
      goToPrevSlide,
      goToSlide,
      carouselContainerRef,
    }),
    [slide, goToNextSlide, goToPrevSlide, goToSlide]
  )

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  )
}

export const useCarousel = () => {
  const context = useContext(CarouselContext)
  if (context === null) {
    throw new Error('useCarousel must be used within a CarouselProvider')
  }
  return context
}
