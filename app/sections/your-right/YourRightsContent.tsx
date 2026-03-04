import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import ScrollFollowingForm from '../../components/ScrollFollowingForm'

const TABLE_OF_CONTENTS = [
  { label: 'Chicago criminal procedures', id: 'chicago-criminal-procedures' },
  { label: 'Representation', id: 'representation' },
  { label: 'Investigation', id: 'investigation' },
  { label: 'Arrest', id: 'arrest' },
  { label: 'Charging and Processing', id: 'charging-and-processing' },
  { label: 'Initial Bond Hearing', id: 'initial-bond-hearing' },
  { label: 'The Grand Jury', id: 'the-grand-jury' },
  { label: 'Initial Court Date / Arraignment', id: 'arraignment' },
  { label: 'Discovery and Pre-Trial Motions', id: 'discovery-and-pre-trial-motions' },
  { label: 'Plea Negotiations', id: 'plea-negotiations' },
  { label: 'Trial Proceedings', id: 'trial-proceedings' },
  { label: 'Sentencing and Post-Trial Motions', id: 'sentencing-and-post-trial-motions' },
  { label: 'More Information about Your Rights', id: 'more-information-about-your-rights' },
]

const MORE_INFO_LINKS = [
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
  'Sentencing: Who Decides The Punishment, And How It Is Determined',
  'Speaking To Police',
  'The Use Of Recorded Or Videotaped Conversations',
  'What Is A Mitigation Package?',
  'What is a Photo Lineup?',
  'What is an Arrest?',
  'What Is Hearsay?',
  'What is Probable Cause?',
  'What is Probable Cause? And What Rights Do Passengers Have?',
  'What is the Difference Between a Misdemeanor and a Felony?',
]

