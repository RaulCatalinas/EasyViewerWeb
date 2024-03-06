export const INVALID_CHARS = {
	windows: /[<>:"\/\\|?*\x00-\x1F]/,
	darwin: /[:/]/,
	linux: /\//
} as const
