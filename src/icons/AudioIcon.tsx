// CSS
import styles from "@/css/icons/download-icons.module.css"

export default function AudioIcon() {
  return (
    <svg
      className={`
        icon icon-tabler icon-tabler-headphones
        ${styles.icon}
      `}
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="m4 13m0 2a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2z" />
      <path d="m15 13m0 2a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2z" />
      <path d="m4 15v-3a8 8 0 0 1 16 0v3" />
    </svg>
  )
}