const SECTIONS = [
  {
    id: 'chicago-criminal-procedures',
    title: 'Chicago Criminal Procedures',
    content: (
      <>
        <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
          Navigating the criminal justice system—from the moment someone is suspected of a crime until their release—can be overwhelming. Every step has specific procedures, and failing to follow them correctly can make the difference between a not guilty verdict and incarceration.
        </p>
      </>
    ),
  },
  {
    id: 'representation',
    title: 'Representation',
    content: (
      <>
        <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
          In Chicago and across Illinois, you are legally permitted to represent yourself in misdemeanor or felony cases. However, judges typically discourage this because non-lawyers rarely understand the intricate rules of evidence and court procedure. An experienced Chicago criminal attorney is far better equipped to protect your rights and navigate the litigation process effectively. Because the stakes are so high—potentially involving long-term incarceration—judges will strongly advise you to secure professional counsel to ensure a fair and competent defense.
        </p>
        <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
          The legal system is notoriously complex, making an experienced criminal defense lawyer essential for any defendant. If you or a loved one has been arrested, call Mitchell S. Sexner &amp; Associates LLC at <a href="tel:3125846574" className="text-secondary hover:underline">(312) 584-6574</a> to discuss your case details free of charge.
        </p>
      </>
    ),
  },
  {
    id: 'investigation',
    title: 'Investigation',
    content: (
      <>
        <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
          In Illinois, the process begins when law enforcement investigates a suspected crime to gather necessary evidence. This phase might be triggered by a 911 call, an informant&apos;s tip, or a traffic stop. In some instances, such as when an officer witnesses the act, the investigation is brief. In more complex cases, detectives may spend several months interviewing witnesses, reviewing financial records, and analyzing forensic data before deciding whether there is enough evidence to move forward with a formal arrest.
        </p>
      </>
    ),
  },
  {
    id: 'arrest',
    title: 'Arrest',
    content: (
      <>
        <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
          An arrest occurs when police believe they have sufficient evidence to link a specific individual to a crime. This can happen immediately at a crime scene or following an extensive investigation. If the police establish &quot;reasonable grounds,&quot; an arrest can often be made without a warrant. However, in many other circumstances, law enforcement must first present their evidence to a judge to obtain a formal &quot;warrant for arrest,&quot; ensuring that the person&apos;s constitutional protections are respected during the apprehension process.
        </p>
      </>
    ),
  },
  {
    id: 'charging-and-processing',
    title: 'Charging &amp; Processing',
    content: (
      <>
        <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
          After an arrest, the police determine how to charge the individual. Minor offenses might only result in a written citation or complaint. For most misdemeanors, the arrestee is handcuffed and taken to the station for processing, where they may be released after posting a cash bond. However, for felonies or specific charges like domestic battery, the individual must appear before a judge for bail. This processing phase almost always includes being fingerprinted and photographed before any release from custody is authorized.
        </p>
      </>
    ),
  },
  {
    id: 'initial-bond-hearing',
    title: 'Initial Bond Hearing',
    content: (
      <>
        <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
          If a defendant is not released directly from the police station, they must appear before a judge for a bond hearing. At this stage, a lawyer is vital to argue for a lower bail amount or a personal recognizance bond. The judge evaluates the severity of the charges, the defendant&apos;s criminal history, and the likelihood of them fleeing the jurisdiction. A persuasive legal argument at this early stage can significantly impact whether the defendant waits for trial at home or in jail.
        </p>
      </>
    ),
  },
  {
    id: 'the-grand-jury',
    title: 'The Grand Jury',
    content: (
      <>
        <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
          In felony cases, a grand jury is convened to review the prosecution&apos;s evidence and determine if probable cause exists. This group of citizens listens to the facts to decide if a crime was likely committed by the accused. If they find sufficient merit, they issue an indictment, allowing the case to move to a trial court. If the grand jury determines the case lacks merit, the charges are usually dropped, saving the individual from further unnecessary and stressful legal proceedings.
        </p>
      </>
    ),
  },
  {
    id: 'arraignment',
    title: 'Initial Court Date / Arraignment',
    content: (
      <>
        <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
          The arraignment is the formal appearance where the court reads the specific charges to the defendant. This is the moment when the defendant officially enters a plea of &quot;guilty&quot; or &quot;not guilty&quot; under Illinois law. If a &quot;not guilty&quot; plea is entered, the judge will then establish a schedule for future status dates and the eventual trial. This stage is critical because it sets the procedural tone for the defense&apos;s strategy and the timeline for the remainder of the case.
        </p>
      </>
    ),
  },
  {
    id: 'discovery-and-pre-trial-motions',
    title: 'Discovery and Pre-Trial Motions',
    content: (
      <>
        <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
          Before a trial begins, both sides engage in &quot;discovery,&quot; a phase where evidence is shared. Defendants are legally entitled to see police reports, witness statements, and video footage that the prosecution intends to use. During this time, defense attorneys often file pre-trial motions to suppress evidence that was obtained illegally or to exclude prejudicial information. These motions are decided by the judge and are instrumental in narrowing the scope of the trial and protecting the defendant&apos;s constitutional rights.
        </p>
      </>
    ),
  },
  {
    id: 'plea-negotiations',
    title: 'Plea Negotiations',
    content: (
      <>
        <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
          A defendant has the right to resolve their case without a trial by entering a plea of guilty. This often involves negotiations between the defense attorney and the prosecutor to reach an agreement on reduced charges or a lighter sentence. These discussions can take the form of a &quot;402 conference&quot; with the judge or a direct negotiation. Ultimately, the decision to accept a plea deal or take the case to trial rests entirely with the defendant after consulting with their legal counsel.
        </p>
      </>
    ),
  },
  {
    id: 'trial-proceedings',
    title: 'Trial Proceedings',
    content: (
      <>
        <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
          A trial can be a &quot;bench trial,&quot; where the judge decides the verdict, or a &quot;jury trial,&quot; where citizens from the community make the determination. In both formats, the prosecution must prove guilt beyond a reasonable doubt. Attorneys present evidence, examine witnesses, and deliver opening and closing arguments to the court. The proceedings are governed by strict rules of evidence, and the judge ensures that the trial is conducted fairly before a final verdict of guilt or innocence is rendered.
        </p>
      </>
    ),
  },
  {
    id: 'sentencing-and-post-trial-motions',
    title: 'Sentencing and Post-Trial Motions',
    content: (
      <>
        <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
          If a defendant is found guilty, the judge determines the appropriate sentence, often considering a pre-sentence investigation report. Felonies in Illinois carry a minimum of one year in prison, while misdemeanors result in shorter jail sentences or probation. Defense attorneys may file post-trial motions to challenge the verdict or seek a new trial if errors occurred. A skilled lawyer works to secure the lightest possible sentence, focusing on options that minimize the long-term impact on the defendant&apos;s future and reputation.
        </p>
      </>
    ),
  },
]

