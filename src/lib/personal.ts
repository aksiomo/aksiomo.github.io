import type { CollectionEntry } from 'astro:content'

export type PersonalEntry = CollectionEntry<'personal'>

export function personalLang(entry: PersonalEntry) {
  return entry.id.split('/')[0]
}

export function personalSubCollection(entry: PersonalEntry) {
  const segments = entry.id.split('/')
  return segments.length > 2 ? segments[1] : undefined
}

export function personalHref(entry: PersonalEntry) {
  const slug = entry.id.split('/').slice(1).join('/')
  return `/${personalLang(entry)}/personal/${slug}`
}

export function personalLabel(slug: string) {
  return slug.replaceAll('-', ' ')
}

export function formatPersonalDate(date: Date, lang: string | undefined) {
  const locale = lang === 'zh-cn' ? 'zh-CN' : lang
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function sortByDateDesc(a: PersonalEntry, b: PersonalEntry) {
  return b.data.date.getTime() - a.data.date.getTime()
}
