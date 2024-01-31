// Components
import DropdownContact from "../contact/DropdownContact"

export default function NavBar() {
  return (
    <nav className="p-2 m-3 bg-green-700">
      <ul className="m-0 p-0 flex justify-center items-center">
        <li className="mr-5">
          <DropdownContact />
        </li>
      </ul>
    </nav>
  )
}
