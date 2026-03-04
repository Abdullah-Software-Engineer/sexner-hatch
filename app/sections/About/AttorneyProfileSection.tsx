import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import ScrollFollowingForm from '../../components/ScrollFollowingForm'

const ATTORNEY_PROFILES = [
  { label: 'Justia Profile', href: '#' },
  { label: 'Findlaw Profile', href: '#' },
  { label: 'HG.org Profile', href: '#' },
  { label: 'Martindale Profile', href: '#' },
  { label: 'Avvo Profile', href: '#' },
  { label: 'Lawyer.com Profile', href: '#' },
  { label: 'National Association of Distinguished Counsel', href: '#' },
  { label: 'Better Business Bureau Profile', href: '#' },
  { label: 'Google Business Profile', href: '#' },
]

export default function AttorneyProfileSection() {
  return (
    <Section className="bg-white" id="attorney-profile">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
          {/* Left column: Photo, name, title, bio, contact, profiles */}
          <div className="flex-1 lg:w-[58.33%] space-y-8">
            {/* Header image with overlay */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-md">
              <div className="relative w-full">
                <Image
                  src="/meet-our team/mitchell.webp"
                  alt="Mitchell S. Sexner, Founding Attorney"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
              
              {/* Gold Arrow in top right */}
              <Link
                href="#attorney-profile"
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-white shadow-md hover:bg-[#b08d48] transition-colors"
                aria-label="Scroll to profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -rotate-45">
                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                </svg>
              </Link>
              
              {/* Overlay: Gradient background with name and title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2A3F53]/95 to-[#2A3F53]/80 pt-16 pb-6 px-6 md:px-8">
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-14 bg-[#C5A059] shrink-0" aria-hidden />
                  <div>
                    <h2 className="font-poppins font-bold text-white text-2xl md:text-3xl leading-tight">
                      Mitchell S. Sexner
                    </h2>
                    <p className="font-poppins text-white/90 text-sm md:text-base font-medium mt-1">
                      Founding Attorney
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="font-poppins text-[#3C3C3C] text-[15px] md:text-base leading-relaxed space-y-6">
              <p>
                Mitchell S. Sexner is the founding attorney of Mitchell S. Sexner &amp; Associates LLC, established in 1990. A graduate of Northwestern University and Chicago-Kent College of Law, he is a lifelong Chicago-area resident dedicated to defending individuals charged with criminal and traffic offenses and representing those injured due to the negligence of others.
              </p>

              <p>
                He began his legal career at the Cook County State&apos;s Attorney&apos;s Office, prosecuting thousands of cases—from traffic violations to serious felonies—often handling 100+ cases per day. Known for meticulous preparation and trial success, he trained and supervised fellow prosecutors, served as a legal commentator, worked with the Illinois Secretary of State and Cook County Clerk, and is admitted to the Federal Trial Bar and U.S. District Courts in Illinois, Hawaii, Texas, and Wisconsin.
              </p>

              <p>
                After leaving the State&apos;s Attorney&apos;s Office, he founded the Law Offices of Mitchell S. Sexner, first in Chicago&apos;s northwest suburbs and later expanding to a Chicago office to better serve Northern Illinois. Over 30 years, he has carefully built a team of experienced attorneys and support staff, delivering the highest standard of legal services. His firm has successfully litigated hundreds of criminal and traffic cases and secured over $25 million in settlements and verdicts for injured clients.
              </p>

              <p>
                For more information or to schedule a free consultation, contact Mitch Sexner at <a href="tel:3122623576" className="font-bold text-[#C5A059] hover:underline">(312) 262-3576</a> or <a href="mailto:mitch@sexner.com" className="font-bold text-[#C5A059] hover:underline">mitch@sexner.com</a>.
              </p>
            </div>

            {/* Attorney profiles */}
            <div className="pt-2">
              <h3 className="font-poppins font-bold text-black text-[16px] uppercase tracking-wide mb-4">
                Attorney Profiles for Mitchell S. Sexner
              </h3>
              <div className="flex flex-wrap gap-x-1.5 gap-y-2 text-[15px] text-[#C5A059] font-poppins">
                {ATTORNEY_PROFILES.map((item, i) => (
                  <span key={item.label} className="inline-flex items-center">
                    <Link href={item.href} className="hover:underline hover:text-[#b08d48] transition-colors">
                      {item.label}
                    </Link>
                    {i < ATTORNEY_PROFILES.length - 1 && (
                      <span className="text-black ml-1.5">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Contact form - Sticky */}
          <ScrollFollowingForm />
        </div>
      </Container>
    </Section>
  )
}
