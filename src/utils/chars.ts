// Constants
import { INVALID_CHARS } from "@/constants/chars"

// Utils
import { getUserOS } from "./get-user-os"

export function cleanInvalidChars(title: string) {
  const userOS = getUserOS()

  const invalidCharsRegex = INVALID_CHARS[userOS]

  return title.replace(invalidCharsRegex, "")
}
