import Header from './components/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero-home">
        <div className="main-container">
          <div className="container">
            <div className="hero-home-wrapper">
              <div className="hero-home-top">
                <div className="hero-home-title">
                  <h1 className="hero-home-title-line1">CHICAGO CRIMINAL DEFENSE</h1>
                  <h1 className="hero-home-title-line2">ATTORNEYS</h1>
                </div>
              </div>
              <div className="hero-home-bottom">
                <a href="tel:3129403228" className="hero-home-cta-button">
                  <span className="hero-home-cta-text">(312) 940-3228</span>
                  <div className="hero-home-cta-icon">
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
        </div>
      </section>
    </main>
  )
}
