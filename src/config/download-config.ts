// Third-Party libraries
import ytdl from "ytdl-core"

// Types
import { File_Extensions } from "@/types/files.d"

export const DOWNLOAD_FORMAT_FILTERS = {
	video: (format: ytdl.videoFormat) =>
		format.container === File_Extensions.Video,
	audio: (format: ytdl.videoFormat) =>
		format.container === File_Extensions.Audio3GP
} as const
