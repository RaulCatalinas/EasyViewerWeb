// i18n
import { getJson } from "@/i18n/utils"

// Types
import type { Language } from "@/types/language"

interface DownloadControllerProps {
	url: string
	downloadVideo: boolean
	language: Language
}

interface DownloadControllerResult {
	success: boolean
	errorMessage?: string
	responseMessage?: string
}

export async function downloadController({
	url,
	downloadVideo,
	language
}: DownloadControllerProps): Promise<DownloadControllerResult> {
	const { download } = getJson(language)

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
