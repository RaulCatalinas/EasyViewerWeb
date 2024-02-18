// Third-Party libraries
import platform from "platform"

// Validations
import { isValidOS } from "@/validations/is-valid-os"

// Types
import type { OS } from "@/types/os"

export function getUserOS(): OS {
	const osFamily = platform.os?.family?.toLowerCase()

	if (!osFamily) throw new Error("User's OS couldn't be obtained")
	if (osFamily === "win32") return "windows"
	if (!isValidOS(osFamily)) throw new Error("Invalid OS")

	return osFamily
}
