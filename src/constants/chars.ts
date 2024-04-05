export const INVALID_CHARS = {
  windows: /[<>:"/\\|?*\\x20\\u{20}/u]/,
  darwin: /[:/]/,
  linux: /\//,
  unix: /[ /.:*?<>"|{}()!@#$%^&~;,\\]/
} as const
