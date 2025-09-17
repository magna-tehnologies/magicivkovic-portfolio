import { getPayload } from "payload";
import "./globals.css";

import config from "@/payload.config";

import CTAButton from "./components/CTAButton/cta-button";
import HeaderSection from "./sections/header-section";
import HeroSection from "./sections/hero-section";
import WorkSection from "./sections/work-section";

const SITE_URL = "http://localhost:3000";

export default async function HomePage() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const media = await payload.find({
    collection: "media",
    limit: 5,
  });

  const videos = media.docs;

  return (
    <div className="flex flex-col  w-full bg-white overflow-x-hidden ">
      <HeaderSection></HeaderSection>
      <HeroSection></HeroSection>
      <CTAButton></CTAButton>
      <WorkSection siteUrl={SITE_URL} videos={videos}></WorkSection>
    </div>
  );
}
