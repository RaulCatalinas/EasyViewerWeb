import styles from "@/css/how-to-use/step.module.css"

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
      <h5 className={styles["step-number"]}>
        {stepNumber}. {title}
      </h5>
      <p className={styles["step-text"]}>{description}</p>
    </div>
  )
}
