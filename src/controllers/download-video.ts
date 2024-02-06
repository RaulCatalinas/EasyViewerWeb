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
	try {
		return {
			success: true,
			responseMessage: "Download completed successfully"
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
