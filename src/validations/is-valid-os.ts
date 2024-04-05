import { OS } from '@/types/os.d'

export function isValidOS(os: OS) {
  if (os === OS.Android || os === OS.iOS) return false

  return true
}
