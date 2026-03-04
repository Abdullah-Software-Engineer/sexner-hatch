import Link from 'next/link'
import Container from '../../components/ui/Container'
import ScrollFollowingForm from '../../components/ScrollFollowingForm'
import { COURTHOUSE_LOCATIONS } from '../../lib/constants'

export default function DetailedCourthouseLocationContent() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
          {/* Left: Main content */}
          <div className="flex-1 lg:w-[58.33%] min-w-0">
            <h2 className="font-libre font-bold text-black text-[26px] md:text-[32px] mb-6">
              Courthouses in Chicago area
            </h2>

            <p className="font-poppins text-primary/80 text-sm md:text-base leading-relaxed mb-10 max-w-3xl">
              Navigating the legal systems can be overwhelming, especially when you are facing criminal charges. To help you identify where your case might be heard, here is an overview of the primary judicial hubs across the Chicago metropolitan area.
            </p>

            {/* Locations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COURTHOUSE_LOCATIONS.map(({ slug, name }) => (
                <Link
                  key={slug}
                  href={`/courthouse-location#${slug}`}
                  className="w-full text-left bg-[#F9F9F9] hover:bg-[#F0F0F0] border border-[#EAEAEA] rounded-lg px-6 py-4 font-poppins text-primary text-sm transition-colors duration-200 block"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Contact Form - Sticky */}
          <ScrollFollowingForm />
        </div>
      </Container>
    </section>
  )
}
