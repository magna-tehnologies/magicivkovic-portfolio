interface VideoSEOProps {
  name: string;
  description: string;
  contentUrl: string;
}

export default function VideoSEO({
  name,
  description,
  contentUrl,
}: VideoSEOProps) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    contentUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
    />
  );
}
