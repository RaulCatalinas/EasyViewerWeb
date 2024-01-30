"use client"

// CSS
import styles from "@/css/progress-bar/progress-bar.module.css"

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
      className={styles["progress-bar"]}
    />
  )
}
