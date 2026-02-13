import type { Metadata } from 'next'
import Script from 'next/script'
import { Playfair_Display, Poppins, Libre_Baskerville } from 'next/font/google'
import './globals.css'
import SideButtons from './components/ui/SideButtons'
import CallButton from './components/ui/CallButton'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sexner-hatch.com'),
  title: {
    default: 'Chicago Criminal Defense Attorneys | Sexner & Associates LLC',
    template: '%s | Sexner & Associates LLC',
  },
  description: 'Experienced criminal defense attorneys in Chicago with over 30 years of experience. We have helped over 20,000 clients with their legal matters. Call (312) 940-3228 for a free consultation.',
  keywords: [
    'criminal defense attorney',
    'Chicago lawyer',
    'DUI defense',
    'criminal lawyer Chicago',
    'defense attorney',
    'legal representation',
  ],
  authors: [{ name: 'Sexner & Associates LLC' }],
  creator: 'Sexner & Associates LLC',
  publisher: 'Sexner & Associates LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sexner-hatch.com',
    title: 'Chicago Criminal Defense Attorneys | Sexner & Associates LLC',
    description: 'Experienced criminal defense attorneys in Chicago with over 30 years of experience.',
    siteName: 'Sexner & Associates LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chicago Criminal Defense Attorneys | Sexner & Associates LLC',
    description: 'Experienced criminal defense attorneys in Chicago with over 30 years of experience.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'google-site-verification-code',
    // yandex: 'yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${poppins.variable} ${libreBaskerville.variable}`}>
      <body>
        <SideButtons />
        {/* <CallButton /> */}
        {children}

        {/* Tawk.to Chat Widget */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            
            // Hide welcome message popup
            Tawk_API.onLoad = function(){
              // Hide any welcome message or popup elements
              setTimeout(function() {
                var popups = document.querySelectorAll('[class*="tawk"][class*="welcome"], [class*="tawk"][class*="popup"], [class*="tawk"][class*="bubble"], [id*="tawk"][id*="welcome"], [id*="tawk"][id*="popup"]');
                popups.forEach(function(el) {
                  if (el.textContent && el.textContent.toLowerCase().includes('we are here')) {
                    el.style.display = 'none';
                    el.style.visibility = 'hidden';
                    el.style.opacity = '0';
                    el.style.pointerEvents = 'none';
                  }
                });
                
                // Also check for elements with "We Are Here" text
                var allElements = document.querySelectorAll('*');
                allElements.forEach(function(el) {
                  if (el.textContent && el.textContent.toLowerCase().includes('we are here') && 
                      (el.className && (el.className.includes('tawk') || el.className.includes('popup') || el.className.includes('welcome') || el.className.includes('bubble')))) {
                    el.style.display = 'none';
                    el.style.visibility = 'hidden';
                    el.style.opacity = '0';
                    el.style.pointerEvents = 'none';
                  }
                });
              }, 1000);
            };
            
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/698e06c085e35c1c3911da4f/1jh9ckoj8';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
            
            // Additional check after page load to hide popup
            if (typeof window !== 'undefined') {
              window.addEventListener('load', function() {
                setTimeout(function() {
                  var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) {
                          if (node.textContent && node.textContent.toLowerCase().includes('we are here')) {
                            var hasTawkClass = node.className && (
                              node.className.includes('tawk') || 
                              node.className.includes('popup') || 
                              node.className.includes('welcome') || 
                              node.className.includes('bubble')
                            );
                            if (hasTawkClass || node.querySelector('[class*="tawk"], [id*="tawk"]')) {
                              node.style.display = 'none';
                              node.style.visibility = 'hidden';
                              node.style.opacity = '0';
                              node.style.pointerEvents = 'none';
                            }
                          }
                        }
                      });
                    });
                  });
                  observer.observe(document.body, { childList: true, subtree: true });
                }, 2000);
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}
