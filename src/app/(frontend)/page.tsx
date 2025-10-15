import { getPayload } from 'payload'
import './globals.css'

import config from '@/payload.config'

import { RefreshRouteOnSave } from '../RefreshRouteOnSave'
import CTAButton from './components/CTAButton/cta-button'
import CarouselProvider from './providers/carousel-provider'
import CTAProvider from './providers/cta-provider'
import ClientsSection from './sections/clients-section'
import FinalWordsSection from './sections/final-words-section'
import Footer from './sections/footer'
import HeaderSection from './sections/header-section'
import HeroSection from './sections/hero-section'
import TestimonialsSection from './sections/testimonials-sections'
import TrustBuilderSection from './sections/trust-builder-section'
import VideoSection1 from './sections/video-section-1'
import VideoSection2 from './sections/video-section_2'
import WhatWeDoSection from './sections/what-we-do-section'
import WorkGridSection from './sections/work-grid-section'
import WorkSection from './sections/work-section'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const content = await payload.findGlobal({
    draft: true,
    slug: 'content',
    depth: 99,
  })

  return (
    <CTAProvider>
      <RefreshRouteOnSave />
      <CarouselProvider>
        <div className='flex flex-col md:h-[70vh]'>
          <HeaderSection brandName={content.heroSectionHeader} />

          <HeroSection text={content.heroSectionText} className='flex-1' />
        </div>
        {/* <CTAButton className='fixed bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-50' />
        <WorkSection className='pt-[10vh]' videos={content.bulkVideos} /> */}

        {/* <WhatWeDoSection className='pt-[50px]' text={content.whatWeDo} />

        {typeof content.fullScreenVideo !== 'number' && (
          <VideoSection1
            video={content.fullScreenVideo}
            className='pt-[100px]'
          />
        )}

        <WorkGridSection
          projects={content.workGridCards}
          text={content.workGridHeading}
        />

        {typeof content.secondFullScreenVideo !== 'number' && (
          <VideoSection2
            headerText={content.secondVideoText}
            video={content.secondFullScreenVideo}
            className='pt-[200px]'
          />
        )}

        <ClientsSection
          header={content.clientCardHeading}
          clients={content.clientCards}
        />

        <TestimonialsSection
          testimonials={content.testimonials}
          testimonialHeader={content.testimonialText}
          className='pt-[200px]'
        />

        <TrustBuilderSection
          header={content.trustBuilderHeading}
          text={content.trustBuilderText}
        />

        <FinalWordsSection
          text1={content.finalWordsText}
          text2={content.secondFinalWordsText}
          text3={content.thirdFinalWordsText}
        />

        <Footer footerText={content.footerText} rights={content.rightsText} /> */}
      </CarouselProvider>
    </CTAProvider>
  )
}
