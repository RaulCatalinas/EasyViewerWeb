"use client"

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
      <label
        htmlFor="contact-method"
        className="text-lg mb-2 block text-white text-center"
      >
        Contact Method
      </label>
      <select
        id="contact-method"
        onChange={handleChange}
        className="p-2 text-base rounded cursor-pointer focus:border-blue-500"
      >
        <Option value="facebook" text="Facebook" />
        <Option value="instagram" text="Instagram" />
        <Option value="twitter" text="Twitter" />
        <Option value="github" text="GitHub" />
      </select>
    </>
  )
}
