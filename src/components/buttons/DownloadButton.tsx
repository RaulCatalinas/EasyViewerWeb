"use client"

// Controllers
import { onClickController } from "@/controllers/on-click"

// Icons
import AudioIcon from "@/icons/buttons/AudioIcon"
import VideoIcon from "@/icons/buttons/VideoIcon"

// CSS
import styles from "@/css/buttons/download-button.module.css"

interface DownloadButtonProps {
  downloadVideo: boolean
}

export function DownloadButton({ downloadVideo }: DownloadButtonProps) {
  return (
    <button
      type="submit"
      className={styles.button}
      onClick={async event => {
        event.preventDefault()
        await onClickController(downloadVideo)
      }}
    >
      {downloadVideo ? <VideoIcon /> : <AudioIcon />}

      <span className={styles.text}>
        {downloadVideo ? "Download video" : "Download audio"}
      </span>
    </button>
  )
}
