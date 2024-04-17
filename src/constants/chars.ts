import type { InvalidChars } from '@/types/chars'

export const INVALID_CHARS: InvalidChars = {
  windows: /[<>:"/\\|?*\\x20\\u{20}/u]/g,
  darwin: /[:/]/g,
  linux: /\//g,
  unix: /[ /.:*?<>"|{}()!@#$%^&~;g,\\]/g,
  android: /[^a-zA-Z0-9_-]/g,
  ios: /[^a-zA-Z0-9_-]/g
} as const
