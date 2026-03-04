// ============================================
// Site Configuration
// ============================================
export const SITE_CONFIG = {
  name: 'Sexner & Associates LLC',
  title: 'Chicago Criminal Defense Attorneys | Sexner & Associates LLC',
  description: 'Experienced criminal defense attorneys in Chicago with over 30 years of experience. We have helped over 20,000 clients with their legal matters.',
  phone: '(312) 940-3228',
  phoneRaw: '3129403228',
  address: '2126 W Van Buren St. Chicago, IL 60612',
  email: 'mitch@sexner.com',
  fax: '847.690.9998',
} as const

// ============================================
// Navigation Links
// ============================================
export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/resources', label: 'Resources' },
  { href: '/results', label: 'Results' },
  { href: '/contact', label: 'Contact' },
] as const

// Resources dropdown sub-links (shown under Resources in header)
export const RESOURCES_DROPDOWN_LINKS = [
  { href: '/your-right', label: 'Your Rights' },
  { href: '/blog', label: 'Blog' },
  { href: '/make-payment', label: 'Make a Payment' },
  { href: '/courthouse-location', label: 'Detailed Courthouse Location' },
] as const

// ============================================
// Practice Areas Data (full list for dropdown & service cards)
// ============================================
export const PRACTICE_AREAS_FULL = [
  { title: 'Arson', slug: 'arson' },
  { title: 'Assault & Battery', slug: 'assault-battery' },
  { title: 'Carjacking', slug: 'carjacking' },
  { title: 'Cannabis', slug: 'cannabis' },
  { title: 'Child Endangerment', slug: 'child-endangerment' },
  { title: 'Contributing to Delinquency', slug: 'contributing-to-delinquency' },
  { title: 'Crimes by a Minor', slug: 'crimes-by-a-minor' },
  { title: 'Disorderly Conduct', slug: 'disorderly-conduct' },
  { title: 'Domestic Violence', slug: 'domestic-violence' },
  { title: 'Drug Crimes', slug: 'drug-crimes' },
  { title: 'DUI Defense', slug: 'dui-defense' },
  { title: 'Expungements', slug: 'expungements' },
  { title: 'Guns & Weapons', slug: 'guns-weapons' },
  { title: 'Harassment', slug: 'harassment' },
  { title: 'Identity Theft', slug: 'identity-theft' },
  { title: 'Kidnapping', slug: 'kidnapping' },
  { title: 'License Reinstatement', slug: 'license-reinstatement' },
  { title: "Murder & Reckless Homicide", slug: 'murder-reckless-homicide' },
  { title: 'Pleas & Sentencing', slug: 'pleas-sentencing' },
  { title: 'Police Brutality', slug: 'police-brutality' },
  { title: 'Property Crimes', slug: 'property-crimes' },
  { title: 'Resisting / Obstructing Arrest', slug: 'resisting-obstructing-arrest' },
  { title: 'Retail Theft', slug: 'retail-theft' },
  { title: "Scott's Law", slug: 'scotts-law' },
  { title: 'Search Warrants', slug: 'search-warrants' },
  { title: 'Solicitation', slug: 'solicitation' },
  { title: 'Speeding / Aggravated', slug: 'speeding-aggravated' },
  { title: 'Suspended / Revoked License', slug: 'suspended-revoked-license' },
  { title: 'Theft, Burglary, Robbery', slug: 'theft-burglary-robbery' },
  { title: 'Traffic Violation', slug: 'traffic-violation' },
] as const

