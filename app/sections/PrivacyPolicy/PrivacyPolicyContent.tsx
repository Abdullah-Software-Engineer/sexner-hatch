import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

export default function PrivacyPolicyContent() {
  return (
    <Section className="bg-white py-14 md:py-20">
      <Container>
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
          <section>
            <h2 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary mb-4">
              Privacy Policy Overview
            </h2>
            <p className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed">
              Sexner and Associates LLC is committed to protecting your privacy and managing any information collected through our website, www.sexner.com, with the utmost respect. This policy describes the types of data we gather, how that information is utilised and secured, and the various options you have regarding your personal data.
            </p>
          </section>

          <section>
            <h2 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary mb-4">
              Collection and Use of Personal Information
            </h2>
            <div className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed space-y-4">
              <p>
                We gather user information through direct interaction, web server logs, and cookies to provide a helpful and personalised online experience. We do not share your details with third parties unless specified in this policy or required by law.
              </p>
              <p>
                When you use our contact forms or chat features, we ask for basic details such as your name, email, and phone number to respond to your inquiry and communicate with you in the future. We strongly advise against submitting sensitive data like Social Security numbers, financial information, or driver&apos;s license numbers through these forms; doing so is at your own risk, and we are not liable for the consequences.
              </p>
              <p>
                Our web servers also automatically record activity logs during your visit. This data includes your IP address, service provider, geographic location, browser type, navigation history on our site, and the specific searches you perform. This information is vital for site administration, security, and improving the overall user experience.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary mb-4">
              Cookies and Third-Party Services
            </h2>
            <div className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed space-y-4">
              <p>
                To provide tailored services, our website uses cookies—small data files stored on your hard drive that help us remember your preferences and track site usage. While most browsers accept cookies by default, you can adjust your settings to notify you of or disable them. Please note that disabling cookies may affect site functionality. By using our website, you consent to our use of these technologies.
              </p>
              <p>
                We also work with third-party services to analyze site usage and display relevant advertising. These providers may use cookies or web beacons to track your interests across the internet for measurement and retargeting purposes. You can opt out of certain ad-targeting practices by visiting standard industry opt-out pages. Furthermore, our site may contain links to external websites; we are not responsible for the privacy practices or content of those independent platforms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary mb-4">
              Data Protection and Access
            </h2>
            <p className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed">
              We implement security measures designed to protect your information from unauthorized access or loss, though we cannot guarantee absolute security against all potential threats. Sexner and Associates LLC will not sell or lease your data to others. Access to your information is limited to our agents and vendors working on our behalf, or to other legal professionals if we refer your case to them in accordance with the Illinois Rules of Professional Conduct. We may also disclose information if required by law, for public safety, or to protect our legal rights.
            </p>
          </section>

          <section>
            <h2 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary mb-4">
              Text Messaging and Consent
            </h2>
            <p className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed">
              By contacting our office, you consent to receive SMS communications from us. Your mobile information and text messaging opt-in data will not be shared with third parties or affiliates for marketing or promotional purposes. We only share this data with necessary service providers, such as phone companies and platform vendors, to facilitate the delivery of our messages. Your consent for text messaging is used strictly for providing or discussing legal services.
            </p>
          </section>

          <section className="pt-4 border-t border-gray-200">
            <p className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed">
              Your continued use of this website signifies your acceptance of these privacy practices. If you have any questions or concerns, please reach out to us using the contact information provided on our site.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  )
}
