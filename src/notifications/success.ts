import toastify from "toastify-js"

export function successNotification(message: string) {
	toastify({
		text: message,
		gravity: "top",
		position: "right",
		close: true,
		stopOnFocus: false,
		style: {
			background:
				"linear-gradient(90deg, rgba(0,36,5,1) 0%, rgba(9,121,22,1) 35%, rgba(0,255,12,1) 100%)"
		}
	}).showToast()
}
