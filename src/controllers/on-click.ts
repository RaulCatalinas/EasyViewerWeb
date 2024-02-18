// Validations
import { isYoutubeURL } from "@/validations/url"

// Notifications
import { notify } from "@/notifications/notify"

// Events
import { launchIsDownloadingEvent } from "@/events/download"

// i18n
import { getJson, getLangFromUrl } from "@/i18n/utils"

interface APIResponse {
	success: boolean
	message: string
}

export async function onClickController(downloadVideo: boolean) {
	const videoURLInput = document.getElementById("input-url") as HTMLInputElement
	const buttonsDownload = document.querySelectorAll("button")

	const toggleState = (disabled: boolean) => {
		for (const btnDownload of buttonsDownload) {
			btnDownload.disabled = disabled
		}

		videoURLInput.disabled = disabled
	}

	const i18nURL = new URL(location.href)
	const lang = getLangFromUrl(i18nURL)
	const { download } = getJson(lang)

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

		const res = await fetch("/api/download", {
			method: "POST",
			body: JSON.stringify({ url, downloadVideo }),
			headers: {
				"Content-Type": "application/json",
				Language: lang
			}
		})

		const { success, message }: APIResponse = await res.json()

		notify({
			text: message,
			type: success ? "success" : "error"
		})
	} catch (error) {
		console.error(error)

		notify({
			text: download.errors.couldNotBeDownloaded,
			type: "error"
		})
	} finally {
		videoURLInput.value = ""

		launchIsDownloadingEvent(false)

		toggleState(false)
	}
}
