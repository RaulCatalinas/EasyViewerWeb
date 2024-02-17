// UI
import { defaultLang, languages } from "./ui"

// JSON
import enJson from "./json/en.json"
import esJson from "./json/es.json"

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split("/")

	if (lang in languages) return lang as keyof typeof languages

	return defaultLang
}

export function getJson(lang: keyof typeof languages) {
	if (lang === "es") return esJson

	return enJson
}
