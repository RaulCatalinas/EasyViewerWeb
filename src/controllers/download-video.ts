// Third-Party libraries
import ytdl from "ytdl-core"

// Utils
import { getVideoTitle } from "@/utils/youtube"

// NodeJS
import fs from "node:fs"
import os from "node:os"

// i18n
import { getJson } from "@/i18n/utils"

// Types
import { File_Extensions } from "@/types/files.d"
import type { Language } from "@/types/language"

// Constants
import { UTF8_ENCODING } from "@/constants/files"

// Config
import { DOWNLOAD_FORMAT_FILTERS } from "@/config/download-config"

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
		const title = await getVideoTitle(url)

		const extension = downloadVideo
			? File_Extensions.Video
			: File_Extensions.Audio

		const directory = os.homedir()

		await ytdl(url, {
			filter: DOWNLOAD_FORMAT_FILTERS[downloadVideo ? "video" : "audio"]
		}).pipe(
			fs.createWriteStream(`${directory}/desktop/${title}.${extension}`, {
				encoding: UTF8_ENCODING
			})
		)

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
