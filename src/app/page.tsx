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
    <main className="min-h-screen">
      <ToastContainer />
      <NavBar />

      <div className="flex justify-center items-center">
        <DownloadForm />
      </div>
      <ProgressBar />

      <div className="flex justify-center items-center">
        <HowToUse />
      </div>
    </main>
  )
}
