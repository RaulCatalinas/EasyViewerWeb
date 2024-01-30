// CSS
import styles from "@/css/icons/arrow-icon.module.css"

export default function ArrowIcon() {
  return (
    <svg
      className={`
        icon icon-tabler icon-tabler-arrow-right
        ${styles["step-icon"]}
      `}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="m5 12h14" />
      <path d="m13 18 6-6" />
      <path d="m13 6 6 6" />
    </svg>
  )
}
