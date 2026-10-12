import type { Article } from './types'
import image from '@/assets/img/about-1.webp'

export const taxiDriverForeigner: Article = {
  slug: 'how-to-become-taxi-driver-in-poland-foreigner',
  lang: 'en',
  title: 'How to Become a Taxi Driver in Poland as a Foreigner (2026)',
  description:
    'Documents, residence and work status, driving licence and a step-by-step start with a fleet partner in Warsaw. A practical guide for foreign drivers.',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  readingMinutes: 6,
  image,
  imageAlt: 'Foreign driver starting taxi work in Warsaw with Drago Partner',
  blocks: [
    {
      type: 'p',
      text: 'Many drivers in Warsaw come from other countries. You can work with Uber, Bolt or FreeNow as a foreigner, but you need the right documents and a legal basis to work in Poland. This guide explains the main steps in simple terms.',
    },
    { type: 'h2', text: 'Can foreigners drive for Uber, Bolt and FreeNow in Poland?' },
    {
      type: 'p',
      text: 'Yes, if you meet the requirements. Uber, for example, accepts a national ID, a passport or a residence permit that notes access to the labour market, and requires the driver to be at least 18. In Poland, drivers usually work with a fleet partner, who holds the taxi licences and helps with registration.',
    },
    { type: 'h2', text: 'Your right to live and work in Poland' },
    {
      type: 'p',
      text: 'Your right to work depends on your nationality and status. Citizens of the EU have different rules from citizens of other countries. According to official information published in 2026, Ukrainian citizens covered by temporary protection can work in Poland without a work permit, and that protection is currently set to run until 4 March 2027. Rules change often, so check your situation with the voivodeship office or on gov.pl before you apply.',
    },
    {
      type: 'callout',
      text: 'We cannot give individual immigration advice. If you are not sure about your status, confirm it with the official office first. It is the most common reason for delays.',
    },
    { type: 'h2', text: 'Driving licence' },
    {
      type: 'p',
      text: 'You need a Polish driving licence. Uber has accepted only Polish licences since 17 June 2024, and the category B licence must be held for at least one year. If you have a licence from another country, ask your local transport department (wydział komunikacji) about the exchange rules for your country.',
    },
    { type: 'h2', text: 'Documents you need' },
    {
      type: 'list',
      items: [
        'ID card or passport,',
        'Polish driving licence,',
        'medical and psychological certificates,',
        'criminal record certificate from Poland and from your country of citizenship, with a sworn translation, not older than 30 days.',
      ],
    },
    { type: 'h2', text: 'Do you need to speak Polish?' },
    {
      type: 'p',
      text: 'Polish is not mandatory. However, we recommend learning the basics to communicate better with passengers. Our office team speaks several languages, and you can call us in Ukrainian, Georgian or Russian.',
    },
    { type: 'h2', text: 'Step by step with Drago Partner' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Fill in the [application form](/#contact-form). We reply within 24 hours.',
        'Prepare your documents and book a visit to our office to bring the originals and copies.',
        'We help you get the licence extract and the taxi driver identifier.',
        'Register your accounts on the platforms and pass the verification in the platform offices.',
        'Start working. You can use several platforms at the same time.',
      ],
    },
    { type: 'h2', text: 'Your own car or a rental' },
    {
      type: 'p',
      text: 'You can drive your own car if it meets the platform requirements, including the taxi inspection stamp and a valid extract from the partner’s taxi licence. If you do not have a car, you can rent a modern vehicle from the Drago Partner fleet. You choose the option in the form.',
    },
    { type: 'h2', text: 'Contact us' },
    {
      type: 'list',
      items: [
        'Phone: +48 530 181 372 (UA / GR / RUS),',
        'E-mail: biuro@dragopartner.pl,',
        'Address: Modlińska 310/312, office 2, 03-152 Warsaw (Fort Piontek),',
        'Office hours: Monday to Friday, 10:00–18:00.',
      ],
    },
  ],
  related: [
    'wymogi-prawne-kierowca-taxi-polska',
    'jak-szybko-zaczac-prace-kierowca-taxi',
  ],
  faq: [
    {
      question: 'Can I work as a taxi driver in Poland if I am not an EU citizen?',
      answer:
        'It depends on your residence and work status. You need a legal basis to work in Poland, so confirm your situation with the official office, then contact us about the next steps.',
    },
    {
      question: 'Do I need to speak Polish?',
      answer:
        'Polish is not mandatory, but we recommend learning the basics to communicate with passengers.',
    },
    {
      question: 'Can I use a foreign driving licence?',
      answer:
        'Uber has accepted only Polish driving licences since 17 June 2024. Ask your local transport department how to exchange a licence from your country.',
    },
    {
      question: 'Can I work on several platforms at once?',
      answer:
        'Yes. You can work on Uber, Bolt and FreeNow at the same time, and we prepare you for each of them.',
    },
  ],
}
