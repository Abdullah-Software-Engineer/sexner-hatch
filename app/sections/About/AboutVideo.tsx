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
          <div className="relative w-full max-w-5xl rounded-xl overflow-hidden bg-[#e0e0e0] aspect-video flex items-center justify-center">
            {videoUrl ? (
              <iframe
                src={videoUrl}
                title="About us video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <span className="font-poppins text-primary/70 text-lg md:text-xl">
                video of them
              </span>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
