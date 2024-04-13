// Controllers
import { onClickController } from '@/controllers/on-click'

// Icons
import AudioIcon from '@/icons/buttons/AudioIcon'
import VideoIcon from '@/icons/buttons/VideoIcon'

// i18n
import { getJson, getLangFromUrl } from '@/i18n/utils'

interface DownloadButtonProps {
  downloadVideo: boolean
  i18nURL: URL
}

type ClickEvent = MouseEvent & {
  currentTarget: HTMLButtonElement
  target: Element
}

export default function DownloadButton(props: DownloadButtonProps) {
  // eslint-disable-next-line solid/reactivity
  const lang = getLangFromUrl(props.i18nURL)
  const { buttons } = getJson(lang)

  const handleClick = async (event: ClickEvent) => {
    event.preventDefault()
    await onClickController(props.downloadVideo)
  }

  return (
    <button
      type="submit"
      class={`
        m-1 p-3 bg-green-600 text-white rounded text-base 
        hover:bg-green-800 hover:cursor-pointer hover:scale-110 
        active:scale-90 disabled:cursor-not-allowed disabled:bg-slate-800 
        text-center flex justify-center w-full
      `}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={handleClick}
      disabled={!props.downloadVideo}
      id={`downloadVideo-${props.downloadVideo}`}
    >
      {props.downloadVideo ? <VideoIcon /> : <AudioIcon />}

      <span class="text-2xl pl-2">
        {props.downloadVideo ? buttons.video : buttons.audio}
      </span>
    </button>
  )
}
