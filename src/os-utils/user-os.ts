// Types
import { OS } from '@/types/os.d'

// NodeJS
import fs from 'node:fs'
import os from 'node:os'

// constants
import { UTF8_ENCODING, type FileExtensions } from '@/constants/files'

interface SaveVideoProps {
  title: string
  extension: FileExtensions
}

export function getUserOS(): OS {
  if (navigator.userAgent.includes('Win')) return OS.Windows
  if (navigator.userAgent.includes('iPhone OS')) return OS.iOS
  if (navigator.userAgent.includes('X11')) return OS.Unix
  if (navigator.userAgent.includes('Android')) return OS.Android
  if (navigator.userAgent.includes('Linux')) return OS.Linux

  return OS.Mac
}

export function saveVideo({ title, extension }: SaveVideoProps) {
  return fs.createWriteStream(`${os.homedir()}/desktop/${title}.${extension}`, {
    encoding: UTF8_ENCODING
  })
}
