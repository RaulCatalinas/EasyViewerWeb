// Third-Party libraries
import ytdl from 'ytdl-core'

// Utils
import { getVideoTitle } from '@/utils/youtube'

// NodeJS
import fs from 'node:fs'

// i18n
import { getJson } from '@/i18n/utils'

// Types
import type { Language } from '@/types/language'
import type { OS } from '@/types/os.d'

// Constants
import { DOWNLOAD_FORMAT_FILTERS, DownloadQuality } from '@/constants/download'
import { FileExtensions, UTF8_ENCODING } from '@/constants/files'

// Utils
import { cleanInvalidChars } from '@/utils/chars'
import { getUserDesktop } from '@/os-utils/user-os'

interface DownloadControllerProps {
  url: string
  downloadVideo: boolean
  language: Language
  userOS: OS
}

interface DownloadControllerResult {
  success: boolean
  errorMessage?: string
  responseMessage?: string
}

export async function downloadController({
  url,
  downloadVideo,
  language,
  userOS
}: DownloadControllerProps): Promise<DownloadControllerResult> {
  const { download } = getJson(language)

  try {
    const originalTitle = await getVideoTitle(url)

    const titleWithOutInvalidChars = cleanInvalidChars({
      title: originalTitle,
      userOS
    })

    const extension = FileExtensions[downloadVideo ? 'Video' : 'Audio']

    const userDesktop = getUserDesktop()

    ytdl(url, {
      filter: DOWNLOAD_FORMAT_FILTERS[downloadVideo ? 'video' : 'audio'],
      quality: DownloadQuality[downloadVideo ? 'Video' : 'Audio']
    }).pipe(
      fs.createWriteStream(
        `${userDesktop}/${titleWithOutInvalidChars}.${extension}`,
        {
          encoding: UTF8_ENCODING
        }
      )
    )

    return {
      success: true,
      responseMessage: download.success
    }
  } catch (error) {
    console.error(error)

    return {
      success: false,
      errorMessage: download.errors.couldNotBeDownloaded
    }
  }
}
