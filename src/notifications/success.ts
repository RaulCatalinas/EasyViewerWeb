import { toast } from "react-toastify"

export function successNotification(text: string) {
	return toast.success(text, {
		position: "top-right",
		pauseOnHover: false
	})
}
