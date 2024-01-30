"use client"

// CSS
import styles from "@/css/contact/dropdown-contact.module.css"

// Constants
import { SOCIAL_NETWORKS } from "@/constants/social-networks"

// React
import { ChangeEvent } from "react"

// Components
import Option from "./Option"

type SocialNetworkKey = keyof typeof SOCIAL_NETWORKS

export default function DropdownContact() {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const socialNetworkKey = event.target.value as SocialNetworkKey
    const socialNetwork = SOCIAL_NETWORKS[socialNetworkKey]

    open(socialNetwork, "_blank")
  }

  return (
    <>
      <label htmlFor="contact-method" className={styles.label}>
        Contact Method
      </label>
      <select
        id="contact-method"
        onChange={handleChange}
        className={styles.select}
      >
        <Option value="facebook" text="Facebook" />
        <Option value="instagram" text="Instagram" />
        <Option value="twitter" text="Twitter" />
        <Option value="github" text="GitHub" />
      </select>
    </>
  )
}
