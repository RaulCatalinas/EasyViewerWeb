import { OS } from "@/types/os.d"

export function isValidOS(os: OS) {
	if (os === OS.Linux || os === OS.iOS) return false

	return true
}
