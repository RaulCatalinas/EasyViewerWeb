export const INVALID_CHARS = {
  windows: /[<>:"\/\\|?*\x00-\x1F]/,
  darwin: /[:/]/,
  ios: /[:/]/,
  linux: /\//,
  android: /\//
}
