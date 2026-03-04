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
    title: 'National Trial Lawyers Top 100',
    description:
      'Mitchell S. Sexner has been named a "Top 100" Trial Lawyer by the National Trial Lawyers. Membership is obtained through special invitation and is extended only to those attorneys who exemplify superior qualifications.',
    image: `${AWARD_BASE}/av-2-1-1.png%201.png`,
    profileUrl: '#',
  },
  {
    id: 3,
    title: 'RUE Ratings',
    description:
      'Mitchell S. Sexner has been selected as one of the top 100 attorneys in Illinois and granted lifetime charter membership by RUE Ratings. Membership is based on extraordinary level of legal expertise, competency, professional reputation and ethical standards.',
    image: `${AWARD_BASE}/av-3-2.png%201.png`,
    profileUrl: '#',
  },
  {
    id: 4,
    title: 'Martindale-Hubbell AV Rating',
    description:
      'Mitchell S. Sexner has received an "AV" rating by Martindale-Hubbell, the highest rating a legal professional can attain for ethical standards and professional ability. Ratings include Legal Knowledge, Analytical Capabilities, Judgment, Communication Ability and Legal Experience.',
    image: `${AWARD_BASE}/av-4-2.png%201.png`,
    profileUrl: '#',
  },
  {
    id: 5,
    title: "Nation's Top One Percent",
    description:
      'Mitchell S. Sexner of Mitchell S. Sexner & Associates LLC has been named to the 2025 Nation\'s Top One Percent by the National Association of Distinguished Counsel, recognizing his exceptional legal excellence and leadership among the top attorneys in the United States.',
    image: `${AWARD_BASE}/nadc-top-1-percent-badge-300x300%201.png`,
    profileUrl: '#',
  },
  {
    id: 6,
    title: 'American Institute of Legal Counsel',
    description:
      'Recognized with this prestigious honor by the American Institute of Legal Counsel, an impartial attorney rating organization recognizing excellence among law firms.',
    image: `${AWARD_BASE}/av-5-2.png%201.png`,
    profileUrl: '#',
  },
  {
    id: 7,
    title: 'Three Best Rated',
    description:
      'Mitchell S. Sexner has been handpicked as one of the Top 3 Criminal Defense lawyers in Chicago, for multiple years. Three Best Rated® bases selections on a business\'s reviews, history, complaints, ratings, satisfaction, trust, cost, and general excellence.',
    image: `${AWARD_BASE}/Best-Business-of-2024-Three-Best-Rated-300x268%201%20(1).png`,
    profileUrl: '#',
  },
  {
    id: 8,
    title: '10 Best Personal Criminal Law Attorneys',
    description:
      'The American Institute of Criminal Law Attorneys has recognized the exceptional performance of Attorney Mitchell Sexner for consecutive years in the category of "10 Best Personal Criminal Law Attorneys for Client Satisfaction".',
    image: `${AWARD_BASE}/av-9-2.png%201.png`,
    profileUrl: '#',
  },
  {
    id: 9,
    title: 'BBB Rating',
    description:
      'Mitchell S. Sexner & Associates LLC has received 5 out of 5 stars based on Customer Reviews and a BBB Rating of A+. In addition, the BBB has determined that Mitchell S. Sexner & Associates LLC meets strict BBB accreditation standards.',
    image: `${AWARD_BASE}/blue-seal-280-80-bbb-88597979%201.png`,
    profileUrl: '#',
  },
  {
    id: 10,
    title: 'Avvo Rating',
    description:
      'Mitchell S. Sexner is Avvo rated at 10.0 Superb. He is widely recognized by the legal community for his exceptional professional conduct and experience. The Avvo directory uses an unbiased mathematical model to help assess a lawyer\'s qualifications.',
    image: `${AWARD_BASE}/avvo%201.png`,
    profileUrl: '#',
  },
  {
    id: 11,
    title: 'Attorney and Practice Magazine',
    description:
      'Attorney and Practice Magazine has selected Mitchell S. Sexner as a Top 10 Criminal Defense Attorney in multiple years.',
    image: `${AWARD_BASE}/av-11-2.png%201.png`,
    profileUrl: '#',
  },
  {
    id: 12,
    title: "Avvo Clients' Choice Award",
    description:
      'Mitch Sexner, the founder of Mitchell S. Sexner & Associates LLC, is a proud recipient of Avvo\'s Clients\' Choice Award.',
    image: `${AWARD_BASE}/avvo%201%20%281%29.png`,
    profileUrl: '#',
  },
  {
    id: 13,
    title: 'Super Lawyers',
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
        {/* Mitchell S. Sexner + Awards & Memberships */}
        <div className="flex flex-col items-center mb-10 md:mb-12 lg:mb-14">
          <h2 className="font-libre text-[26px] md:text-[36px] font-bold text-primary text-center mb-2">
            Mitchell S. Sexner
          </h2>
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <LeafDecoration className="hidden sm:block shrink-0" />
            <h3 className="font-libre text-[24px] md:text-[36px] font-bold text-primary text-center">
              Awards &amp; Memberships
            </h3>
            <LeafDecoration className="hidden sm:block shrink-0 scale-x-[-1]" />
          </div>
          <span
            className="mt-3 w-20 h-0.5 bg-[#C8A24F] rounded-full"
            aria-hidden
          />
        </div>

        {/* Grid of award cards - same size for all including Client Champion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 text-center">
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
                className="mt-4 self-center inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#E8DCC8] border border-[#C8A24F] text-primary font-poppins font-medium text-[16px] hover:bg-[#DDD0BC] transition-colors w-fit"
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
