// Constants
import { INVALID_CHARS } from "@/constants/chars"

// Utils
import { getUserOS } from "./get-user-os"

// Types
import { OS } from "@/types/os.d"

export function cleanInvalidChars(title: string) {
	const userOS = getUserOS()

	if (userOS === OS.Android || userOS === OS.iOS) {
		throw new Error("Unsupported OS")
	}

	const invalidCharsRegex = INVALID_CHARS[userOS]

	return title.replace(invalidCharsRegex, "")
}
