// Constants
import { INVALID_CHARS } from '@/constants/chars'

// Types
import { OS } from '@/types/os.d'

interface Props {
  title: string
  userOS: OS
}

export function cleanInvalidChars({ title, userOS }: Props) {
  if (userOS === OS.Android || userOS === OS.iOS) {
    throw new Error('Unsupported OS')
  }

  const invalidCharsRegex = INVALID_CHARS[userOS]

  return title.replace(invalidCharsRegex, '')
}
