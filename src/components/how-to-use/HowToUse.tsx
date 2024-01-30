// Components
import Step from "./Step"
import StepIcons from "./StepIcons"

// CSS
import styles from "@/css/how-to-use/how-to-use.module.css"

// SVG
import ClipboardIcon from "@/icons/ClipboardIcon"
import DownloadIcon from "@/icons/DownloadIcon"
import FilmIcon from "@/icons/FilmIcon"

export default function HowToUse() {
  return (
    <section className={styles["how-to-use"]}>
      <div>
        <ClipboardIcon />
        <Step
          stepNumber={1}
          title="Paste URL"
          description="Paste the YouTube link into the search box."
        />
      </div>
      <StepIcons />
      <div>
        <FilmIcon />
        <Step
          stepNumber={2}
          title="Select format (MP4 or MP3)"
          description="Click on the Download video button or the Download audio button."
        />
      </div>
      <StepIcons />
      <div>
        <DownloadIcon />
        <Step
          stepNumber={3}
          title="Wait until it downloads"
          description="Finally, wait for the download to complete."
        />
      </div>
    </section>
  )
}
