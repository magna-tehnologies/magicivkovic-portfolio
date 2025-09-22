import { getPayload } from 'payload'
import './globals.css'

import config from '@/payload.config'

import PlacesSection from './sections/clients-section'
import FinalWordsSection from './sections/final-words-section'
import Footer from './sections/footer'
import HeaderSection from './sections/header-section'
import HeroSection from './sections/hero-section'
import TestimonialsSection from './sections/testimonials-sections'
import TrustBuilderSection from './sections/trust-builder-section'
import VideoSection_1 from './sections/video-section-1'
import VideoSection_2 from './sections/video-section_2'
import WhatWeDoSection from './sections/what-we-do-section'
import WorkGridSection from './sections/work-grid-section'
import WorkSection from './sections/work-section'
import CTAButton from './components/CTAButton/cta-button'
import CarouselProvider from './providers/carousel-provider'
import CTAProvider from './providers/cta-provider'

export interface TestimonialType {
  clientName: string
  clientRole: string
  profileUrl?: string
  testimonialText: string
}

const testimonials: TestimonialType[] = [
  {
    clientName: 'Marko Markovic',
    clientRole: 'CEO, Company X',
    testimonialText:
      'Magic Ivkovic je neverovatan u onome što radi. Njegova kreativnost i pažnja prema detaljima su impresivni. Toplo ga preporučujem!',
  },
  {
    clientName: 'Jelena Jovanovic',
    clientRole: 'Marketing Manager, Brand Y',
    testimonialText:
      'Rad sa Magicom je bio pravo zadovoljstvo. Njegova sposobnost da razume naše potrebe i pretvori ih u vizuelno zadivljujući sadržaj je izvanredna.',
  },
  {
    clientName: 'Nikola Nikolic',
    clientRole: 'Freelancer',
    testimonialText:
      'Magic Ivkovic je pravi profesionalac. Njegova posvećenost i strast prema onome što radi su očigledni u svakom projektu na kojem smo radili zajedno.',
  },
]

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const media = await payload.find({
    collection: 'media',
  })

  const videos = media.docs
  const bulkVideos = videos.filter((video) => video.section === 'bulk')
  const fullScreenVideo_1 = videos.find(
    (video) => video.section === 'full-screen-1'
  )

  return (
    <CTAProvider>
      <CarouselProvider>
        <div className='flex flex-col md:h-[70vh]'>
          <HeaderSection />
          <HeroSection className='flex-1' />
        </div>
        <CTAButton className='fixed bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-50' />
        <WorkSection className='pt-[10vh]' videos={bulkVideos} />
        <WhatWeDoSection className='pt-[50px]' />
        {fullScreenVideo_1 && (
          <VideoSection_1 video={fullScreenVideo_1} className='pt-[100px]' />
        )}
        <WorkGridSection />
        {fullScreenVideo_1 && (
          <VideoSection_2 video={fullScreenVideo_1} className='pt-[200px]' />
        )}
        <PlacesSection />
        <TestimonialsSection
          testimonials={testimonials}
          className='pt-[200px]'
        />
        <TrustBuilderSection />
        <FinalWordsSection />
        <Footer />
      </CarouselProvider>
    </CTAProvider>
  )
}
