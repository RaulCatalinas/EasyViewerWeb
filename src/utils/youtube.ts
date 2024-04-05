// Third-Party libraries
import ytdl from 'ytdl-core'

export async function getVideoTitle(url: string) {
  const { videoDetails } = await ytdl.getBasicInfo(url)

  return videoDetails.title
}
