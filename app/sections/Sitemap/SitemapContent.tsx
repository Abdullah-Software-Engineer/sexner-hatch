'use client'

import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

const SITEMAP_INTRO =
  'Use this page to quickly find any section of our website. We serve clients across the Chicago area and Illinois with experienced criminal defense representation.'

const PAGES_COL1 = [
  {
    label: 'About us',
    href: '/about',
    children: [
      { label: 'Matthew J. Hickey', href: '/about' },
      { label: 'Mitchell S. Sexner', href: '/about' },
      { label: 'Al B. Trujillo', href: '/about' },
      { label: 'Cleveland A. Tyson Jr.', href: '/about' },
    ],
  },
  { label: 'What sets us apart', href: '/#what-sets-us-apart' },
  { label: 'Case results', href: '/results' },
  { label: 'Contact us', href: '/contact' },
]

const PAGES_COL2 = [
  { label: 'Criminal Law And Your Rights', href: '/practice-area' },
  { label: 'Payments', href: '/make-payment' },
  { label: 'Zoom Court Information', href: '/resources' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Sitemap', href: '/sitemap' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Privacy policy', href: '/privacy-policy' },
]

const PRACTICE_AREAS_COL1 = [
  { label: 'Arson', href: '/practice-area' },
  {
    label: 'Assault & Battery',
    href: '/practice-area',
    children: [
      'Aggravated Domestic Battery Defense Attorney in Chicago',
      'First Degree Murder',
      'Chicago Criminal Defense Attorney',
    ],
  },
  { label: 'Child Endangerment', href: '/practice-area' },
  { label: 'Contributing to the Delinquency of a Minor', href: '/practice-area' },
  {
    label: 'Crimes by a Minor',
    href: '/practice-area',
    children: ['Drug Crime', 'DUI', 'Minor In Possession', 'Minor Property Crimes'],
  },
  { label: 'Disorderly Conduct', href: '/practice-area' },
  {
    label: 'DUI',
    href: '/practice-area',
    children: [
      'Alcohol Evaluation',
      'Breath Test',
      'Chicago Aggravated DUI Attorney',
      'Driving Under The Influence Of Cannabis',
      'DUI Blood Test',
      'DUI Sentence Calculator',
      'DUI Urine Tests In Illinois',
      'Field Sobriety Tests',
      'Statutory Summary Suspension',
      '5 Ways to Beat a Statutory Summary Suspension',
      'Underage DUI Defense Attorney in Chicago',
    ],
  },
]

const PRACTICE_AREAS_COL2 = [
  { label: 'Domestic Violence', href: '/practice-area' },
  {
    label: 'Drug Crimes',
    href: '/practice-area',
    children: ['Marijuana Possession', 'Medical Marijuana FAQs', 'Transportation and Use of Cannabis', 'Methamphetamine'],
  },
  { label: 'Guns & Weapons', href: '/practice-area' },
  { label: 'Harassing And Obscene Communications', href: '/practice-area' },
  { label: 'Identity Theft', href: '/practice-area' },
  { label: 'Kidnapping', href: '/practice-area' },
  { label: 'Murder, Manslaughter, And Homicide', href: '/practice-area' },
  { label: 'Petty Offenses, Misdemeanors, and Felonies', href: '/practice-area' },
  { label: 'Police Brutality', href: '/practice-area' },
  { label: 'Property Crimes', href: '/practice-area' },
  { label: 'Resisting Arrest / Obstruction Of Justice', href: '/practice-area' },
  {
    label: 'Sex Crimes',
    href: '/practice-area',
    children: [
      'Aggravated Sexual Assault',
      'Chicago Attorneys for Indecent Solicitation of a Child Defense',
      'Chicago Child Pornography Defense Attorneys',
      'Sexual Assault and Sexual Abuse',
    ],
  },
]

const PRACTICE_AREAS_COL3 = [
  { label: 'Solicitation and Prostitution', href: '/practice-area' },
  {
    label: 'Theft, Robbery & Burglary',
    href: '/practice-area',
    children: ['Carjacking', 'Retail Theft'],
  },
  {
    label: 'Traffic Violation',
    href: '/practice-area',
    children: [
      'Aggravated Speeding',
      'Car Insurance Violations',
      'Failure to Reduce Speed',
      'Hit and Run Offenses',
      'How to Get a Driving Record in Illinois',
      'How to Read an Illinois Driving Abstract',
      'No Valid License',
      'Drivers License Reinstatement Hearings',
      'Reinstating Your Drivers License',
      'Reckless Driving',
      "Scott's Law",
      'Speeding Ticket Tools, Tactics and Tricks',
    ],
  },
]

