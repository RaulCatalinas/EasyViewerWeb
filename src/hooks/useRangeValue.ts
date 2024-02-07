import { useState } from "react"

export function useRangeValue() {
	const [rangeValue, setRangeValue] = useState<0 | 1>(0)

	const changeRangeValue = (value: 0 | 1) => {
		setRangeValue(value)
	}

	return { rangeValue, changeRangeValue }
}
