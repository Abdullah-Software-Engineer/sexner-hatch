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
                Mitchell S. Sexner is the founding attorney of Mitchell S. Sexner & Associates LLC, a law firm first established in 1990. A graduate of Northwestern University in Evanston and the IIT Chicago Kent College of Law in Chicago, he is a life-long Chicago area resident who has devoted his career to the protection and defense of those charged with criminal and traffic matters, as well as those injured due to the negligence of others.
              </p>
              
              <p>
                Mr. Sexner began his legal career at the Cook County States Attorney&apos;s Office where he prosecuted thousands of cases involving traffic matters, DUIs, juvenile crimes and all types of criminal offenses ranging from <Link href="#" className="underline decoration-gray-400 hover:text-secondary">disorderly conduct</Link> to attempted murder. Sometimes handling more than a hundred cases in a single day, he maintained a high attention to detail, while winning the vast majority of his trials, often being called upon to supervise or educate other prosecutors on the law during his tenure. Mr. Sexner has been a guest television commentator and worked for a period of time for the Illinois Secretary of State as well as the Cook County Clerk of the Circuit Court, further expanding his knowledge of the court system and driver&apos;s license privileges. He is admitted to the Federal Trial Bar and to the U.S. District Courts in Illinois, Hawaii, Texas, and Wisconsin.
              </p>
              
              <p>
                After leaving the States Attorney&apos;s Office, he opened the Law Offices of Mitchell S. Sexner in 1990, first in Chicago&apos;s northwest suburbs and later expanding to an additional office location in the city of Chicago to better serve the legal needs of all residents in the Northern portion of Illinois. Over the last 30 years, he has meticulously hand-picked a select group of experienced attorneys and support staff in order to provide the highest standards of legal services to those in need. In addition to hundreds of successfully litigated criminal and traffic cases, his firm has also been responsible for securing over $25,000,000 in settlements and verdicts for injured clients.
              </p>
              
              <p>
                For further information or to set up a free consultation to discuss your legal matter, contact Mitch Sexner at <a href="tel:3122623576" className="font-bold text-[#C5A059] hover:underline">(312) 262-3576</a> or by email at <a href="mailto:mitch@sexner.com" className="font-bold text-[#C5A059] hover:underline">mitch@sexner.com</a>.
              </p>
            </div>

            {/* Attorney profiles */}
            <div className="pt-2">
              <h3 className="font-poppins font-bold text-black text-[16px] uppercase tracking-wide mb-4">
                ATTORNEY PROFILES FOR MITCHELL S. SEXNER
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
