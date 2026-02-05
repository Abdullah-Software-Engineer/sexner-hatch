// ============================================
// Site Configuration
// ============================================
export const SITE_CONFIG = {
  name: 'Sexner & Associates LLC',
  title: 'Chicago Criminal Defense Attorneys | Sexner & Associates LLC',
  description: 'Experienced criminal defense attorneys in Chicago with over 30 years of experience. We have helped over 20,000 clients with their legal matters.',
  phone: '(312) 940-3228',
  phoneRaw: '3129403228',
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

// ============================================
// Practice Areas Data
// ============================================
export const PRACTICE_AREAS = [
  {
    id: '1',
    title: 'Criminal Defense',
    description: 'Comprehensive defense for criminal charges including DUI, drug offenses, and violent crimes.',
    slug: 'criminal-defense',
  },
  {
    id: '2',
    title: 'DUI Defense',
    description: 'Expert legal representation for DUI and DWI charges with proven track record.',
    slug: 'dui-defense',
  },
  {
    id: '3',
    title: 'Drug Crimes',
    description: 'Defense against drug possession, trafficking, and manufacturing charges.',
    slug: 'drug-crimes',
  },
  {
    id: '4',
    title: 'Violent Crimes',
    description: 'Experienced defense for assault, battery, and other violent crime allegations.',
    slug: 'violent-crimes',
  },
  {
    id: '5',
    title: 'White Collar Crimes',
    description: 'Legal representation for fraud, embezzlement, and corporate crime charges.',
    slug: 'white-collar-crimes',
  },
  {
    id: '6',
    title: 'Domestic Violence',
    description: 'Compassionate and effective defense for domestic violence accusations.',
    slug: 'domestic-violence',
  },
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