export default function YourRightsContent() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
          {/* Left: Table of Contents and Content */}
          <div className="flex-1 lg:w-[58.33%] space-y-6 min-w-0">
            {/* Table of Contents Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-200">
              <h2 className="font-libre text-[20px] font-semibold text-primary mb-6">
                Table of Content
              </h2>
              <ol className="space-y-3 font-poppins text-[14px] text-primary">
                {TABLE_OF_CONTENTS.map((item, index) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <span className="text-secondary font-semibold shrink-0">{index + 1}.</span>
                    <a href={`#${item.id}`} className="hover:text-secondary transition-colors cursor-pointer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              {SECTIONS.map((section) => (
                <div key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
                  <h3 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary">
                    {section.title}
                  </h3>
                  <div className="space-y-4">{section.content}</div>
                </div>
              ))}

              {/* More Information about Your Rights */}
              <div id="more-information-about-your-rights" className="space-y-4 scroll-mt-24">
                <h3 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary">
                  More Information about Your Rights
                </h3>
                <ul className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed space-y-2 list-disc pl-5">
                  {MORE_INFO_LINKS.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="space-y-4 pt-4">
                <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
                  Call Mitchell S. Sexner &amp; Associates LLC at{' '}
                  <a href="tel:3122623637" className="text-secondary font-semibold hover:underline">(312) 262-3637</a>{' '}
                  to speak to an experienced criminal defense attorney with a history of successful results and begin protecting your rights today.
                </p>
              </div>

              {/* Mitchell S. Sexner - Experienced Criminal Defense Attorney */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h3 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary">
                  Mitchell S. Sexner – Experienced Criminal Defense Attorney in Chicago
                </h3>
                <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
                  Founder Mitchell S. Sexner is an AV Preeminent-rated attorney and National Trial Lawyers Top 100 member. A former Chicago prosecutor with over 30 years of experience, he and his team deliver aggressive, results-driven representation in criminal defense and personal injury cases.
                </p>
                <div className="grid gap-4 md:grid-cols-1">
                  <div className="space-y-2">
                    <h4 className="font-libre text-[18px] font-semibold text-primary">Elite Legal Standing</h4>
                    <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
                      Holds the &quot;AV Preeminent&quot; rating from Martindale-Hubbell, a prestigious honour reflecting the highest level of professional excellence and ethical standards in the legal community.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-libre text-[18px] font-semibold text-primary">Former Assistant State&apos;s Attorney</h4>
                    <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
                      Leverages his previous experience as a Chicago prosecutor to anticipate government tactics and build more effective, proactive defence strategies for his clients.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-libre text-[18px] font-semibold text-primary">National Recognition</h4>
                    <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
                      Recognised by &quot;Who&apos;s Who&quot; in American Law and selected as one of the Top 100 Attorneys nationwide by The National Trial Lawyers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form - Sticky */}
          <ScrollFollowingForm />
        </div>
      </Container>
    </Section>
  )
}
