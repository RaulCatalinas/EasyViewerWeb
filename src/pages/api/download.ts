// Astro
import type { APIRoute } from 'astro'

// Controllers
import { downloadController } from '@/controllers/download-video'

// i18n
import { getJson } from '@/i18n/utils'

// Types
import type { Language } from '@/types/language'
import type { OS } from '@/types/os.d'

interface RequestProps {
  url: string
  downloadVideo: boolean
  userOS: OS
}

export const POST: APIRoute = async ({ request }) => {
  const language = request.headers.get('Language') as Language

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { url, downloadVideo, userOS }: RequestProps = await request.json()

    const { success, errorMessage, responseMessage } = await downloadController(
      { url, downloadVideo, language, userOS }
    )

    return new Response(
      JSON.stringify({
        success,
        message: success ? responseMessage : errorMessage
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    const { download } = getJson(language)

    return new Response(
      JSON.stringify({
        success: false,
        message: download.errors.couldNotBeDownloaded
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
