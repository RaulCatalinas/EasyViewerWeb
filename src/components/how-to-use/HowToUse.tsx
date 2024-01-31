// Components
import Step from "./Step"
import StepIcons from "./StepIcons"

// CSS

// SVG
import ClipboardIcon from "@/icons/how-to-use/ClipboardIcon"
import DownloadIcon from "@/icons/how-to-use/DownloadIcon"
import FilmIcon from "@/icons/how-to-use/FilmIcon"

export default function HowToUse() {
	return (
		<section className="flex items-center justify-center mt-4 bg-indigo-200 text-black max-md:flex-col w-max p-3">
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
