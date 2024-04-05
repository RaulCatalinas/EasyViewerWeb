interface ProgressBarControllerProps {
  progressBar: HTMLProgressElement
  isDownloading: boolean
}

// eslint-disable-next-line no-undef
let intervalID: NodeJS.Timeout

export function progressBarController({
  progressBar,
  isDownloading
}: ProgressBarControllerProps) {
  if (isDownloading) {
    intervalID = setInterval(() => {
      if (progressBar.value === 100) {
        progressBar.value = 0
      }

      progressBar.value++
    }, 50)
  } else {
    clearInterval(intervalID)
    progressBar.value = 0
  }
}
