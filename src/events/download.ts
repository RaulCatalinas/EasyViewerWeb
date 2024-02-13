import mitt from "mitt"

type Events = {
	isDownloading: boolean
}

const emitter = mitt<Events>()

export function launchIsDownloadingEvent(isDownloading: boolean) {
	emitter.emit("isDownloading", isDownloading)
}

export function listenIsDownloadingEvent(callback: (event: boolean) => void) {
	emitter.on("isDownloading", callback)
}
