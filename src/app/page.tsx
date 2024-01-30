// CSS
import styles from "./page.module.css"

// Components
import DownloadForm from "@/components/form/DownloadForm"
import HowToUse from "@/components/how-to-use/HowToUse"
import NavBar from "@/components/nav/NavBar"

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <DownloadForm />
      <HowToUse />
    </main>
  )
}
