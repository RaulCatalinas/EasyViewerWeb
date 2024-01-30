import styles from "@/css/contact/option.module.css"

interface OptionProps {
  value: string
  text: string
}

export default function Option({ value, text }: OptionProps) {
  return (
    <option className={styles.option} value={value}>
      {text}
    </option>
  )
}
