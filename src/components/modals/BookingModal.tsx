import { useRef } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BookingModalProps {
  open: boolean
  onClose: () => void
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  const { t } = useLanguage()
  const modalRef = useRef<HTMLDivElement>(null)

  // Hooks must be called before any conditional return (Rules of Hooks)
  useFocusTrap(modalRef, open, onClose)

  const handleConfirm = () => {
    onClose()
    const calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID
    if (calendarId) {
      window.open(
        `https://calendar.google.com/calendar/appointments/schedules/${calendarId}`,
        '_blank',
        'noopener,noreferrer',
      )
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark/70"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel — focus trap is scoped to this element */}
      <div
        ref={modalRef}
        className={cn(
          'relative bg-white w-full max-w-md p-8',
          'shadow-2xl',
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-grey-mid hover:text-dark transition-colors"
          aria-label="Zamknij"
        >
          <X size={18} />
        </button>

        <h2
          id="modal-title"
          className="text-xl font-black text-dark mb-4"
        >
          {t('contact.modalTitle')}
        </h2>

        <p className="text-sm text-grey-mid leading-relaxed mb-8">
          {t('contact.modalText')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleConfirm}
            className="flex-1 bg-illuminating text-dark text-sm font-bold px-6 py-3 min-h-[44px] hover:bg-yellow-300 transition-colors duration-200"
          >
            {t('contact.modalConfirm')}
          </button>
          <button
            onClick={onClose}
            className="flex-1 border border-gray-200 text-dark text-sm font-medium px-6 py-3 min-h-[44px] hover:bg-gray-50 transition-colors duration-200"
          >
            {t('contact.modalCancel')}
          </button>
        </div>
      </div>
    </div>
  )
}
