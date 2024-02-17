import { getJson, getLangFromUrl } from "@/i18n/utils"

interface DownloadControllerProps {
	url: string
	downloadVideo: boolean
}

interface DownloadControllerResult {
	success: boolean
	errorMessage?: string
	responseMessage?: string
}

export async function downloadController({
	url,
	downloadVideo
}: DownloadControllerProps): Promise<DownloadControllerResult> {
	const i18nURL = new URL(location.href)
	const lang = getLangFromUrl(i18nURL)
	const { download } = getJson(lang)

	try {
		return {
			success: true,
			responseMessage: download.success
		}
	} catch (error) {
		console.error(error)

		return {
			success: false,
			errorMessage: download.errors.couldNotBeDownloaded
		}
	}
}
