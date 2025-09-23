import { getPayload } from 'payload'
import './globals.css'

import config from '@/payload.config'

// import PlacesSection from './sections/clients-section'
import CTAButton from './components/CTAButton/cta-button'
import CarouselProvider from './providers/carousel-provider'
import CTAProvider from './providers/cta-provider'
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
import ClientsSection, { Client } from './sections/clients-section'
import { RefreshRouteOnSave } from '../RefreshRouteOnSave'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const content = await payload.findGlobal({
    draft: true,
    slug: 'content',
    depth: 99,
  })

  const media = await payload.find({
    collection: 'media',
  })

  const texts = await payload.find({
    collection: 'texts',
    limit: 100,
  })

  const headerText = texts.docs.filter(
    (text) => text.section && text.section.startsWith('hero')
  )

  const headerObject = headerText.reduce(
    (acc, item) => {
      if (!item.section) return acc
      const trim = item.section.replace('hero-section-', '')
      acc[trim] = item.text
      return acc
    },
    {} as Record<string, string>
  )

  const whatWeDoText = texts.docs.find(
    (text) => text.section === 'what-we-do-section'
  )

  const cardHeaderText = texts.docs.find(
    (text) => text.section === 'work-grid-section-header'
  )

  const cardText = await payload.find({
    collection: 'work-grid-card',
  })

  const cardTextProps = cardText.docs.map((cardText) => cardText.text)

  const scalingVideoHeader = texts.docs.find(
    (text) => text.section === 'scaling-video-1-header'
  )

  const clientCards = await payload.find({
    collection: 'client-card',
  })

  const clientCardHeader = texts.docs.find(
    (text) => text.section === 'clients-section-header'
  )

  const clientCardProps: Client[] = clientCards.docs.map((clientCard) => ({
    place: clientCard.Place || '',
    client: clientCard.Client || '',
  }))

  const testimonials = await payload.find({
    collection: 'testemonial',
  })

  const testimonialsProps = testimonials.docs.map((t) => ({
    client: t.client,
    clientRole: t['client-role'],
    testimonial: t.testemonial,
    picture: { url: t.picture.url, alt: t.picture.alt },
  }))

  const testimonialHeader = texts.docs.find(
    (text) => text.section === 'testemonial-header'
  )

  const trustBuilderHeader = texts.docs.find(
    (text) => text.section === 'trust-builder-header'
  )
  const trustBuilderText = texts.docs.find(
    (text) => text.section === 'trust-builder-text'
  )

  const finalWordsText1 = texts.docs.find(
    (text) => text.section === 'final-words-text-1'
  )
  const finalWordsText2 = texts.docs.find(
    (text) => text.section === 'final-words-text-2'
  )
  const finalWordsText3 = texts.docs.find(
    (text) => text.section === 'final-words-text-3'
  )

  const brandName = texts.docs.find((text) => text.section === 'brand-name')

  const footerText = texts.docs.find((text) => text.section === 'footer-text')

  const footerRights = texts.docs.find(
    (text) => text.section === 'footer-rights'
  )

  const videos = media.docs
  const bulkVideos = videos.filter((video) => video.section === 'bulk')
  const fullScreenVideo_1 = videos.find(
    (video) => video.section === 'full-screen-1'
  )

  const fullScreenVideo_2 = videos.find(
    (video) => video.section === 'full-screen-2'
  )

  return (
    <CTAProvider>
      <RefreshRouteOnSave />
      <CarouselProvider>
        <div className='flex flex-col md:h-[70vh]'>
          <HeaderSection brandName={content.heroSectionHeader} />
          {brandName && (
            <HeroSection
              footer_3={headerObject['footer-3']}
              footer_2={headerObject['footer-2']}
              footer_1={headerObject['footer-1']}
              hook={headerObject['hook']}
              className='flex-1'
            />
          )}
        </div>
        <CTAButton className='fixed bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-50' />
        <WorkSection className='pt-[10vh]' videos={bulkVideos} />
        {whatWeDoText && (
          <WhatWeDoSection className='pt-[50px]' text={whatWeDoText.text} />
        )}
        {fullScreenVideo_1 && (
          <VideoSection1 video={fullScreenVideo_1} className='pt-[100px]' />
        )}
        {cardHeaderText && (
          <WorkGridSection
            projects={cardTextProps}
            text={cardHeaderText.text}
          />
        )}
        {fullScreenVideo_2 && scalingVideoHeader && (
          <VideoSection2
            headerText={scalingVideoHeader.text}
            video={fullScreenVideo_2}
            className='pt-[200px]'
          />
        )}
        {/* <PlacesSection /> */}
        {clientCardHeader && (
          <ClientsSection
            header={clientCardHeader.text}
            clients={clientCardProps}
          />
        )}
        {testimonialHeader && (
          <TestimonialsSection
            testimonials={content.testimonials}
            testimonialHeader={testimonialHeader.text}
            className='pt-[200px]'
          />
        )}
        {trustBuilderHeader && trustBuilderText && (
          <TrustBuilderSection
            header={trustBuilderHeader.text}
            text={trustBuilderText.text}
          />
        )}
        {finalWordsText1 && finalWordsText2 && finalWordsText3 && (
          <FinalWordsSection
            text1={finalWordsText1.text}
            text2={finalWordsText2.text}
            text3={finalWordsText3.text}
          />
        )}
        {footerText && footerRights && (
          <Footer footerText={footerText.text} rights={footerRights.text} />
        )}
      </CarouselProvider>
    </CTAProvider>
  )
}
