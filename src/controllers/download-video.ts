interface DownloadControllerProps {
	url: string
	downloadVideo: boolean
	videoLocation: string
}

interface DownloadControllerResult {
	success: boolean
	errorMessage?: string
	responseMessage?: string
}

export async function downloadController({
	url,
	downloadVideo,
	videoLocation
}: DownloadControllerProps): Promise<DownloadControllerResult> {
	try {
		if (downloadVideo) {
			return { success: true, responseMessage: "Video downloaded successfully" }
		} else {
			return {
				success: true,
				responseMessage: "Audio downloaded successfully"
			}
		}
	} catch (error) {
		console.error(error)

		return {
			success: false,
			errorMessage:
				"An error occurred while downloading the video/audio, please try again later, if the problem persists please contact me."
		}
	}
}
