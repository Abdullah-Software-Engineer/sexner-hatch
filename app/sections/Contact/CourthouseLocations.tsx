import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { COURTHOUSE_LOCATIONS } from '../../../lib/constants'

export default function CourthouseLocations() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[30px] md:text-[48px] font-normal text-black mb-2.5 relative inline-block">
            Courthouse locations
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-[60px] h-0.5 bg-secondary" aria-hidden="true"></span>
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {COURTHOUSE_LOCATIONS.map(({ name }) => (
            <li key={name} className="flex">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm py-5 px-4 text-center font-poppins text-primary text-[14px] hover:shadow-md hover:border-secondary transition-all w-full">
                {name}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
