// CSS
import styles from "./page.module.css"

// Components
import DownloadForm from "@/components/form/DownloadForm"
import HowToUse from "@/components/how-to-use/HowToUse"
import NavBar from "@/components/nav/NavBar"
import ProgressBar from "@/components/progress-bar/ProgressBar"

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <DownloadForm />
      <ProgressBar />
      <HowToUse />
    </main>
  )
}