const BLOGS_COL1 = [
  'Holy Misdemeanor',
  'The Menendez Brothers: The Shrinking Case That Continues To Grip America',
  'Lawsuits Filed Over Abusive Treatment of Prisoners',
  'The Protect Illinois Communities Act (PICA)',
  'Violated For A Moving Violation In The Chicago Area?',
  'What is SR-22 and Why Do I Need It to Keep My Driver\'s License?',
  'Can Police Interrogate Children Without A Lawyer Present?',
  'Protecting Yourself Against False Allegations of Domestic Violence',
  'How Does Electronic Monitoring in Chicago Work?',
  'How to Avoid an Assault Charge',
  'Hidden Cameras Lead to Criminal Charges and Lawsuits in Chicago',
  'What Should I Do If I Have a Warrant for My Arrest in Chicago?',
  'Can CPD Arrest Me with No Evidence?',
]

const BLOGS_COL2 = [
  'Jury Returns Verdict In Sexner-Hatch Criminal Trial',
  'Hidden Camera Scandal in Winnebago Civil & Criminal Legal Consequences',
  'Mitchell Sexner & Associates LLC - Award Winning Criminal Attorneys Since 1990',
  'DUI News for Chicago and All of Illinois',
  'Your Quick Guide to Driving Under the Influence',
  'What is Resisting or Attempting to Evade a Police Officer in Chicago?',
  "What's a Court Purpose Driving Abstinent?",
  'Is Weed Legal in Illinois or Not?',
  'What is an Indictment?',
  'Why Do People Want to Steal my Catalytic Converter?',
  'What Happens When You Get Arrested?',
  'Differences Between Drug Trafficking and Possession',
  'What to Do if You Are Caught with a Schedule II Drug in Illinois?',
  'Honesty is the Best Policy',
  'How Long Does a DUI Stay on Record?',
  'How to Approach a Cocaine Charge',
  'Can I Get a Felony Expunged?',
  'What Qualifies as Drug Paraphernalia?',
  'Can Police Force Me to Give Blood, Breath or Urine When Arrested for DUI?',
  'Concealed Carry in Chicago-and Across Illinois',
  'Chicago Police Shooting of Adam Toledo and the Importance of Video Evidence',
  "How to 'Pass Charges' on a Chicago Criminal Case",
  'Can I be Arrested for Road Rage in Chicago?',
]

const BLOGS_COL3 = [
  "Julio Manglalong Murder Case Shows a Light on 'Ghost Guns'",
  'Police Brutality: Your Guide to Justice',
  "How Will Trump's Election Affect Non-Citizens Charged with Criminal or Traffic Matters?",
  'The Insider Case Against Bryan Kohberger',
  'The Illinois Assault Weapon Ban',
  'Are There Still Cash Bail Bonds in Chicago?',
  'Suspended License Lawyers Near You - Sexner & Associates LLC',
  'Can You Be Arrested for the Clothes You Wear?',
  'Can a Judge Reduce my Court Costs?',
  'New Illinois Criminal and Traffic Laws for 2023',
  'New Cannabis Enforcement Issues on the Horizon',
  "Can I Get 'Day-for-Day' Credit on my Jail Sentence?",
  'What You Need to Know About Illinois Weapons Charges',
  'Everything You Need to Know About Your Heroin Charge',
  'How Do Lawyers Charge for Criminal Cases?',
  'Can You Get a DUI for Being Hungover?',
  "What's the Difference Between Parole and Probation?",
  'How Can I be Convicted Without Video Evidence?',
  'How to Beat a DUI in Illinois',
  'How to Avoid DUIs During the Holidays',
  'Will an Illinois Expungement Erase my Whole Criminal History?',
  'New Illinois Law Affects Driver\'s Licenses, Police, Bail and Criminal Cases',
  'The Derek Chauvin Trial and the Importance of Witness Testimony',
  'Can You Be Arrested Because of How You Smell?',
  'Can Shoplifting Happen By Accident?',
]

