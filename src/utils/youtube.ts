// Third-Party libraries
import ytdl from "ytdl-core"

// Utils
import { cleanInvalidChars } from "./chars"

export async function getVideoTitle(url: string) {
  const { videoDetails } = await ytdl.getBasicInfo(url)

  const videoTitle = videoDetails.title

  return cleanInvalidChars(videoTitle)
}
