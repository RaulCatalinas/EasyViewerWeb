interface HowToUseStepProps {
	stepNumber: number
	title: string
	description: string
}

export default function Step({
	stepNumber,
	title,
	description
}: HowToUseStepProps) {
	return (
		<div>
			<h5 className="mt-0 text-center text-balance">
				{stepNumber}. {title}
			</h5>
			<p className="text-base text-pretty">{description}</p>
		</div>
	)
}