const COURTHOUSE_COL1 = [
  '111th Street Branch Court',
  '51st Street Branch Court',
  'Addison Field Court',
  'Aurora Branch Court',
  'Belmont & Western Courthouse',
  'Bridgeview Courthouse',
  'Cook County Criminal Court',
  'Downers Grove Field Court',
]
const COURTHOUSE_COL2 = [
  'Elgin Branch Court',
  'Flournay Branch Court',
  'Grand Avenue Branch Court',
  'Harrison Branch Court',
  'Kane Branch Court',
  'Markham Courthouse',
  'Maywood Courthouse',
  'Mundelein Branch Court',
]
const COURTHOUSE_COL3 = [
  'Park City Branch Court',
  'Richard J. Daley Center',
  'Rolling Meadows Courthouse',
  'Round Lake Branch Court',
  'Skokie Courthouse',
  'St. Charles Courthouse',
  'Waukegan Courthouse',
  'Wheaton Courthouse',
]

const AREAS_SERVED = [
  { label: 'Arlington Heights', href: '/courthouse-location' },
  { label: 'Buffalo Grove Criminal Defense Lawyers', href: '/courthouse-location' },
  { label: 'Clarendon Hills Criminal Defense Attorneys', href: '/courthouse-location' },
  { label: 'Des Plaines Criminal Defense Lawyer', href: '/courthouse-location' },
  { label: 'Elgin Criminal Defense Attorneys', href: '/courthouse-location' },
  { label: 'Long Grove Criminal Defense Attorney', href: '/courthouse-location' },
  { label: 'Palatine Criminal Defense Lawyer', href: '/courthouse-location' },
  { label: 'Waukegan Criminal Defense Lawyers', href: '/courthouse-location' },
]

const YOUR_RIGHTS_COL1 = [
  'Alternative Sentencing and Deferred Prosecution Programs',
  'Alternatives To Incarceration',
  'Burden Of Proof',
  'Can A Victim Drop Charges?',
  'Can the Police Search my Smartphone?',
  'Court Room Appearance And Etiquette',
  'Criminal Statutes of Limitations',
  'Deferred Prosecutions',
  'Discovery',
  'Do I Need A Lawyer?',
  'Electronic Monitoring Devices: Big Brother Is Watching You!',
  'Expungements',
]
const YOUR_RIGHTS_COL2 = [
  'Hearing Vs Indictment',
  'How to Get Out of Jail in Illinois',
  'How to Schedule a Jail Visit in Illinois',
  'How to Write a Character Letter',
  'Immigration And Criminal / Traffic Cases',
  'Jury And Bench Trials',
  'Miranda Warnings',
  'Plea Negotiations',
  'Probation',
  'Search Warrants And Evidence Suppression',
  'Self Defense',
  'Sentence Violations',
]
const YOUR_RIGHTS_COL3 = [
  'Sentencing: Who Decides The Punishment, And How It is Determined',
  'Speaking To Police',
  'The Use Of Recorded Or Videotaped Conversations',
  'What Is A Mitigation Package?',
  'What is a Photo Lineup?',
  'What is an Arrest?',
  'What is Hearsay?',
  'What is Probable Cause?',
  'What is Probable Cause? And What Rights Do Passengers Have?',
  'What is the Difference Between a Misdemeanor and a Felony?',
]

const VIDEOS = [
  { label: 'Criminal Record Expungement Video', href: '/resources' },
  { label: 'DUI Video Transcript', href: '/resources' },
  { label: 'Plea Bargain Video Transcript', href: '/resources' },
  { label: 'Search and Seizure Video', href: '/resources' },
  { label: 'What is Battery?', href: '/resources' },
]

const linkClass =
  'hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200 rounded transition-colors'

