// Third-Party libraries
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

// Constants
import { GRADIENT_COLORS } from "@/constants/notifications"

// Types
import type { NotificationType } from "@/types/notifications"

interface notifyProps {
	text: string
	type: NotificationType
}

export function notify({ text, type }: notifyProps) {
	const { firstColour, secondColour, thirdColour } = GRADIENT_COLORS[type]

	Toastify({
		text,
		gravity: "top",
		position: "right",
		close: true,
		stopOnFocus: false,
		style: {
			background: `linear-gradient(to right, ${firstColour} 0%, ${secondColour} 35%, ${thirdColour} 100%)`,
			"border-radius": "10px"
		}
	}).showToast()
}
