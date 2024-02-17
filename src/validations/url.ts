// Constants
import { ALLOWED_HOST } from "@/constants/host"

// Third-Party libraries
import isEmpty from "validator/lib/isEmpty"
import isURL from "validator/lib/isURL"

// i18n
import { getJson, getLangFromUrl } from "@/i18n/utils"

interface IsYoutubeURLResult {
	success: boolean
	errorMessage?: string
}

export function isYoutubeURL(url: string): IsYoutubeURLResult {
	const i18nURL = new URL(location.href)
	const lang = getLangFromUrl(i18nURL)
	const { download } = getJson(lang)

	if (isEmpty(url)) {
		return { success: false, errorMessage: download.errors.urlRequired }
	}

	const isValidURL = isURL(url, {
		protocols: ["https"],
		require_protocol: true
	})

	if (!isValidURL) {
		return {
			success: false,
			errorMessage: download.errors.urlNotValid
		}
	}

	const { host } = new URL(url)

	if (!ALLOWED_HOST.includes(host)) {
		return { success: false, errorMessage: download.errors.urlIsNotFromYoutube }
	}

	return { success: true }
}
