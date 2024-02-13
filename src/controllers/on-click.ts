// Controllers
import { downloadController } from "./download-video"

// Validations
import { isYoutubeURL } from "@/validations/url"

// Notifications
import { notify } from "@/notifications/notify"

// Events
import { launchIsDownloadingEvent } from "@/events/download"

export async function onClickController(downloadVideo: boolean) {
	const videoURLInput = document.getElementById("input-url") as HTMLInputElement
	const buttonsDownload = document.querySelectorAll("button")

	const toggleState = (disabled: boolean) => {
		for (const btnDownload of buttonsDownload) {
			btnDownload.disabled = disabled
		}

		videoURLInput.disabled = disabled
	}

	try {
		toggleState(true)

		const url = videoURLInput.value

		const validation = isYoutubeURL(url)

		if (!validation.success) {
			return notify({
				text: validation.errorMessage ?? "",
				type: "error"
			})
		}

		launchIsDownloadingEvent(true)

		const {
			success,
			errorMessage: apiErrorMessage,
			responseMessage: apiResponseMessage
		} = await downloadController({ url, downloadVideo })

		const responseMessage = apiResponseMessage ?? ""
		const errorMessage = apiErrorMessage ?? ""

		notify({
			text: success ? responseMessage : errorMessage,
			type: success ? "success" : "error"
		})
	} catch (error) {
		console.error(error)

		notify({
			text: "An error occurred while downloading the video/audio, please try again later, if the problem persists please contact me.",
			type: "error"
		})
	} finally {
		videoURLInput.value = ""

		launchIsDownloadingEvent(false)

		toggleState(false)
	}
}
