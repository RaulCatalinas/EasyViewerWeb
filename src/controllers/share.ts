// Utils
import { copyTextToClipboard } from "@/utils/clipboard"

// Notifications
import { notify } from "@/notifications/notify"

// i18n
import { getJson, getLangFromUrl } from "@/i18n/utils"

export async function shareController() {
	const url = new URL(location.href)
	const lang = getLangFromUrl(url)
	const { share } = getJson(lang)

	try {
		await copyTextToClipboard(location.href)

		notify({
			text: share.success,
			type: "success"
		})
	} catch (error) {
		console.error(error)
		notify({
			text: share.error,
			type: "error"
		})
	}
}
