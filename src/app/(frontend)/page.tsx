import { getPayload } from "payload";
import "./globals.css";

import config from "@/payload.config";

import CTAButton from "./components/CTAButton/cta-button";
import HeaderSection from "./sections/header-section";
import HeroSection from "./sections/hero-section";
import VideoSection_1 from "./sections/video-section-1";
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

  const videos = media.docs;
  const bulkVideos = videos.filter((video) => video.section === "bulk");
  const fullScreenVideo_1 = videos.find(
    (video) => video.section === "full-screen-1"
  );

  return (
    <div className="flex flex-col  w-full bg-white overflow-x-hidden ">
      <HeaderSection></HeaderSection>
      <HeroSection></HeroSection>
      <CTAButton></CTAButton>
      <WorkSection siteUrl={SITE_URL} videos={bulkVideos}></WorkSection>
      <WhatWeDoSection></WhatWeDoSection>
      {fullScreenVideo_1 && (
        <VideoSection_1 siteUrl={SITE_URL} video={fullScreenVideo_1} />
      )}
      <WorkGridSection></WorkGridSection>
    </div>
  );
}
