import { getPayload } from "payload";
import "./globals.css";

import config from "@/payload.config";

import ClientsSection from "./sections/clients-section";
import FinalWordsSection from "./sections/final-words-section";
import Footer from "./sections/footer";
import HeaderSection from "./sections/header-section";
import HeroSection from "./sections/hero-section";
import TestimonialsSection from "./sections/testimonials-sections";
import TrustBuilderSection from "./sections/trust-builder-section";
import VideoSection_1 from "./sections/video-section-1";
import VideoSection_2 from "./sections/video-section_2";
import WhatWeDoSection from "./sections/what-we-do-section";
import WorkGridSection from "./sections/work-grid-section";
import WorkSection from "./sections/work-section";

const SITE_URL = "http://localhost:3000";

export default async function HomePage() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const media = await payload.find({
    collection: "media",
  });

  const texts = await payload.find({
    collection: "texts",
    limit: 100,
  });

  const headerText = texts.docs.filter((text) =>
    text.section.startsWith("hero")
  );

  const headerObject = headerText.reduce(
    (acc, item) => {
      const trim = item.section.replace("hero-section-", "");
      acc[trim] = item.text;
      return acc;
    },
    {} as Record<string, string>
  );

  const whatWeDoText = texts.docs.find(
    (text) => text.section === "what-we-do-section"
  );

  const cardHeaderText = texts.docs.find(
    (text) => text.section === "work-grid-section-header"
  );

  const cardText = await payload.find({
    collection: "work-grid-card",
  });

  const cardTextProps = cardText.docs.map((cardText) => cardText.text);

  const scalingVideoHeader = texts.docs.find(
    (text) => text.section === "scaling-video-1-header"
  );

  const clientCards = await payload.find({
    collection: "client-card",
  });

  const clientCardHeader = texts.docs.find(
    (text) => text.section === "clients-section-header"
  );

  const clientCardProps = clientCards.docs.map((clientCard) => ({
    place: clientCard.Place,
    client: clientCard.Client,
  }));

  const testimonials = await payload.find({
    collection: "testemonial",
  });

  const testimonialsProps = testimonials.docs.map((t) => ({
    client: t.client,
    clientRole: t["client-role"],
    testimonial: t.testemonial,
    picture: { url: t.picture.url, alt: t.picture.alt },
  }));

  const testimonialHeader = texts.docs.find(
    (text) => text.section === "testemonial-header"
  );

  const trustBuilderHeader = texts.docs.find(
    (text) => text.section === "trust-builder-header"
  );
  const trustBuilderText = texts.docs.find(
    (text) => text.section === "trust-builder-text"
  );

  const finalWordsText1 = texts.docs.find(
    (text) => text.section === "final-words-text-1"
  );
  const finalWordsText2 = texts.docs.find(
    (text) => text.section === "final-words-text-2"
  );
  const finalWordsText3 = texts.docs.find(
    (text) => text.section === "final-words-text-3"
  );

  const brandName = texts.docs.find((text) => text.section === "brand-name");

  const footerText = texts.docs.find((text) => text.section === "footer-text");

  const footerRights = texts.docs.find(
    (text) => text.section === "footer-rights"
  );

  const videos = media.docs;
  const bulkVideos = videos.filter((video) => video.section === "bulk");
  const fullScreenVideo_1 = videos.find(
    (video) => video.section === "full-screen-1"
  );
  const fullScreenVideo_2 = videos.find(
    (video) => video.section === "full-screen-2"
  );

  return (
    <div className="bg-white">
      {brandName && <HeaderSection brandName={brandName.text}></HeaderSection>}

      {headerText && (
        <HeroSection
          footer_3={headerObject["footer-3"]}
          footer_2={headerObject["footer-2"]}
          footer_1={headerObject["footer-1"]}
          hook={headerObject["hook"]}
        ></HeroSection>
      )}
      {/* <ButtonsContainer></ButtonsContainer> */}
      <WorkSection siteUrl={SITE_URL} videos={bulkVideos}></WorkSection>
      {whatWeDoText && (
        <WhatWeDoSection text={whatWeDoText.text}></WhatWeDoSection>
      )}

      {fullScreenVideo_1 && (
        <VideoSection_1 siteUrl={SITE_URL} video={fullScreenVideo_1} />
      )}
      {cardHeaderText && (
        <WorkGridSection
          projects={cardTextProps}
          text={cardHeaderText.text}
        ></WorkGridSection>
      )}

      {fullScreenVideo_2 && scalingVideoHeader && (
        <VideoSection_2
          headerText={scalingVideoHeader.text}
          siteUrl={SITE_URL}
          video={fullScreenVideo_2}
        />
      )}
      {clientCardHeader && clientCardProps && (
        <ClientsSection
          header={clientCardHeader.text}
          clients={clientCardProps}
        ></ClientsSection>
      )}

      {testimonialsProps && testimonialHeader && (
        <TestimonialsSection
          testimonials={testimonialsProps}
          siteUrl={SITE_URL}
          testimonialHeader={testimonialHeader.text}
        ></TestimonialsSection>
      )}
      {trustBuilderHeader && trustBuilderText && (
        <TrustBuilderSection
          header={trustBuilderHeader.text}
          text={trustBuilderText.text}
        ></TrustBuilderSection>
      )}
      {finalWordsText1 && finalWordsText2 && finalWordsText3 && (
        <FinalWordsSection
          text1={finalWordsText1.text}
          text2={finalWordsText2.text}
          text3={finalWordsText3.text}
        ></FinalWordsSection>
      )}
      {footerText && footerRights && (
        <Footer
          footerText={footerText.text}
          rights={footerRights.text}
        ></Footer>
      )}
    </div>
  );
}

//Framer>Gsap
//animate presence => exit animation
