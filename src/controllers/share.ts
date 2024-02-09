// Utils
import { copyTextToClipboard } from "@/utils/clipboard"

// Notifications
import { notify } from "@/notifications/notify"

export async function shareController() {
	try {
		await copyTextToClipboard(location.href)

		notify({
			text: "URL copied to clipboard",
			type: "success"
		})
	} catch (error) {
		console.error(error)
		notify({
			text: "Oops! A problem occurred while trying to copy the URL to the clipboard. Please try again later.",
			type: "error"
		})
	}
}
