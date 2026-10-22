import { getCollection } from 'astro:content';

const COLLECTIONS = [
  // 'acgn',
  'developer',
  // 'emotion-trash',
  'personal',
]

export async function getCollections() {
  return COLLECTIONS
}