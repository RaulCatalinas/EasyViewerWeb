// Third-Party libraries
import type ytdl from 'ytdl-core'

// Types
import { FileExtensions } from '@/constants/files'

export const DOWNLOAD_FORMAT_FILTERS = {
  video: (format: ytdl.videoFormat) =>
    format.container === FileExtensions.Video,
  audio: (format: ytdl.videoFormat) =>
    format.container === FileExtensions.Audio3GP
} as const

export enum DownloadQuality {
  Video = 'highest',
  Audio = 'highestaudio'
}
