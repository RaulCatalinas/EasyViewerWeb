// Validations
import { isYoutubeURL } from "@/validations/url"

// Notifications
import { notify } from "@/notifications/notify"

// Events
import { launchEvent } from "@/events/eventManager"

// i18n
import { getJson, getLangFromUrl } from "@/i18n/utils"

// Third-party libraries
import axios from "axios"

// Utils
import { getUserOS } from "@/utils/get-user-os"

// Validations
import { isValidOS } from "@/validations/is-valid-os"

interface APIResponse {
	success: boolean
	message: string
}

export async function onClickController(downloadVideo: boolean) {
	const videoURLInput = document.getElementById("input-url") as HTMLInputElement
	const buttonsDownload = document.querySelectorAll("button")

	const toggleState = (disabled: boolean) => {
		for (const btnDownload of buttonsDownload) {
			const btnId = btnDownload.getAttribute("id")

			if (btnId === "downloadVideo-false") continue

			btnDownload.disabled = disabled
		}

		videoURLInput.disabled = disabled
	}

	const i18nURL = new URL(location.href)
	const language = getLangFromUrl(i18nURL)
	const { download, validations } = getJson(language)

	try {
		toggleState(true)

		const url = videoURLInput.value

		const validation = isYoutubeURL(url)

		const userOS = getUserOS()
		const isValidUserOS = isValidOS(userOS)

		if (!validation.success) {
			return notify({
				text: validation.errorMessage ?? "",
				type: "error"
			})
		}

		if (!isValidUserOS) {
			return notify({
				text: validations.os,
				type: "error"
			})
		}

		launchEvent({
			event: "isDownloading",
			value: true
		})

		const res = await axios.post<APIResponse>(
			"/api/download",
			{
				url,
				downloadVideo
			},
			{
				headers: {
					"Content-Type": "application/json",
					Language: language
				}
			}
		)

		const { success, message } = res.data

		notify({
			text: message,
			type: success ? "success" : "error"
		})
		notify({
			text: download.info,
			type: "info"
		})
	} catch (error) {
		console.error(error)

		notify({
			text: download.errors.couldNotBeDownloaded,
			type: "error"
		})
	} finally {
		videoURLInput.value = ""

		launchEvent({
			event: "isDownloading",
			value: false
		})

		toggleState(false)
	}
}
