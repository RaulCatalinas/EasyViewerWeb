// Controllers
import { downloadController } from "./download-video"

// Validations
import { isYoutubeURL } from "@/validations/url"

import { errorNotification } from "@/notifications/error"
// Notifications
import { successNotification } from "@/notifications/success"

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
			return errorNotification(validation.errorMessage ?? "")
		}

		const { success, errorMessage, responseMessage } = await downloadController(
			{ url, downloadVideo }
		)

		success
			? successNotification(responseMessage ?? "")
			: errorNotification(errorMessage ?? "")
	} catch (error) {
		console.error(error)

		errorNotification(
			"An error occurred while downloading the video/audio, please try again later, if the problem persists please contact me."
		)
	} finally {
		videoURLInput.value = ""

		toggleState(false)
	}
}
