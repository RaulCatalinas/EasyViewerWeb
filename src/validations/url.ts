// Constants
import { ALLOWED_HOST } from "@/constants/host"

// Third-Party libraries
import isEmpty from "validator/lib/isEmpty"
import isURL from "validator/lib/isURL"

interface IsYoutubeURLResult {
  success: boolean
  errorMessage?: string
}

export function isYoutubeURL(url: string): IsYoutubeURLResult {
  if (isEmpty(url)) {
    return { success: false, errorMessage: "URL is required" }
  }

  const isValidURL = isURL(url, {
    protocols: ["https"],
    require_protocol: true
  })

  if (!isValidURL) {
    return {
      success: false,
      errorMessage: "The value entered isn't a valid URL"
    }
  }

  const { host } = new URL(url)

  if (!ALLOWED_HOST.includes(host)) {
    return { success: false, errorMessage: "The URL isn't from YouTube" }
  }

  return { success: true }
}
