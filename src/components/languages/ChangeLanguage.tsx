// Icons
import SpanishFlag from "@/icons/flags/SpanishFlag"
import UKFlag from "@/icons/flags/UKFlag"

// Hooks
import { useRangeValue } from "@/hooks/useRangeValue"

export default function ChangeLanguage() {
	const { rangeValue, changeRangeValue } = useRangeValue()

	return (
		<div className="flex flex-row gap-2 justify-center items-center max-md:flex-col">
			<button
				type="button"
				onClick={() => changeRangeValue(0)}
				className="max-md:mb-3"
			>
				<UKFlag />
			</button>
			<input
				type="range"
				min={0}
				max={1}
				value={rangeValue}
				onClick={() => changeRangeValue(rangeValue === 0 ? 1 : 0)}
				className="w-10 bg-gray-200 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 max-md:rotate-90"
			/>
			<button
				type="button"
				onClick={() => changeRangeValue(1)}
				className="max-md:mt-3"
			>
				<SpanishFlag />
			</button>
		</div>
	)
}
