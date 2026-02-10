import { cn, getPhoneLink } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/constants'

interface PhoneButtonProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function PhoneButton({ className, size = 'md' }: PhoneButtonProps) {
  const sizes = {
    sm: {
      padding: 'px-4 py-1.5',
      gap: 'gap-2',
      text: 'text-xs',
      icon: 'w-8 h-8 min-w-[32px] min-h-[32px]',
      svg: 'w-3.5 h-3.5',
    },
    md: {
      padding: 'px-5 py-2 lg:px-6 lg:py-2 xl:px-7 xl:py-2',
      gap: 'gap-3',
      text: 'text-sm lg:text-[15px] xl:text-base',
      icon: 'w-9 h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 min-w-[36px] min-h-[36px] lg:min-w-[40px] lg:min-h-[40px] xl:min-w-[44px] xl:min-h-[44px]',
      svg: 'w-4 h-4 lg:w-[18px] lg:h-[18px] xl:w-5 xl:h-5',
    },
    lg: {
      padding: 'px-7 py-3',
      gap: 'gap-4',
      text: 'text-lg',
      icon: 'w-12 h-12 min-w-[48px] min-h-[48px]',
      svg: 'w-6 h-6',
    },
  }

  const sizeConfig = sizes[size]

  return (
    <a
      href={getPhoneLink(SITE_CONFIG.phoneRaw)}
      className={cn(
        'flex items-center justify-between bg-secondary text-white rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all no-underline',
        sizeConfig.padding,
        sizeConfig.gap,
        className
      )}
      aria-label={`Call ${SITE_CONFIG.phone}`}
    >
      <span className={cn('font-medium font-poppins whitespace-nowrap', sizeConfig.text)}>
        {SITE_CONFIG.phone}
      </span>
      <div
        className={cn(
          'rounded-full bg-primary flex items-center justify-center shrink-0',
          sizeConfig.icon
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className={cn('text-white', sizeConfig.svg)}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </a>
  )
}
