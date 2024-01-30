// Controllers
import { downloadController } from "./download-video"

// Validations
import { isYoutubeURL } from "@/validations/url"

export async function onClickController(downloadVideo: boolean) {
  const videoURLInput = document.querySelector("input") as HTMLInputElement
  const buttonsDownload = document.querySelectorAll("button")

  const toggleState = (disabled: boolean) => {
    buttonsDownload.forEach(btnDownload => {
      btnDownload.disabled = disabled
    })

    videoURLInput.disabled = disabled
  }

  try {
    toggleState(true)

    const url = videoURLInput.value

    const validation = isYoutubeURL(url)

    if (!validation.success) {
      return alert(validation.errorMessage)
    }

    const { success, errorMessage, responseMessage } = await downloadController(
      { url, downloadVideo, videoLocation: "" }
    )

    alert(success ? responseMessage : errorMessage)
  } catch (error) {
    console.error(error)

    alert(
      "An error occurred while downloading the video/audio, please try again later, if the problem persists please contact me."
    )
  } finally {
    videoURLInput.value = ""

    toggleState(false)
  }
}
