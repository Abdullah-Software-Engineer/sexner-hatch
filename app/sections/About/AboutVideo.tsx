'use client'

import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

type AboutVideoProps = {
  /** Optional: YouTube/Vimeo embed URL or video src. When set, shows embed instead of placeholder. */
  videoUrl?: string
}

export default function AboutVideo({ videoUrl }: AboutVideoProps) {
  return (
    <Section className="bg-white" id="about-video">
      <Container>
        <div className="flex justify-center">
          <div className="relative w-full rounded-xl overflow-hidden bg-[#e0e0e0] aspect-video flex items-center justify-center">
            {videoUrl ? (
              <iframe
                src={videoUrl}
                title="About us video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src="/About%20us/video/sexner-about-us-video.webm"
                title="About us video"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
