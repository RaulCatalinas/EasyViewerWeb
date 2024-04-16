// Types
import { OS } from '@/types/os.d'

// NodeJS
import os from 'node:os'

export function getUserOS(): OS {
  if (navigator.userAgent.includes('Win')) return OS.Windows
  if (navigator.userAgent.includes('iPhone OS')) return OS.iOS
  if (navigator.userAgent.includes('X11')) return OS.Unix
  if (navigator.userAgent.includes('Android')) return OS.Android
  if (navigator.userAgent.includes('Linux')) return OS.Linux

  return OS.Mac
}

export function getUserDesktop() {
  const userHome = os.homedir()

  return `${userHome}/desktop`
}
