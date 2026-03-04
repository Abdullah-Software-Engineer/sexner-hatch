/**
 * Practice area page content keyed by slug.
 * Used on /practice-areas/[slug] to render custom sections and TOC.
 */
export type PracticeAreaSection = {
  id: string
  title: string
  body: string
}

export type PracticeAreaContent = {
  tableOfContents: { id: string; label: string }[]
  sections: PracticeAreaSection[]
  ctaTitle: string
  ctaBody: string
  ctaPhone: string
  ctaPhoneRaw: string
}

const ARSON_CONTENT: PracticeAreaContent = {
  tableOfContents: [
    { id: 'what-is-arson', label: 'What is Arson and Residential Arson?' },
    { id: 'aggravated-arson', label: 'What is Aggravated Arson?' },
    { id: 'death-from-arson', label: 'What if someone dies due to an act of Arson?' },
    { id: 'possession-explosives', label: 'What if I am in possession of explosives?' },
    { id: 'how-police-solve-arson', label: 'So, how do Police solve cases involving Arson?' },
    { id: 'speak-to-team', label: 'Speak to our Experienced Chicago Defense Legal Team' },
  ],
  sections: [
    {
      id: 'what-is-arson',
      title: 'What is Arson and Residential Arson?',
      body:
        'Arson is the knowing damage of property worth $150+ via fire or explosives without consent or to defraud insurers. It is a Class 2 Felony (3–7 years prison). Residential Arson and Place of Worship Arson are elevated to Class 1 Felonies (4–15 years). By law, these charges are not eligible for probation.',
    },
    {
      id: 'aggravated-arson',
      title: 'What is Aggravated Arson?',
      body:
        'This charge applies if an offender knowingly damages a structure (including vehicles or schools) while people are present, or if the fire causes great bodily harm or injures first responders. As a Class X Felony, it carries 6–30 years in prison, potentially up to 60 years with aggravating factors. Notably, there is no statute of limitations for Arson or Aggravated Arson in Illinois.',
    },
    {
      id: 'death-from-arson',
      title: 'What if someone dies due to an act of Arson?',
      body:
        'While Illinois has abolished the death penalty, a death resulting from arson is prosecuted as First-Degree Murder. Sentences range from 20–60 years to natural life in prison without parole. Prosecution for murder via arson can be commenced at any time, regardless of how many years have passed.',
    },
    {
      id: 'possession-explosives',
      title: 'What if I am in possession of explosives?',
      body:
        'Possessing, manufacturing, or transporting explosive compounds or detonation devices with the intent to commit a felony is a Class 1 Felony. This carries a mandatory prison sentence of 4–30 years. The law distinguishes between legal uses (like model rocketry) and criminal intent involving volatile substances.',
    },
    {
      id: 'how-police-solve-arson',
      title: 'So, how do Police solve cases involving Arson?',
      body:
        'Fire Marshals and forensic investigators analyze the point of origin and test for chemical accelerants like gasoline or alcohol. They look for device "signatures" that may link a fire to specific individuals or groups. Because forensic errors can lead to wrongful convictions, a defense team must use independent scientific experts to scrutinize the state\'s evidence and methodology.',
    },
  ],
  ctaTitle: 'Speak to our Experienced Chicago Defense Legal Team',
  ctaBody:
    'Since 1990, Mitchell S. Sexner & Associates LLC has defended clients against high-stakes criminal charges. We offer deep experience in trial advocacy and constitutional protection. Our team is available 24/7 at',
  ctaPhone: '(312) 262-3746',
  ctaPhoneRaw: '3122623746',
}

const CONTENT_BY_SLUG: Record<string, PracticeAreaContent> = {
  arson: ARSON_CONTENT,
}

export function getPracticeAreaContent(slug: string): PracticeAreaContent | null {
  return CONTENT_BY_SLUG[slug] ?? null
}
