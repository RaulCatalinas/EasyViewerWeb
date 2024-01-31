"use client"

// Third-Party libraries
import { Line } from "rc-progress"

// Hooks
import { useDownloadProgress } from "@/hooks/useDownloadProgress"

export default function ProgressBar() {
  const { downloadProgress } = useDownloadProgress()

  return (
    <Line
      strokeColor="#008f39"
      percent={downloadProgress}
      className="w-full mt-4 h-3"
    />
  )
}
