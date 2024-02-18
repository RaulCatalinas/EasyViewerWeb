type Language = "en" | "es"

export function changeLanguageController() {
	const languageDropdown = document.getElementById("select-language")

	languageDropdown?.addEventListener("change", event => {
		const language = (event.target as HTMLSelectElement).value as Language

		if (language === "es") return (location.href = "es")

		location.href = "/"
	})
}
