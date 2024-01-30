// CSS
import styles from "@/css/form/download-form.module.css"

// Components
import { DownloadButton } from "../buttons/DownloadButton"

export default function DownloadForm() {
  return (
    <form className={styles.form}>
      <label htmlFor="input-url" className={styles.label}>
        Video URL <span className={styles.span}>*</span>:
      </label>
      <input
        type="url"
        className={styles.input}
        id="input-url"
        placeholder="YouTube video URL"
        required
        autoFocus
      />
      <DownloadButton downloadVideo={true} />
      <DownloadButton downloadVideo={false} />
    </form>
  )
}
