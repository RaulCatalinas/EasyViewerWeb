// Types
import type { Language } from "@/types/language"

// COnstants
import { ENGLISH_CODE } from "@/constants/i18n"

export function changeLanguageController() {
	const languageDropdown = document.getElementById("select-language")

	languageDropdown?.addEventListener("change", event => {
		const language = (event.target as HTMLSelectElement).value as Language

		if (language === ENGLISH_CODE) return (location.href = "en")

		location.href = "/"
	})
}
