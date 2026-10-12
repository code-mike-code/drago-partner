import type { Article } from './types'
import { zarobkiKierowcy } from './zarobki-kierowcy-uber-bolt-warszawa'
import { zarobkiKuriera } from './zarobki-kuriera-uber-eats-bolt-food-warszawa'
import { czyOplacaSie } from './czy-praca-taxi-oplaca-sie-2026-warszawa'
import { wymogiPrawne } from './wymogi-prawne-kierowca-taxi-polska'
import { jakSzybkoZaczacPrace } from './jak-szybko-zaczac-prace-kierowca-taxi'
import { taxiDriverForeigner } from './how-to-become-taxi-driver-in-poland-foreigner'

export const articles: Article[] = [
  zarobkiKierowcy,
  zarobkiKuriera,
  czyOplacaSie,
  wymogiPrawne,
  jakSzybkoZaczacPrace,
  taxiDriverForeigner,
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
