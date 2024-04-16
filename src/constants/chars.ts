import type { InvalidChars } from '@/types/chars'

export const INVALID_CHARS: InvalidChars = {
  windows: /[<>:"/\\|?*\\x20\\u{20}/u]/,
  darwin: /[:/]/,
  linux: /\//,
  unix: /[ /.:*?<>"|{}()!@#$%^&~;,\\]/,
  android: /[^a-zA-Z0-9_-]/,
  ios: /[^a-zA-Z0-9_-]/
} as const
