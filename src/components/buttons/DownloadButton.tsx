// Controllers
import { onClickController } from "@/controllers/on-click"

// Icons
import AudioIcon from "@/icons/buttons/AudioIcon"
import VideoIcon from "@/icons/buttons/VideoIcon"

// i18n
import { getJson, getLangFromUrl } from "@/i18n/utils"

interface DownloadButtonProps {
	downloadVideo: boolean
	i18nURL: URL
}

export default function DownloadButton({
	downloadVideo,
	i18nURL
}: DownloadButtonProps) {
	const lang = getLangFromUrl(i18nURL)
	const { buttons } = getJson(lang)

	return (
		<button
			type="submit"
			className="m-1 p-3 bg-green-600 text-white rounded text-base hover:bg-green-800 hover:cursor-pointer hover:scale-110 active:scale-90 disabled:cursor-not-allowed disabled:bg-gray-500 text-center flex justify-center"
			onClick={async event => {
				event.preventDefault()
				await onClickController(downloadVideo)
			}}
		>
			{downloadVideo ? <VideoIcon /> : <AudioIcon />}

			<span className="text-2xl pl-2">
				{downloadVideo ? buttons.video : buttons.audio}
			</span>
		</button>
	)
}
