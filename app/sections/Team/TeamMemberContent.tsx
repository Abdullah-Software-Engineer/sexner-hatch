'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import ScrollFollowingForm from '../../components/ScrollFollowingForm'
import { TEAM_MEMBERS } from '@/lib/constants'

interface TeamMemberContentProps {
  name: string
  title?: string
  image: string
  bio: string
  currentSlug: string
}

export default function TeamMemberContent({
  name,
  title,
  image,
  bio,
  currentSlug,
}: TeamMemberContentProps) {
  return (
    <Section className="bg-white " id="team-member-profile">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
          <div className="flex-1 lg:w-[58.33%] space-y-8">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-md">
              <div className="relative w-full aspect-[4/5] max-h-[600px]">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2A3F53]/95 to-[#2A3F53]/80 pt-16 pb-6 px-6 md:px-8">
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-14 bg-[#C5A059] shrink-0" aria-hidden />
                  <div>
                    <h2 className="font-poppins font-bold text-white text-2xl md:text-3xl leading-tight">
                      {name}
                    </h2>
                    {title && (
                      <p className="font-poppins text-white/90 text-sm md:text-base font-medium mt-1">
                        {title}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="font-poppins text-[#3C3C3C] text-[15px] md:text-base leading-relaxed space-y-6">
              <p>{bio}</p>
            </div>
          </div>

          <aside className="w-full lg:w-[41.67%] lg:flex-shrink-0 space-y-6">
            <div className="rounded-xl overflow-hidden border border-[#e5e7eb] shadow-sm">
              <div className="bg-[#C8A24F] px-4 py-3">
                <h3 className="font-libre font-bold text-primary text-lg">Meet our team</h3>
              </div>
              <div className="bg-white p-4">
                <ul className="space-y-2 list-none">
                  {TEAM_MEMBERS.map((member) => {
                    const isCurrent = currentSlug === member.slug
                    return (
                      <li key={member.slug}>
                        {isCurrent ? (
                          <span className="block font-poppins text-[15px] font-semibold text-primary py-1">
                            {member.name}
                          </span>
                        ) : (
                          <Link
                            href={`/team/${member.slug}`}
                            className="block font-poppins text-[15px] text-primary/90 hover:text-secondary py-1 transition-colors"
                          >
                            {member.name}
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
                <Link
                  href="/team"
                  className="inline-block font-poppins text-[15px] text-secondary font-medium mt-2 hover:underline"
                >
                  View all team members →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  )
}