function PagesListColumn({
  items,
}: {
  items: Array<
    | { label: string; href: string }
    | { label: string; href: string; children: Array<{ label: string; href: string }> }
  >
}) {
  return (
    <ul className="space-y-2 list-disc list-inside text-primary">
      {items.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className={linkClass}>
            {item.label}
          </Link>
          {'children' in item && item.children && (
            <ul className="mt-1.5 ml-4 space-y-1 list-[circle] list-inside text-sm">
              {item.children.map((child) => (
                <li key={child.label}>
                  <Link href={child.href} className={linkClass}>
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

function PracticeAreasColumn({
  items,
}: {
  items: Array<
    | { label: string; href: string }
    | { label: string; href: string; children: string[] }
  >
}) {
  return (
    <ul className="space-y-2 list-disc list-inside text-primary">
      {items.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className={linkClass}>
            {item.label}
          </Link>
          {'children' in item && item.children && (
            <ul className="mt-1.5 ml-4 space-y-1 list-[circle] list-inside text-sm">
              {item.children.map((child) => (
                <li key={child}>{child}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

function BlogLinksColumn({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 list-disc list-inside text-primary">
      {items.map((title) => (
        <li key={title}>
          <Link href="/blog" className={linkClass}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function SimpleListColumn({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 list-disc list-inside text-primary">
      {items.map((item) => (
        <li key={item}>
          <Link href="/courthouse-location" className={linkClass}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function YourRightsColumn({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 list-disc list-inside text-primary">
      {items.map((item) => (
        <li key={item}>
          <Link href="/resources" className={linkClass}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function SitemapCard({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="bg-gray-200/80 rounded-xl p-6 md:p-8 border border-gray-300/60 scroll-mt-24"
      aria-labelledby={`${id}-heading`}
    >
      <h2
        id={`${id}-heading`}
        className="font-playfair font-semibold text-xl md:text-2xl text-primary mb-6"
      >
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function SitemapContent() {
  return (
    <Section className="bg-gray-100 py-14 md:py-20">
      <Container>
        <p className="font-poppins text-primary/90 text-base md:text-lg max-w-2xl mb-6">
          {SITEMAP_INTRO}
        </p>
        <div className="mb-10 md:mb-12 flex flex-wrap gap-2">
          {[
            { id: 'pages', label: 'Pages' },
            { id: 'practice-areas', label: 'Practice Areas' },
            { id: 'courthouse-locations', label: 'Courthouse Locations' },
            { id: 'areas-served', label: 'Areas Served' },
            { id: 'your-rights', label: 'Your Rights' },
            { id: 'videos', label: 'Videos' },
            { id: 'blogs', label: 'Blogs' },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={linkClass + ' text-sm font-medium px-3 py-1.5 rounded-lg bg-gray-200/80 hover:bg-gray-300/80'}
            >
              {label}
            </a>
          ))}
        </div>
        <nav aria-label="Site map" className="space-y-8">
          <SitemapCard id="pages" title="Pages">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              <PagesListColumn items={PAGES_COL1} />
              <PagesListColumn items={PAGES_COL2} />
            </div>
          </SitemapCard>

          <SitemapCard id="practice-areas" title="Practice Areas">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <PracticeAreasColumn items={PRACTICE_AREAS_COL1} />
              <PracticeAreasColumn items={PRACTICE_AREAS_COL2} />
              <PracticeAreasColumn items={PRACTICE_AREAS_COL3} />
            </div>
          </SitemapCard>

          <SitemapCard id="courthouse-locations" title="Courthouse Locations">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <SimpleListColumn items={COURTHOUSE_COL1} />
              <SimpleListColumn items={COURTHOUSE_COL2} />
              <SimpleListColumn items={COURTHOUSE_COL3} />
            </div>
          </SitemapCard>

          <SitemapCard id="areas-served" title="Areas Served">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-2 list-disc list-inside text-primary">
              {AREAS_SERVED.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </SitemapCard>

          <SitemapCard id="your-rights" title="Your Rights">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <YourRightsColumn items={YOUR_RIGHTS_COL1} />
              <YourRightsColumn items={YOUR_RIGHTS_COL2} />
              <YourRightsColumn items={YOUR_RIGHTS_COL3} />
            </div>
          </SitemapCard>

          <SitemapCard id="videos" title="Videos">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-2 list-disc list-inside text-primary">
              {VIDEOS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </SitemapCard>

          <SitemapCard id="blogs" title="Blogs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <BlogLinksColumn items={BLOGS_COL1} />
              <BlogLinksColumn items={BLOGS_COL2} />
              <BlogLinksColumn items={BLOGS_COL3} />
            </div>
          </SitemapCard>
        </nav>
      </Container>
    </Section>
  )
}
