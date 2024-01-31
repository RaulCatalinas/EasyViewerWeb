// React
import { useEffect, useState } from "react"

export function useDownloadProgress() {
	const [downloadProgress, setDownloadProgress] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => {
			const newProgress = downloadProgress + 1
			if (newProgress > 100) {
				setDownloadProgress(0)
			} else {
				setDownloadProgress(newProgress)
			}
		}, 50)

		return () => clearInterval(intervalId)
	}, [downloadProgress])

	return { downloadProgress }
}
