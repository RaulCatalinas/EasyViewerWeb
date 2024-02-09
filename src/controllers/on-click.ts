// Controllers
import { downloadController } from "./download-video"

// Validations
import { isYoutubeURL } from "@/validations/url"

// Notifications
import { notify } from "@/notifications/notify"

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

		const { success, errorMessage, responseMessage } = await downloadController(
			{ url, downloadVideo }
		)

		success
			? notify({
					text: responseMessage ?? "",
					type: "success"
			  })
			: notify({
					text: errorMessage ?? "",
					type: "error"
			  })
	} catch (error) {
		console.error(error)

		notify({
			text: "An error occurred while downloading the video/audio, please try again later, if the problem persists please contact me.",
			type: "error"
		})
	} finally {
		videoURLInput.value = ""

		toggleState(false)
	}
}
