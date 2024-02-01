// Third-Party libraries
import platform from "platform"

// Validations
import { isUserOS } from "@/validations/is-user-os"

// Types
import { UserOS } from "@/types/os"

export function getUserOS(): UserOS {
	const osFamily = platform.os?.family?.toLowerCase()

	if (!osFamily) throw new Error("User's OS couldn't be obtained")
	if (!isUserOS(osFamily)) throw new Error("Invalid OS")

	return osFamily
}
