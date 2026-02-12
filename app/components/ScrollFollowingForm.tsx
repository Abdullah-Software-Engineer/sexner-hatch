import { ContactForm } from './ui/ContactForm'

interface ScrollFollowingFormProps {
  containerRef?: React.RefObject<HTMLDivElement>
  leftContentRef?: React.RefObject<HTMLDivElement>
  heading?: string
  onSubmit?: (formData: FormData) => Promise<void> | void
}

export default function ScrollFollowingForm({
  heading = 'Contact us for a free case evaluation',
  onSubmit,
}: ScrollFollowingFormProps) {
  return (
    <aside className="w-full lg:w-[100.67%] lg:flex-shrink-0 lg:sticky lg:top-32 lg:self-start">
      <ContactForm heading={heading} onSubmit={onSubmit} />
    </aside>
  )
}
