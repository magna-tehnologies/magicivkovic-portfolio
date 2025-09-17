import { getPayload } from "payload";
import "./globals.css";

import config from "@/payload.config";
import CTAButton from "./components/CTAButton";
import HeaderSection from "./sections/HeaderSection";

const SITE_URL = "http://localhost:3000";

export default async function HomePage() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const media = await payload.find({
    collection: "media",
    limit: 1,
  });

  const image = media.docs[0];

  return (
    <>
      <div className="flex flex-col  h-screen w-screen bg-gray-200 pt-2.5 ">
        <HeaderSection></HeaderSection>
        <CTAButton></CTAButton>
      </div>
    </>
  );
}
