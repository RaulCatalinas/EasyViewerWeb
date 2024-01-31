// Components
import { DownloadButton } from "../buttons/DownloadButton"

export default function DownloadForm() {
  return (
    <form className="flex flex-col p-4 rounded-lg bg-indigo-200 w-[400px]">
      <label htmlFor="input-url" className="mb-2 text-xl">
        Video URL <span className="text-red-600 ml-1">*</span>:
      </label>
      <input
        type="url"
        className="p-2 mb-4 rounded text-base resize-none disabled:cursor-not-allowed"
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
