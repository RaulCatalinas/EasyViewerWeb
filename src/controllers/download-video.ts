// Third-Party libraries
import ytdl from 'ytdl-core'

// Utils
import { cleanInvalidChars } from '@/utils/chars'
import { getVideoTitle } from '@/utils/youtube'

// i18n
import { getJson } from '@/i18n/utils'

// Types
import type { Language } from '@/types/language'
import type { OS } from '@/types/os.d'

// Constants
import { DOWNLOAD_FORMAT_FILTERS, DownloadQuality } from '@/constants/download'
import { FileExtensions } from '@/constants/files'

// OS-Utils
import { saveVideo } from '@/os-utils/user-os'

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

    ytdl(url, {
      filter: DOWNLOAD_FORMAT_FILTERS[downloadVideo ? 'video' : 'audio'],
      quality: DownloadQuality[downloadVideo ? 'Video' : 'Audio']
    }).pipe(saveVideo({ title: titleWithOutInvalidChars, extension }))

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
