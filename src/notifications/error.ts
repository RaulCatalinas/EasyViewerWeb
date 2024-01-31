import { toast } from "react-toastify"

export function errorNotification(text: string) {
	return toast.error(text, {
		position: "top-right",
		pauseOnHover: false,
	})
}
