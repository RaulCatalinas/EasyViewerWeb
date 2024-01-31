// CSS
import styles from "./page.module.css"

// Components
import DownloadForm from "@/components/form/DownloadForm"
import HowToUse from "@/components/how-to-use/HowToUse"
import NavBar from "@/components/nav/NavBar"
import ProgressBar from "@/components/progress-bar/ProgressBar"

// Third-Party libraries
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.min.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <ToastContainer />
      <NavBar />
      <DownloadForm />
      <ProgressBar />
      <HowToUse />
    </main>
  )
}
