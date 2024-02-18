// JSON
import enJson from "./json/en.json"
import esJson from "./json/es.json"

// Validations
import { isValidLanguage } from "@/validations/is-valid-language"

// Types
import type { Language } from "@/types/language"

export function getLangFromUrl(url: URL): Language {
	const [, lang] = url.pathname.split("/")

	if (!isValidLanguage(lang)) return "en"

	return lang
}

export function getJson(lang: Language) {
	if (lang === "es") return esJson

	return enJson
}
