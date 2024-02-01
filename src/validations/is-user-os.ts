import type { UserOS } from "@/types/os"

export function isUserOS(os: string): os is UserOS {
	return (
		os === "windows" ||
		os === "darwin" ||
		os === "ios" ||
		os === "linux" ||
		os === "android"
	)
}
