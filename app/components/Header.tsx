import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="main-container">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link href="/" className="header-logo">
              <Image
                src="/header/logo-white.webp"
                alt="Sexner & Associates LLC"
                width={140}
                height={50}
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="header-nav">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about" className="nav-link">About Us</Link>
              <Link href="/practice-areas" className="nav-link">Practice Areas</Link>
              <Link href="/resources" className="nav-link">Resources</Link>
              <Link href="/results" className="nav-link">Results</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </nav>

            {/* Phone Button */}
            <a href="tel:3129403228" className="header-phone-button">
              <span className="header-phone-text">(312) 940-3228</span>
              <div className="header-phone-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
