// Validations
import { isYoutubeURL } from '@/validations/url'

// Notifications
import { notify } from '@/notifications/notify'

// Events
import { launchEvent } from '@/events/eventManager'

// i18n
import { getJson, getLangFromUrl } from '@/i18n/utils'

// Third-party libraries
import axios from 'axios'

// Utils
import { $, $$ } from '@/utils/dom'
import { getUserOS } from '@/utils/get-user-os'

// Validations
import { isValidOS } from '@/validations/is-valid-os'

interface APIResponse {
  success: boolean
  message: string
}

export async function onClickController(downloadVideo: boolean) {
  const $videoURLInput = $('#input-url') as HTMLInputElement
  const $buttonsDownload = $$('button') as NodeListOf<HTMLButtonElement>

  const toggleState = (disabled: boolean) => {
    for (const $btnDownload of $buttonsDownload) {
      const btnId = $btnDownload.getAttribute('id')

      if (btnId === 'downloadVideo-false') continue

      $btnDownload.disabled = disabled
    }

    $videoURLInput.disabled = disabled
  }

  const i18nURL = new URL(location.href)
  const language = getLangFromUrl(i18nURL)
  const { download, validations } = getJson(language)

  try {
    const userOS = getUserOS()
    const isValidUserOS = isValidOS(userOS)

    if (!isValidUserOS) {
      notify({
        text: validations.os,
        type: 'error'
      })

      return
    }

    toggleState(true)

    const url = $videoURLInput.value
    const validation = isYoutubeURL(url)

    if (!validation.success) {
      notify({
        text: validation.errorMessage ?? '',
        type: 'error'
      })

      return
    }

    launchEvent({
      event: 'isDownloading',
      value: true
    })

    const res = await axios.post<APIResponse>(
      '/api/download',
      {
        url,
        downloadVideo,
        userOS
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Language: language
        }
      }
    )

    const { success, message } = res.data

    notify({
      text: message,
      type: success ? 'success' : 'error'
    })

    if (success) {
      notify({
        text: download.info,
        type: 'info'
      })
    }
  } catch (error) {
    console.error(error)

    notify({
      text: download.errors.couldNotBeDownloaded,
      type: 'error'
    })
  } finally {
    $videoURLInput.value = ''

    launchEvent({
      event: 'isDownloading',
      value: false
    })

    toggleState(false)
  }
}
