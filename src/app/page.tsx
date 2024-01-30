// CSS
import styles from "./page.module.css"

// Components
import DownloadForm from "@/components/form/DownloadForm"
import HowToUse from "@/components/how-to-use/HowToUse"

export default function Home() {
  return (
    <main className={styles.main}>
      <DownloadForm />
      <HowToUse />
    </main>
  )
}
