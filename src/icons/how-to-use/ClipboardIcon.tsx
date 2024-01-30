import styles from "@/css/how-to-use/step-icons.module.css"

export default function ClipboardIcon() {
  return (
    <svg
      className={`
        icon icon-tabler icon-tabler-clipboard
        ${styles["how-to-use-icon"]}
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
      <path d="m9 5h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2h-2" />
      <path d="m9 3m0 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
    </svg>
  )
}