// Practice area descriptions for the Practice Areas listing page
export const PRACTICE_AREAS_DESCRIPTIONS: Record<string, string> = {
  'arson': 'Arson charges carry severe penalties and often rely on complex forensic evidence. We carefully examine investigative methods, intent, and expert findings to build a strong defense.',
  'assault-battery': 'Allegations of assault or battery can impact your freedom and reputation. We analyze witness statements, self-defense claims, and evidence to protect your rights.',
  'carjacking': 'Carjacking is a serious felony that demands an aggressive defense. We challenge identification, intent, and prosecutorial assumptions at every stage.',
  'cannabis': 'Despite changing laws, cannabis-related charges can still lead to serious consequences. We defend against possession, distribution, and intent-to-deliver allegations.',
  'child-endangerment': 'Child endangerment accusations are sensitive and carry lasting consequences. We provide strategic, discreet defense aimed at protecting your rights and your future.',
  'contributing-to-delinquency': 'These charges involve allegations of encouraging or assisting a minor in unlawful conduct. We focus on intent and factual inconsistencies to challenge the prosecution\'s case.',
  'crimes-by-a-minor': 'Juvenile offenses require a defense that considers long-term impact. We advocate for outcomes that prioritize rehabilitation and protect future opportunities.',
  'disorderly-conduct': 'Disorderly conduct charges often stem from public disputes or misunderstandings. We work to minimize penalties or pursue dismissal whenever possible.',
  'domestic-violence': 'Domestic violence cases are complex and emotionally charged. We thoroughly examine evidence and pursue a defense strategy tailored to the facts.',
  'drug-crimes': 'Drug charges range from possession to trafficking and can carry severe penalties. We challenge unlawful searches and fight to suppress improperly obtained evidence.',
  'dui-defense': 'DUI cases frequently depend on traffic stops and testing procedures. We scrutinize police conduct and testing accuracy to seek reduced or dismissed charges.',
  'expungements': 'A criminal record can limit employment and housing opportunities. We guide clients through the process of clearing eligible records.',
  'guns-weapons': 'Weapons charges often involve strict penalties and constitutional issues. We examine possession, intent, and search legality to build a strong defense.',
  'harassment': 'Harassment allegations can affect your personal and professional life. We challenge credibility and evidence to protect your reputation.',
  'identity-theft': 'Identity theft cases typically involve financial records and digital evidence. We carefully analyze documentation and intent to defend against felony charges.',
  'kidnapping': 'Kidnapping allegations are among the most serious criminal charges. We provide trial-ready representation focused on protecting your freedom.',
  'license-reinstatement': 'License suspensions can disrupt daily life and employment. We represent clients in hearings to pursue reinstatement of driving privileges.',
  'murder-reckless-homicide': 'These life-altering charges require experienced and meticulous trial preparation. We build comprehensive defenses in high-stakes felony cases.',
  'pleas-sentencing': 'Plea negotiations and sentencing hearings significantly impact case outcomes. We advocate strategically to pursue favorable resolutions.',
  'police-brutality': 'Allegations involving police misconduct can affect the integrity of a case. We challenge constitutional violations and unlawful conduct.',
  'property-crimes': 'Property crime charges may include damage, trespass, or burglary. We analyze intent and evidence to seek reduced or dismissed charges.',
  'resisting-obstructing-arrest': 'These charges often arise during tense encounters with law enforcement. We review officer conduct and available footage to challenge the allegations.',
  'retail-theft': 'Retail theft accusations can lead to criminal records and fines. We work to reduce penalties and pursue dismissal when possible.',
  'scotts-law': 'Scott\'s Law violations involve failure to move over for emergency vehicles. We defend against these traffic-related charges to minimize fines and license consequences.',
  'search-warrants': 'Search warrant cases focus on whether law enforcement followed constitutional procedures. We scrutinize probable cause and execution to suppress unlawful evidence.',
  'solicitation': 'Solicitation charges require discreet and strategic defense. We carefully examine the evidence and protect client privacy throughout the process.',
  'speeding-aggravated': 'Aggravated speeding can result in criminal penalties beyond simple fines. We work to reduce charges and protect your driving record.',
  'suspended-revoked-license': 'Driving on a suspended or revoked license can lead to additional consequences. We defend against new charges and address underlying suspension issues.',
  'theft-burglary-robbery': 'These offenses range from non-violent theft to serious robbery allegations. We challenge identification, intent, and evidence to build a strong defense.',
  'traffic-violation': 'Traffic violations can impact your license and insurance rates. We provide representation aimed at minimizing penalties and protecting your record.',
}

// Homepage practice area cards (shown in "Our Practice Areas & Services" section)
export const PRACTICE_AREAS = [
  { id: '1', title: 'Aggravated Speeding', description: 'Exceeding limits by 26+ mph is a criminal misdemeanour in Illinois. We defend you against heavy fines, jail time, and potential license loss.', slug: 'speeding-aggravated' },
  { id: '2', title: 'DUI Defense', description: 'Driving under the influence carries severe penalties. Whether a first-time misdemeanour or a felony charge, we fight to protect your freedom and license.', slug: 'dui-defense' },
  { id: '3', title: 'Suspended Licenses', description: 'Driving while suspended or revoked risks imprisonment. Our team identifies the root cause of your suspension to help restore your legal driving privileges.', slug: 'suspended-revoked-license' },
  { id: '4', title: 'License Reinstatement', description: 'Navigating Secretary of State hearings is complex. We provide the experienced guidance necessary to secure hardship permits or a full restoration of your driver\'s license.', slug: 'license-reinstatement' },
  { id: '5', title: 'Traffic Violations', description: 'From reckless driving to basic citations, multiple offences can lead to criminal records. We work to minimise fines, school requirements and long-term impacts.', slug: 'traffic-violation' },
  { id: '6', title: 'Property Crimes', description: 'Facing charges for criminal trespass or property damage? We provide a robust defence against these offences to avoid restitution, fines, and potential incarceration.', slug: 'property-crimes' },
] as const

