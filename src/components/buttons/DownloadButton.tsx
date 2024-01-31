"use client"

// Controllers
import { onClickController } from "@/controllers/on-click"

// Icons
import AudioIcon from "@/icons/buttons/AudioIcon"
import VideoIcon from "@/icons/buttons/VideoIcon"

interface DownloadButtonProps {
  downloadVideo: boolean
}

export function DownloadButton({ downloadVideo }: DownloadButtonProps) {
  return (
    <button
      type="submit"
      className="m-1 p-3 bg-green-600 text-white rounded text-base hover:bg-green-800 hover:cursor-pointer hover:scale-110 active:scale-90 disabled:cursor-not-allowed text-center flex justify-center"
      onClick={async event => {
        event.preventDefault()
        await onClickController(downloadVideo)
      }}
    >
      {downloadVideo ? <VideoIcon /> : <AudioIcon />}

      <span className="text-2xl pl-2">
        {downloadVideo ? "Download video" : "Download audio"}
      </span>
    </button>
  )
}
