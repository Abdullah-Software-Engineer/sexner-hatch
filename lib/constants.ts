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
  { href: '/resources', label: 'Your Rights' },
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

// Legacy list (kept for any existing references; prefer PRACTICE_AREAS_FULL)
export const PRACTICE_AREAS = [
  { id: '1', title: 'Criminal Defense', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', slug: 'criminal-defense' },
  { id: '2', title: 'DUI Defense', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', slug: 'dui-defense' },
  { id: '3', title: 'Drug Crimes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', slug: 'drug-crimes' },
  { id: '4', title: 'Violent Crimes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', slug: 'violent-crimes' },
  { id: '5', title: 'White Collar Crimes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', slug: 'white-collar-crimes' },
  { id: '6', title: 'Domestic Violence', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', slug: 'domestic-violence' },
] as const

// ============================================
// Courthouse Locations (for detail pages)
// ============================================
export const COURTHOUSE_LOCATIONS = [
  { slug: '111th-street-branch-court', name: '111th Street Branch Court' },
  { slug: '26th-california-criminal', name: '26th & California (Criminal)' },
  { slug: 'daley-center-civil', name: 'Daley Center (Civil)' },
  { slug: '555-w-harrison-domestic-violence', name: '555 W. Harrison (Domestic Violence)' },
  { slug: 'grand-central-branch', name: 'Grand & Central Branch' },
  { slug: 'skokie-courthouse', name: 'Skokie Courthouse' },
  { slug: 'rolling-meadows-courthouse', name: 'Rolling Meadows Courthouse' },
  { slug: 'maywood-courthouse', name: 'Maywood Courthouse' },
  { slug: 'bridgeview-courthouse', name: 'Bridgeview Courthouse' },
  { slug: 'markham-courthouse', name: 'Markham Courthouse' },
  { slug: 'chicago-lawn-63rd-branch', name: 'Chicago Lawn (63rd) Branch' },
  { slug: 'harrison-kedzie-branch', name: 'Harrison (Kedzie) Branch' },
  { slug: 'leighton-criminal-court', name: 'Leighton Criminal Court' },
  { slug: 'george-n-leighton-courthouse', name: 'George N. Leighton Courthouse' },
  { slug: 'richard-j-daley-center', name: 'Richard J. Daley Center' },
  { slug: 'englewood-branch-court', name: 'Englewood Branch Court' },
  { slug: 'first-municipal-district', name: 'First Municipal District' },
  { slug: 'second-municipal-district', name: 'Second Municipal District' },
  { slug: 'third-municipal-district', name: 'Third Municipal District' },
  { slug: 'fourth-municipal-district', name: 'Fourth Municipal District' },
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
