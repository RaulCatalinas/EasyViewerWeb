// Controllers
import { downloadController } from "./download-video"

// Validations
import { isYoutubeURL } from "@/validations/url"

export async function onClickController(downloadVideo: boolean) {
  const videoURLInput = document.querySelector("input") as HTMLInputElement
  const buttonsDownload = document.querySelectorAll("button")

  const toggleState = (disabled: boolean) => {
    for (const btnDownload of buttonsDownload) {
      btnDownload.disabled = disabled
    }

    videoURLInput.disabled = disabled
  }

  try {
    toggleState(true)

    const url = videoURLInput.value

    const validation = isYoutubeURL(url)

    if (!validation.success) {
      return { success: false, errorMessage: validation.errorMessage }
    }

    const { success, errorMessage, responseMessage } = await downloadController(
      { url, downloadVideo }
    )

    if (!success) {
      return alert(errorMessage)
    }

    return alert(responseMessage)
  } catch (error) {
    console.error(error)

    return alert(
      "An error occurred while downloading the video/audio, please try again later, if the problem persists please contact me."
    )
  } finally {
    videoURLInput.value = ""

    toggleState(false)
  }
}
