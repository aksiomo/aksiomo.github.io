import type { CollectionEntry } from 'astro:content'

export type DeveloperEntry = CollectionEntry<'developer'>

export function developerLang(entry: DeveloperEntry) {
  return entry.id.split('/')[0]
}

export function developerSubCollection(entry: DeveloperEntry) {
  const segments = entry.id.split('/')
  return segments.length > 2 ? segments[1] : undefined
}

export function developerHref(entry: DeveloperEntry) {
  const slug = entry.id.split('/').slice(1).join('/')
  return `/${developerLang(entry)}/developer/${slug}`
}

export function developerLabel(slug: string) {
  return slug.replaceAll('-', ' ')
}

export function formatDeveloperDate(date: Date, lang: string | undefined) {
  const locale = lang === 'zh-cn' ? 'zh-CN' : lang
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function sortByDateDesc(a: DeveloperEntry, b: DeveloperEntry) {
  return b.data.date.getTime() - a.data.date.getTime()
}
