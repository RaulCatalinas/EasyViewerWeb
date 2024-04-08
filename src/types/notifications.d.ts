export type NotificationType = 'success' | 'error' | 'info'

export type GradientColors = Record<
	string,
	Record<
		"firstColor" | "secondColor" | "thirdColor",
		`rgba(${number},${number},${number},${number})`
	>
>