// ============================================
// Courthouse Locations (for detail pages)
// ============================================
export const COURTHOUSE_LOCATIONS = [
  { slug: '111th-street-branch-court', name: '111th Street Branch Court' },
  { slug: '51st-street-branch-court', name: '51st Street Branch Court' },
  { slug: 'addison-field-court', name: 'Addison Field Court' },
  { slug: 'aurora-branch-court', name: 'Aurora Branch Court' },
  { slug: 'belmont-western-courthouse', name: 'Belmont & Western Courthouse' },
  { slug: 'bridgeview-courthouse', name: 'Bridgeview Courthouse' },
  { slug: 'cook-county-criminal-court', name: 'Cook County Criminal Court' },
  { slug: 'downers-grove-field-court', name: 'Downers Grove Field Court' },
  { slug: 'elgin-branch-court', name: 'Elgin Branch Court' },
  { slug: 'flournoy-branch-court', name: 'Flournoy Branch Court' },
  { slug: 'grand-avenue-branch-court', name: 'Grand Avenue Branch Court' },
  { slug: 'harrison-branch-court', name: 'Harrison Branch Court' },
  { slug: 'kane-branch-court', name: 'Kane Branch Court' },
  { slug: 'markham-courthouse', name: 'Markham Courthouse' },
  { slug: 'maywood-courthouse', name: 'Maywood Courthouse' },
  { slug: 'mundelein-branch-court', name: 'Mundelein Branch Court' },
  { slug: 'park-city-branch-court', name: 'Park City Branch Court' },
  { slug: 'richard-j-daley-center', name: 'Richard J. Daley Center' },
  { slug: 'rolling-meadows-courthouse', name: 'Rolling Meadows Courthouse' },
  { slug: 'round-lake-branch-court', name: 'Round Lake Branch Court' },
  { slug: 'skokie-courthouse', name: 'Skokie Courthouse' },
  { slug: 'st-charles-courthouse', name: 'St. Charles Courthouse' },
  { slug: 'waukegan-courthouse', name: 'Waukegan Courthouse' },
  { slug: 'wheaton-courthouse', name: 'Wheaton Courthouse' },
] as const

// ============================================
// Stats Data
// ============================================
export const STATS = [
  {
    id: '1',
    label: 'Years of experience',
    value: '30+',
  },
  {
    id: '2',
    label: 'People we have helped',
    value: '20,000+',
  },
] as const

// ============================================
// Footer Data
// ============================================
export const FOOTER_AREAS_SERVED = [
  'Arlington Heights',
  'Des Plaines',
  'Waukegan',
  'Buffalo Grove',
  'Clarendon Hills',
  'Elgin',
  'Long Grove',
  'Palatine',
] as const

export const FOOTER_SHORTCUTS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/meet-our-team', label: 'Meet our team' },
  { href: '/practice-areas', label: 'Practice areas' },
  { href: '/results', label: 'Results' },
  { href: '/testimonial', label: 'Testimonials' },
  { href: '/contact', label: 'Contact us' },
] as const

export const FOOTER_LEGAL_LINKS = [
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/privacy-policy', label: 'Privacy policy' },
  { href: '/terms-and-conditions', label: 'Terms and Conditions' },
  { href: '/sitemap', label: 'Sitemap' },
] as const

export const FOOTER_SOCIAL_LINKS = [
  { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
  { href: 'https://x.com', label: 'X', icon: 'x' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
] as const

export const FOOTER_COPYRIGHT = 'All rights reserved. Copyright © 2025 by Mitchell S. Sexner & Associates LLC'

// ============================================
// Theme Configuration
// ============================================
export const THEME = {
  colors: {
    primary: '#2A3F53',
    secondary: '#C8A24F',
  },
  breakpoints: {
    mobile: '0px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  container: {
    maxWidth: '1390px',
  },
} as const

// ============================================
// Team Members (for About team section, /team, and /team/[slug])
// ============================================
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Mitchell S. Sexner',
    slug: 'mitchell-s-sexner',
    title: 'Founding Attorney',
    image: '/About%20us/member.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
  },
  {
    id: 2,
    name: 'Mitchell S. Sexner',
    slug: 'mitchell-s-sexner-2',
    title: 'Attorney',
    image: '/About%20us/member.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
  },
  {
    id: 3,
    name: 'Mitchell S. Sexner',
    slug: 'mitchell-s-sexner-3',
    title: 'Attorney',
    image: '/About%20us/member.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
  },
  {
    id: 4,
    name: 'Mitchell S. Sexner',
    slug: 'mitchell-s-sexner-4',
    title: 'Attorney',
    image: '/About%20us/member.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
  },
] as const
