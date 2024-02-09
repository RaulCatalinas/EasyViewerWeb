import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

export function errorNotification(message: string) {
	Toastify({
		text: message,
		gravity: "top",
		position: "right",
		close: true,
		stopOnFocus: false,
		style: {
			background:
				"linear-gradient(to right, rgba(36,0,0,1) 0%, rgba(121,9,9,1) 35%, rgba(255,0,0,1) 100%)",
			"border-radius": "25px"
		}
	}).showToast()
}
