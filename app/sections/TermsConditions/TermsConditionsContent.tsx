import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

export default function TermsConditionsContent() {
  return (
    <Section className="bg-white py-14 md:py-20">
      <Container>
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
          <section>
            <p className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed">
              These terms and conditions govern the use of the Mitchell S. Sexner &amp; Associates LLC website, which is found at www.sexner.com. By entering and using this site, you acknowledge that you accept these terms in their entirety. If you do not agree with any part of these conditions, you must stop using the website immediately. Throughout this document, terms such as &quot;You,&quot; &quot;Your,&quot; &quot;Visitor,&quot; &quot;User,&quot; and &quot;Poster&quot; refer to the person accessing the site, while &quot;Ourselves,&quot; &quot;We,&quot; &quot;Our,&quot; and &quot;Us&quot; refer to Mitchell S. Sexner &amp; Associates LLC. These terms apply interchangeably regardless of singular or plural capitalization or gendered pronouns.
            </p>
          </section>

          <section>
            <h2 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary mb-4">
              Cookie Policy
            </h2>
            <p className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed">
              This website utilizes cookies to improve user experience. By accessing the site, you consent to the use of cookies as described in the Mitchell S. Sexner &amp; Associates LLC <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>. These cookies help the website function correctly in specific areas and allow for the retrieval of user details during subsequent visits. Please be aware that some of our advertising or affiliate partners may also employ their own cookies.
            </p>
          </section>

          <section>
            <h2 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary mb-4">
              Intellectual Property License
            </h2>
            <p className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed">
              Unless otherwise noted, Mitchell S. Sexner &amp; Associates LLC or its licensors own the intellectual property rights for all content on the website, and all such rights are strictly reserved. You are permitted to access this material for personal use, provided you adhere to specific restrictions. Specifically, you are prohibited from republishing, selling, renting, sub-licensing, reproducing, duplicating, copying, or redistributing any material from the site. These regulations are effective from the moment you first access the platform.
            </p>
          </section>

          <section>
            <h2 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary mb-4">
              User Postings and Conduct
            </h2>
            <div className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed space-y-4">
              <p>
                Certain sections of the website may allow users to share opinions or information. Mitchell S. Sexner &amp; Associates LLC does not pre-screen, edit, or review these postings before they appear. Consequently, user comments do not reflect the views of the firm or its affiliates but belong solely to the individual poster. To the extent allowed by law, the firm is not liable for any damages or expenses resulting from these postings. However, we reserve the right to monitor all contributions and remove any content deemed offensive, inappropriate, or in violation of these terms at our sole discretion.
              </p>
              <p>
                By posting on this site, you warrant that you have the legal right and necessary licenses to do so. You also guarantee that your content does not infringe upon any third-party intellectual property, contain defamatory or illegal material, or serve to solicit business or promote unlawful activities. Furthermore, you grant Mitchell S. Sexner &amp; Associates LLC a non-exclusive license to use, edit, and reproduce your postings in any media format.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary mb-4">
              Hyperlinking and Framing
            </h2>
            <p className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed">
              Specific organizations, including government agencies, search engines, news outlets, and online directory distributors, may link to our website without prior written consent. Accredited businesses may also link to us, provided they are not engaging in non-profit or charitable fundraising. All links must be honest, must not falsely imply sponsorship or endorsement, and must fit within the context of the linking party&apos;s site. Other organizations, such as law firms, educational institutions, and consumer information sources, may request linking permission by emailing their contact details and intended URLs to the firm.
            </p>
            <p className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed mt-4">
              Approved organizations may link using our corporate name, the URL itself, or a relevant description. The use of the firm&apos;s logo or artwork for linking is prohibited without a specific trademark license agreement. Additionally, you may not create frames around our webpages that alter the visual presentation of the site without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary mb-4">
              Content Liability and Reservation of Rights
            </h2>
            <p className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed">
              We are not responsible for any content appearing on your own website. By linking to us, you agree to protect and indemnify us against all claims arising from your site. No links should appear on any platform that could be interpreted as criminal, obscene, or libelous. We reserve the right to request the immediate removal of any link to our website, and you agree to comply with such requests within 24 hours. We also reserve the right to amend these terms and our linking policy at any time.
            </p>
          </section>

          <section>
            <h2 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary mb-4">
              Link Removal and Additional Policies
            </h2>
            <p className="font-poppins text-primary/80 text-[14px] md:text-[16px] leading-relaxed">
              If you encounter a link on our website that you find offensive, you are welcome to contact us. While we will consider requests to remove links, we are not obligated to do so or to respond directly to such inquiries. For further details regarding legal protections and data usage, please consult our <Link href="/disclaimer" className="text-secondary hover:underline">Disclaimer</Link> and <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  )
}
