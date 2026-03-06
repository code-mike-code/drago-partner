import { useLanguage } from '@/hooks/useLanguage'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export function FAQSection() {
  const { t } = useLanguage()

  // Access FAQ items through direct translation keys
  const faqItems = [0, 1, 2, 3, 4].map((i) => ({
    question: t(`faq.items.${i}.question`),
    answer: t(`faq.items.${i}.answer`),
  }))

  return (
    <section id="faq" className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-black text-dark leading-none tracking-tight mb-16">
          {t('faq.heading')}
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
