'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

const AWARD_BASE = '/About%20us/award%20%26%20membership'

const awards = [
  {
    id: 1,
    title: 'Super Lawyers',
    description:
      'Mitchell S. Sexner has been selected for inclusion by Super Lawyers, a national rating service of outstanding lawyers from more than 70 practice areas who have attained a high degree of peer recognition and professional achievement.',
    image: `${AWARD_BASE}/av-1-3-1.png%201.png`,
    profileUrl: '#',
  },
  {
    id: 2,
    title: 'National Top 100 Trial Lawyers',
    description:
      'Mitchell S. Sexner & Associates LLC has been named to The National Top 100 Trial Lawyers for outstanding achievements and superior qualifications in the field of criminal defense.',
    image: `${AWARD_BASE}/av-2-1-1.png%201.png`,
    profileUrl: '#',
  },
  {
    id: 3,
    title: 'Top 100 Attorneys - RUE Ratings',
    description:
      'Mitchell S. Sexner has been selected as one of the top 100 attorneys in Illinois with lifetime charter membership by RUE Ratings.',
    image: `${AWARD_BASE}/av-3-2.png%201.png`,
    profileUrl: '#',
  },
  {
    id: 4,
    title: 'Martindale-Hubbell AV Rating',
    description:
      'Mitchell S. Sexner has received an "AV" rating by Martindale-Hubbell, the highest rating for legal ability and ethical standards.',
    image: `${AWARD_BASE}/av-4-2.png%201.png`,
    profileUrl: '#',
  },
  {
    id: 5,
    title: "Nation's Top One Percent",
    description:
      'Mitchell S. Sexner has been named to the 2025 Nation\'s Top One Percent by the National Association of Distinguished Counsel.',
    image: `${AWARD_BASE}/nadc-top-1-percent-badge-300x300%201.png`,
    profileUrl: '#',
  },
  {
    id: 6,
    title: 'American Institute of Legal Counsel',
    description:
      'Mitchell S. Sexner & Associates LLC has been recognized by the American Institute of Legal Counsel for excellence in criminal defense.',
    image: `${AWARD_BASE}/av-5-2.png%201.png`,
    profileUrl: '#',
  },
  {
    id: 7,
    title: 'Three Best Rated',
    description:
      'Mitchell S. Sexner has been handpicked as one of the Top 3 Criminal Defense lawyers in Chicago by ThreeBestRated.',
    image: `${AWARD_BASE}/Best-Business-of-2024-Three-Best-Rated-300x268%201%20(1).png`,
    profileUrl: '#',
  },
  {
    id: 8,
    title: '10 Best Personal Criminal Law Attorneys',
    description:
      'Mitchell S. Sexner has been recognized by the American Institute of Criminal Law Attorneys as one of the 10 Best.',
    image: `${AWARD_BASE}/av-9-2.png%201.png`,
    profileUrl: '#',
  },
  {
    id: 9,
    title: 'BBB Rating',
    description:
      'Mitchell S. Sexner & Associates LLC has received 5 out of 5 stars and an A+ BBB Rating for commitment to customer satisfaction.',
    image: `${AWARD_BASE}/blue-seal-280-80-bbb-88597979%201.png`,
    profileUrl: '#',
  },
  {
    id: 10,
    title: 'Avvo Rating',
    description:
      'Mitchell S. Sexner is Avvo rated at 10.0 Superb, reflecting the highest level of professional excellence.',
    image: `${AWARD_BASE}/avvo%201.png`,
    profileUrl: '#',
  },
  {
    id: 11,
    title: 'Top 10 Criminal Defense Attorney',
    description:
      'Mitchell S. Sexner has been selected as a Top 10 Criminal Defense Attorney by Attorney and Practice Magazine.',
    image: `${AWARD_BASE}/av-11-2.png%201.png`,
    profileUrl: '#',
  },
  {
    id: 12,
    title: "Avvo Clients' Choice Award",
    description:
      'Mitchell S. Sexner is a proud recipient of the Avvo Clients\' Choice Award for outstanding client satisfaction.',
    image: `${AWARD_BASE}/avvo%201%20%281%29.png`,
    profileUrl: '#',
  },
  {
    id: 13,
    title: 'Client Champion Gold 2022',
    description:
      'Mitchell S. Sexner has been selected for inclusion by Super Lawyers, a national rating service of outstanding lawyers from more than 70 practice areas who have attained a high degree of peer recognition and professional achievement.',
    image: `${AWARD_BASE}/Mitchell_Sexner_CR_Gold_300%201.png`,
    profileUrl: '#',
  },
]

const LeafDecoration = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="48"
    height="24"
    viewBox="0 0 48 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M2 12c4-4 10-6 16-4 4 1.5 8 4 12 8-4-2-8-4-12-4-6 0-12 2-16 0zm44 0c-4-4-10-6-16-4-4 1.5-8 4-12 8 4-2 8-4 12-4 6 0 12 2 16 0z"
      stroke="#C8A24F"
      strokeWidth="1.2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
)

export default function AboutAwards() {
  return (
    <Section className="bg-[#F5F0E8]" id="awards-memberships">
      <Container>
        {/* Section title with decorations */}
        <div className="flex flex-col items-center mb-10 md:mb-12 lg:mb-14">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <LeafDecoration className="hidden sm:block shrink-0" />
            <h2 className="font-libre text-[30px] md:text-[48px] font-bold text-primary text-center">
              Awards & Memberships
            </h2>
            <LeafDecoration className="hidden sm:block shrink-0 scale-x-[-1]" />
          </div>
          <span
            className="mt-3 w-20 h-0.5 bg-[#C8A24F] rounded-full"
            aria-hidden
          />
        </div>

        {/* Grid of award cards - same size for all including Client Champion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {awards.map((award) => (
            <article
              key={award.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col p-5 md:p-6 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-16 md:h-20 mb-4 flex items-center justify-center shrink-0">
                <Image
                  src={award.image}
                  alt=""
                  width={120}
                  height={80}
                  className="object-contain object-center max-h-full w-auto"
                />
              </div>
              <p className="font-poppins text-primary/90 text-[14px] leading-relaxed flex-1 line-clamp-5">
                {award.description}
              </p>
              <Link
                href={award.profileUrl}
                className="mt-4 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#E8DCC8] border border-[#C8A24F] text-primary font-poppins font-medium text-[16px] hover:bg-[#DDD0BC] transition-colors w-fit"
              >
                View profile
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
