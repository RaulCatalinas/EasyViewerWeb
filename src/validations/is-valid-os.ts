import type { OS } from "@/types/os"

export function isValidOS(os: string): os is OS {
	return (
		os === "windows" ||
		os === "darwin" ||
		os === "ios" ||
		os === "linux" ||
		os === "android"
	)
}
