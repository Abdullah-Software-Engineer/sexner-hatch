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
    <Section className="bg-[#f5f5f5]">
      <Container>
        <h2 className="font-libre text-[26px] md:text-[32px] xl:text-[36px] font-semibold text-primary text-center mb-3">
          Courthouse locations
        </h2>
        <div
          className="mx-auto w-12 h-0.5 bg-secondary mb-10 md:mb-12"
          aria-hidden="true"
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {COURTHOUSE_LOCATIONS.map((name) => (
            <li key={name}>
              <div className="bg-white rounded-lg shadow-sm py-5 px-4 text-center font-poppins text-primary text-sm md:text-base hover:shadow-md transition-shadow">
                {name}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
