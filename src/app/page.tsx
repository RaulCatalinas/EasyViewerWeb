// CSS
import styles from "./page.module.css"

// Components
import DownloadForm from "@/components/form/DownloadForm"

export default function Home() {
  return (
    <main className={styles.main}>
      <DownloadForm />
    </main>
  )
}
