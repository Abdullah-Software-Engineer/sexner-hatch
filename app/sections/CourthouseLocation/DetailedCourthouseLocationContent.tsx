import Container from '../../components/ui/Container'
import ScrollFollowingForm from '../../components/ScrollFollowingForm'

// Placeholder locations based on the image
const COURTHOUSE_LOCATIONS = Array(16).fill('111th Street Branch Court')

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. 
              Lorem ipsum dolor sit amet, cons.
            </p>

            {/* Locations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COURTHOUSE_LOCATIONS.map((location, index) => (
                <button
                  key={index}
                  className="w-full text-left bg-[#F9F9F9] hover:bg-[#F0F0F0] border border-[#EAEAEA] rounded-lg px-6 py-4 font-poppins text-primary text-sm transition-colors duration-200"
                >
                  {location}
                </button>
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
