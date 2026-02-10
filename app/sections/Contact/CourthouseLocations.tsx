import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

const COURTHOUSE_LOCATIONS = [
  '111th Street Branch Court',
  '26th & California (Criminal)',
  'Daley Center (Civil)',
  '555 W. Harrison (Domestic Violence)',
  'Grand & Central Branch',
  'Skokie Courthouse',
  'Rolling Meadows Courthouse',
  'Maywood Courthouse',
  'Bridgeview Courthouse',
  'Markham Courthouse',
  'Chicago Lawn (63rd) Branch',
  'Harrison (Kedzie) Branch',
  'Leighton Criminal Court',
  'George N. Leighton Courthouse',
  'Richard J. Daley Center',
  'Englewood Branch Court',
  'First Municipal District',
  'Second Municipal District',
  'Third Municipal District',
  'Fourth Municipal District',
  'Fifth Municipal District',
  'Sixth Municipal District',
  'Juvenile Justice Division',
  'Traffic Court (Daley Center)',
]

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
          {COURTHOUSE_LOCATIONS.map((name) => (
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
