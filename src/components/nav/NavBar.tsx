// Components
import DropdownContact from "../contact/DropdownContact"

// CSS
import styles from "@/css/nav/navbar.module.css"

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <DropdownContact />
        </li>
      </ul>
    </nav>
  )
}
